import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    // e.preventDefault();
    if (value) {
      setTodo((prevState) => {
        return { ...prevState, title: value, id: Date.now(), completed: false };
      });
      // dispatch(addTodo(todo));
      setValue("");
      return;
    }
    console.log("nothing");
  };
  useEffect(() => {
    if (todo.title) {
      dispatch(addTodo(todo));
    }
    // console.log(todo);
  }, [todo, dispatch]);

  // console.log(todos);
  return (
    <div className="addTodo__con">
      <input
        type="text"
        placeholder="Add to do..."
        onChange={handleChange}
        value={value}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
