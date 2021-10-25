import { ADDTODO, REMOVE__TODO, TODO__ISCOMPLETE } from "../actionTypes";
export const todoReducer = (state = { todos: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDTODO:
      return { ...state, todos: [...state.todos, payload] };
    case REMOVE__TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
      };
    case TODO__ISCOMPLETE:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === payload) {
              todo.completed = !todo.completed;
            }
            return todo;
          }),
        ],
      };
    default:
      return { ...state };
  }
};
