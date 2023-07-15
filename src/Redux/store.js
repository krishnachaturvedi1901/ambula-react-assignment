import { legacy_createStore , combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./TodoReduxState/reducer";
import { AddToCartReducer, GetAllCartProductReducer } from "./CartState/reducer";

const rootReducer=combineReducers({
    todoState:todoReducer,
    addToCartState:AddToCartReducer,
    getAllCartProductsState:GetAllCartProductReducer
})
const middlewares=applyMiddleware(thunk)

export const store = legacy_createStore(rootReducer,middlewares)

store.subscribe(()=>{
  console.log("Updated State-",store.getState())    
})