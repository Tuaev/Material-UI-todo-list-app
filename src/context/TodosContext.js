import { createContext, useReducer } from 'react';
import todoReducer from 'src/reducers/todoReducer';
import useTodoState from 'src/hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'taks 1', completed: false },
  { id: 2, task: 'task 2', completed: true },
];
export const TodosContext = createContext();

export function TodosProvider({ children }) {
  // const todoFns = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>
  );
}
