import "./App.css";
import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";
function App() {
  const { todos } = useSelector((state) => state.todos);
  return (
    <div className="app">
      <h3>My To Do List</h3>
      <AddTodo />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          completed={todo.completed}
        />
      ))}

      <Footer completeItems={todos.filter((todo) => todo.completed === true)} />
    </div>
  );
}

export default App;
