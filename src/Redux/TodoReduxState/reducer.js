import { GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";

const todoReducer=(state={loading:false,todos:[],error:false},{type,payload})=>{
    switch (type) {
        case GET_TODO_LOADING:
            return {...state,loading:true}
        case GET_TODO_SUCCESS:
            return {...state, loading :false,todos:payload,error:false}   
        case GET_TODO_ERROR:
            return {...state,loading:false,todos:[], error:true}
        default:
            return state
    }
}

export {todoReducer}