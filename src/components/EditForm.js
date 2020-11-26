import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from 'src/hooks/useInputState';

function EditForm({ id, task, editTodo, toggle }) {
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggle();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ width: '100%' }}>
      <TextField margin="normal" value={value} onChange={handleChange} fullWidth />
    </form>
  );
}

export default EditForm;
