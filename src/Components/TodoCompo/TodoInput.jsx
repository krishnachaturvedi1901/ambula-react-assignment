import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../../Redux/TodoReduxState/actions";

const TodoInput = () => {
const dispatch=useDispatch()
  const [text, setText] = React.useState("");
  const [erase, setErase] = React.useState(false);
  
  if (erase) {
    document.getElementById("inputId").value = "";
    setErase(false);
    if (document.getElementById("inputId").value === "") {
      setText("");
    }
  }
  
  const handleAdd=()=>{
    dispatch(addTodos({todo:text,status:false}))
  }
  return (
    <div className="inputDiv">
      <input
        id="inputId"
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        id="addBtn"
        onClick={() => {
          setErase(true);
          return handleAdd();
        }}
      >
        <ControlPointIcon />
      </button>
    </div>
  );
};
export { TodoInput };
