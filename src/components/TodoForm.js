import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from 'src/hooks/useInputState';

function TodoForm({ addTodo }) {
  const [state, handleChange, reset] = useInputState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(state);
    reset();
  };
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={state}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
