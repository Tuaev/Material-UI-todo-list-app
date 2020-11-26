import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import useInputState from 'src/hooks/useInputState';

function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [action, key]);
}

function EditForm({ id, task, editTodo, toggle }) {
  const [value, handleChange, reset] = useInputState(task);

  useKeypress('Escape', () => {
    toggle();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggle();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ width: '100%', marginLeft: '1rem' }}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditForm;
