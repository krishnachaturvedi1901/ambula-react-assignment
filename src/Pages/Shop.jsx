import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Toster from "../Components/TosterAlertCompo/Toster";
import { AlertContext } from "../Context/AlertContext";
import {GiShoppingCart} from "react-icons/gi"
import styles from "../Styles/Shop.module.css"
import { useDispatch, useSelector } from "react-redux";
import { checkInCartFunction } from "../Redux/CartState/action";

const Shop = () => {
  const dispatch=useDispatch()
  const [loading, setLoading]=useState(true)
  const [products, setProducts] = useState([]);
  const {alert,alertMessage,AlertFunction}=useContext(AlertContext)
  const {cartLoading,cartAdded,cartError}=useSelector((state)=>state.addToCartState)

  useEffect(() => {
    axios(`${"https://fakestoreapi.com/products"}`)
      .then((res) => {
        setProducts(res.data);
        if(res.data=''||[]||undefined){
          AlertFunction('Error in API')
        }
      })
      .catch(() => {
        console.log("Error in getting cart products");
      });
  }, []);

  useEffect(()=>{
    if(products.length>0){setLoading(false)}
  },[products])


  const handleCartBtnClick=({productId,product})=>{
    dispatch(checkInCartFunction({productId,product}))
    if(cartAdded)AlertFunction('Added to cart')
    if(cartError)AlertFunction('Error in adding to cart')
  }

  if(loading){
    return <div className={styles.productsDiv}><h3>Loading</h3></div>
  }
  return <div className={styles.productsDiv}>
          {products
            ? products.map((prod) => {
                return (
                  <div
                    className={styles.oneProductDivAndCartBtnDiv}
                    key={prod.id}
                  >
                    <div
                      className={styles.oneProductDiv}
                
                    >
                      <h3>{prod.category}</h3>
                      <img src={prod.image} />
                      <h4>{prod.title}</h4>
                      <p>
                        M.R.P: <span> &#8377;{prod.price}</span>
                      </p>
                      <h4>Offer Price: &#8377; {prod.price}</h4>
                    </div>
                    <div className={styles.buyNowAndCartBtnDiv}>
                      <button
                        id={styles.cartBtn}
                        onClick={()=>{handleCartBtnClick({productId:prod.id,product:prod})}}
                      >
                        <GiShoppingCart size={30} color="white" />
                      </button>
                      <button
                        id={styles.buyNowBtn}
                        onClick={() => console.log("CartBtn clicked")}
                      >
                        Buy now
                      </button>
                    </div>
                    {alert?<Toster message={alertMessage}/>:null}
                  </div>
                );
              })
            : null}

  </div>;
};

export default Shop;
