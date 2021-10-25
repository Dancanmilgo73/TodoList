import { ADDTODO, REMOVE__TODO, TODO__ISCOMPLETE } from "../actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADDTODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: REMOVE__TODO,
    payload: id,
  };
};
export const isComplete = (id) => {
  return {
    type: TODO__ISCOMPLETE,
    payload: id,
  };
};
