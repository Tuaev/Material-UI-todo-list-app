import { createContext } from 'react';
import todoReducer from 'src/reducers/todoReducer';
import useLocalStorageReducer from 'src/hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1, task: 'taks 1', completed: false },
  { id: 2, task: 'task 2', completed: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
