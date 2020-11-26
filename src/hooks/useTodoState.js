import { nanoid } from 'nanoid';
import useLocalStorageState from 'src/hooks/useLocalStorageState';

function useTodoState(initialValue = '') {
  const [todos, setTodos] = useLocalStorageState('todos', initialValue);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: nanoid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return { todos, addTodo, removeTodo, toggleTodo, editTodo };
}

export default useTodoState;
