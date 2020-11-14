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

export interface Todo {
  text: string;
  checked: boolean;
}
const App = () => {
  const classes = useStyles();
  const [items, setItems] = useState<Todo[]>([]);

  const handleSubmit = (value: Todo): void => {
    setItems([...items, value]);
  };

  const handleItems = (items: Todo[]): void => setItems([...items]);

  return (
    <TodoProvider>
      <div className={classes.root}>
        <div className={classes.container}>
          <Form handleSubmit={handleSubmit} />
          <Todos handleItems={handleItems} />
          {/* <Todos items={items} handleItems={handleItems} /> */}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;