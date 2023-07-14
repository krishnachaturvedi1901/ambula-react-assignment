import { GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";
import axios from "axios"
const todoApiUrl=process.env.REACT_APP_TODO_API_URL

const getTodoLoading=()=>({
    type:GET_TODO_LOADING,
    payload:[]
})
const getTodoSuccess=(data)=>({
    type:GET_TODO_SUCCESS,
    payload:data
})
const getTodoError=()=>({
    type:GET_TODO_ERROR,
    payload:[]
})

export const getTodos=()=>(dispatch)=>{
    dispatch(getTodoLoading())
    axios(`${todoApiUrl}`)
    .then((result) => {
        dispatch(getTodoSuccess(result.data))
    }).catch((err) => {
        dispatch(getTodoError())
        console.log("Error after get todos",err)
    });
}

export const addTodos=(data)=>(dispatch)=>{
    console.log("in add func",data)
  axios.post(`${todoApiUrl}`,data)
  .then((res)=>{
    console.log("res after add",res)
    dispatch(getTodos())
  })
  .catch((err)=>{
    console.log("Error in adding todo",err)
  })
}

export const updateTodos=({id,status})=>(dispatch)=>{
  axios.patch(`${todoApiUrl}/${id}`,{status:status})
  .then((res)=>{
    dispatch(getTodos())
  })
  .catch((err)=>{
    console.log("Error in update todo",err)
  })

}
export const deleteTodos=(id)=>(dispatch)=>{
    axios.delete(`${todoApiUrl}/${id}`)
    .then((res)=>{
      dispatch(getTodos())
    })
    .catch((err)=>{
      console.log("Error in delete todo",err)
    })
  
  }