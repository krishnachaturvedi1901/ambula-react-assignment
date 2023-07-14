import { legacy_createStore , combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./TodoReduxState/reducer";

const rootReducer=combineReducers({
    todoState:todoReducer
})
const middlewares=applyMiddleware(thunk)

export const store = legacy_createStore(rootReducer,middlewares)

store.subscribe(()=>{
  console.log("Updated State-",store.getState())    
})