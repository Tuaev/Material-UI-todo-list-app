import React, { useEffect, useState } from 'react';
import TodoList from 'src/components/TodoList';
import Page from 'src/components/Page';
import TodoForm from 'src/components/TodoForm';
import { Grid } from '@material-ui/core';
import { nanoid } from 'nanoid';

function TodoApp() {
  // const initialTodos = [
  //   { id: 1, task: 'Wash Car', completed: true },
  //   { id: 2, task: 'Eat', completed: false },
  //   { id: 3, task: 'Sleep', completed: false },
  // ];
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: nanoid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

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
