import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

export default function useTodoState(initialTodos) {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },
    removeTodo: (id) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    toggleTodo: (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    updateTodo: (id, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
}
