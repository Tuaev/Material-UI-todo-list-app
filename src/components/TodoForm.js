import { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from 'src/hooks/useInputState';
import { TodosContext } from 'src/context/TodosContext';

function TodoForm() {
  const [state, handleChange, reset] = useInputState('');
  const { dispatch } = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', task: state });
    reset();
  };

  console.log('todo form');
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
