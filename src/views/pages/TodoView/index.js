import React, { useEffect, useState } from 'react';
import TodoList from 'src/components/TodoList';
import Page from 'src/components/Page';
import TodoForm from 'src/components/TodoForm';
import { Grid } from '@material-ui/core';
import useTodoState from 'src/hooks/useTodoState';

function TodoApp() {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState();

  return (
    <Page>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Page>
  );
}

export default TodoApp;
