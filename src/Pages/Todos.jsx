import React from "react";
import { TodoList } from "../Components/TodoCompo/TodoList";
import { TodoInput } from "../Components/TodoCompo/TodoInput";
import "../Styles/Todo.css";
import { useSelector } from "react-redux";

const Todos = () => {
  const { loading, todos, error } = useSelector((state) => state.todoState);
  
  const countCompletedTasks = () => {
    let count = 0;
    todos.filter((todo) => {
      if (todo.status == true) {
        count++;
      }
    });
    return count;
  };
  return (
    <div className="todoParentDiv">
      <div className="countCalculationDiv" >
        <div >
          Total tasks:<strong>{todos.length}</strong>
        </div>
        <div>
          Completed tasks:<strong>{countCompletedTasks()}</strong>
        </div>
      </div>
      <TodoList />
      <TodoInput />
    </div>
  );
};

export default Todos;
