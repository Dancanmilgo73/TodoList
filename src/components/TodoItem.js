import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, isComplete } from "../redux/actions/todoActions";

export default function TodoItem({ title, id, completed }) {
  const dispatch = useDispatch();
  // const [complete, setComplete] =useState(false);

  return (
    <div className={`todoItem__con ${completed && "todoComplete"}`}>
      <div>
        <input
          type="checkbox"
          onChange={(e) => e.target.checked && dispatch(isComplete(id))}
        />
        <span>{title}</span>
      </div>
      <div className="todoItem__remove">
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </div>
  );
}
