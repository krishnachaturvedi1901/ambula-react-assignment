import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { useEffect } from "react";
import { getTodos } from "../../Redux/TodoReduxState/actions";
const TodoList = () => {
const dispatch=useDispatch()
 const {loading , todos, error}=useSelector((state)=>state.todoState)


 useEffect(()=>{
    dispatch(getTodos())
 },[])

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
      {todos.reverse().map((elem) => {
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
