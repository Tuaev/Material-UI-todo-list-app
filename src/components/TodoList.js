import React from 'react';
import { List, Paper, Divider, ListItem, ListItemText } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
