import React from 'react';
import { List, Paper, Divider, Typography } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length <= 0) {
    return (
      <Paper>
        <Typography
          align="center"
          variant="overline"
          component="h2"
          style={{ fontSize: '1rem' }}
        >
          No Todos
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={todo.id}>
            <Todo
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
