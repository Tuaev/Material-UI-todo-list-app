import React from 'react';
import {
  List,
  Paper,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo }) {
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
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
