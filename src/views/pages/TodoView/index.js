import TodoList from 'src/components/TodoList';
import Page from 'src/components/Page';
import TodoForm from 'src/components/TodoForm';
import { Grid } from '@material-ui/core';
import useTodoState from 'src/hooks/useTodoState';
import { TodosProvider } from 'src/context/TodosContext';

function TodoApp() {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState();

  return (
    <Page>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Page>
  );
}

export default TodoApp;
