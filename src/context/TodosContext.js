import React, { createContext } from 'react';
import useTodoState from 'src/hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'taks 1', completed: false },
  { id: 2, task: 'task 2', completed: true },
];
export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const todoFns = useTodoState(defaultTodos);
  return <TodosContext.Provider value={todoFns}>{children}</TodosContext.Provider>;
}
