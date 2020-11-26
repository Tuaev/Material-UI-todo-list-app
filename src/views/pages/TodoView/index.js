import React, { useState } from 'react';
import TodoList from 'src/components/TodoList';
import Page from 'src/components/Page';
import TodoForm from 'src/components/TodoForm';
import { Grid } from '@material-ui/core';
import { nanoid } from 'nanoid';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Wash Car', completed: true },
    { id: 2, task: 'Eat', completed: false },
    { id: 3, task: 'Sleep', completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: nanoid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Page>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
      </Grid>
    </Page>
  );
}

export default TodoApp;
