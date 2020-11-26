import React, { useState } from 'react';
import TodoList from 'src/components/TodoList';
import Page from 'src/components/Page';
import TodoForm from 'src/components/TodoForm';
import { Grid } from '@material-ui/core';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Wash Car', completed: true },
    { id: 2, task: 'Eat', completed: false },
    { id: 3, task: 'Sleep', completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };

  return (
    <Page>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Page>
  );
}

export default TodoApp;
