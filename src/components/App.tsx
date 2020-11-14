import * as React from "react";
import { useState } from 'react';
import { createUseStyles } from "react-jss";

import { TodoProvider } from '../store/context/TodoContext';
import Todos from './todos/Todos';
import Form from './Form';
import "../styles.css";

const useStyles = createUseStyles((theme: any) => ({
  root: {
    composes: 'flexColumn center justifyCenter',
    height: '100vh'
  },
  container: {},
}))


const App = () => {
  const classes = useStyles();

  return (
    <TodoProvider>
      <div className={classes.root}>
        <div className={classes.container}>
          <Form />
          <Todos />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;