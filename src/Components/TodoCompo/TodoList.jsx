import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { useEffect, useState } from "react";
import { getTodos } from "../../Redux/TodoReduxState/actions";
const TodoList = () => {
const dispatch=useDispatch()
const [todosArr,setTodosArr]=useState([])
 const {loading , todos, error}=useSelector((state)=>state.todoState)


 useEffect(()=>{
    dispatch(getTodos())
 },[])

 useEffect(()=>{
  setTodosArr(todos)
 },[todos])

 if(loading){
    return (
        <div className="allTodoDiv"><h3>Loading...</h3></div>
    )
 }
 else if(error){
    return(
        <div className="allTodoDiv"><h3>Error</h3></div>
    )
 }
  return (
    <div className="allTodoDiv">
      {todosArr.reverse().map((elem) => {
        return (
          <TodoItem
            key={elem.id}
            {...elem}
          />
        );
      })}
    </div>
  );
};
export { TodoList };
