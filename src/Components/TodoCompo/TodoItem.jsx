import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { useDispatch } from "react-redux";
import { deleteTodos, updateTodos } from "../../Redux/TodoReduxState/actions";

const TodoItem = (props) => {
 const dispatch=useDispatch()
  const { todo, id, status } = props;

  let styling = {
    taskStyle: {
      backgroundColor: status ? "lightgreen" : "pink",
      opacity: ".8",
      overflow: "hidden"
    }
  };
  const handleUpdate=()=>{
    dispatch(updateTodos({id,status:!status}))
  }
  const handleDelete=()=>{
    dispatch(deleteTodos(id))
  }
  return (
    <div className="todoItemDiv">
      <h4 style={styling.taskStyle}>{todo}</h4>
      <button id="statusBtn" onClick={() => handleUpdate()}>
        {status ? <TaskAltIcon /> : <HourglassTopIcon />}
      </button>
      <button id="deleteBtn" onClick={() => handleDelete()}>
        <DeleteSweepIcon />
      </button>
    </div>
  );
};
export { TodoItem };
