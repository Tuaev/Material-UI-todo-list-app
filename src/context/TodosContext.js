import { createContext, useReducer } from 'react';
import todoReducer from 'src/reducers/todoReducer';

const defaultTodos = [
  { id: 1, task: 'taks 1', completed: false },
  { id: 2, task: 'task 2', completed: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
