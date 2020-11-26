import React, { useContext } from 'react';
import { List, Paper, Divider, Typography } from '@material-ui/core';
import { TodosContext } from 'src/context/TodosContext';
import Todo from './Todo';

function TodoList() {
  const { todos } = useContext(TodosContext);

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
            <Todo {...todo} />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
