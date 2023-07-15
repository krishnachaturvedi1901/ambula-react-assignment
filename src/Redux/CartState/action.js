import axios from "axios";
import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, GET_ALL_CART_PRODUCTS_ERROR, GET_ALL_CART_PRODUCTS_LOADING, GET_ALL_CART_PRODUCTS_SUCCESS } from "./actionTypes";
const cartApiUrl=process.env.REACT_APP_CARTS_API_URL

export const addToCartLoading=()=>({
    type:ADD_TO_CART_LOADING,
    payload:[]
})
export const addToCartSuccess=()=>({
    type:ADD_TO_CART_SUCCESS,
    payload:[]
})
export const addToCartError=()=>({
    type:ADD_TO_CART_ERROR,
    payload:[]
})

export const getAllCartProductsLoading=()=>({
    type:GET_ALL_CART_PRODUCTS_LOADING,
    payload:{}
})
export const getAllCartProductsSuccess=(data)=>({
    type:GET_ALL_CART_PRODUCTS_SUCCESS,
    payload:data
})
export const getAllCartProductsError=()=>({
    type:GET_ALL_CART_PRODUCTS_ERROR,
    payload:{}
})

export const checkInCartFunction=({productId,product})=>(dispatch)=>{
    dispatch(addToCartLoading())
    console.log("INSIDE CHECK IN CART FUNC-","productId-",productId,"PRODUCT-",product)
    const productDash={...product}
    delete productDash.id
    axios(`${cartApiUrl}?productId=${productId}`)
    .then((res)=>{
      console.log("res after checkInCart-",res.data)
      if(res.data.length!=0){
        dispatch(updateInCartFunction({cartId:res.data[0].id,quantity:res.data[0].quantity+1,totalPrice:res.data[0].totalPrice+res.data[0].price}))
      }else {
        dispatch(addToCartFunction({...productDash,productId,quantity:1,totalPrice:productDash.price}))
      }
      
    })
    .catch((err)=>{
      if(err.response.status== 404 &&err.response.statusText=="Not Found"){
        dispatch(addToCartFunction({...productDash,productId,quantity:1,totalPrice:productDash.price}))
      }
      else{
        console.log("error after checkIncart",err)
        dispatch(addToCartError())
      }
    })
}

export const updateInCartFunction=({cartId,quantity,totalPrice})=>(dispatch)=>{
    console.log("in updatecartfunc",cartId,quantity)
  axios.patch(`${cartApiUrl}/${cartId}`,{quantity,totalPrice})
  .then((res)=>{
    console.log("res after updateInCart-",res.data)
    dispatch(getAllProductsFromCartFunction())
    dispatch(addToCartSuccess())
  })
  .catch((err)=>{
    console.log("error after updateInCart",err)
    dispatch(addToCartError())
  })

}

export const addToCartFunction=(product)=>(dispatch)=>{
    console.log("getting product inside addTocart",product,cartApiUrl)
    axios.post(cartApiUrl,product) 
    .then((res)=>{
        console.log("res after addToCart-",res)
        dispatch(getAllProductsFromCartFunction())
        dispatch(addToCartSuccess())
      })
      .catch((err)=>{
        console.log("error after addToCart",err)
        dispatch(addToCartError())
      })
}

export const getAllProductsFromCartFunction=()=>(dispatch)=>{
    dispatch(getAllCartProductsLoading())
    axios(`${cartApiUrl}`)
    .then((result) => {
        console.log(" res after getAllProductsfromCart-",result)
            dispatch(getAllCartProductsSuccess(result.data))
    }).catch((err) => {
        console.log("error after getAllproductsfromCart function",err)
        dispatch(getAllCartProductsError())
    });

}

export const deleteFromCartFunction=({cartId})=>(dispatch)=>{
    axios.delete(`${cartApiUrl}/${cartId}`)
    .then((result) => {
        console.log(" res after deleteProductfromCart-",result)
        dispatch(getAllProductsFromCartFunction())
    }).catch((err) => {
        console.log("error after deleteproductfromCart function",err)
    });

}