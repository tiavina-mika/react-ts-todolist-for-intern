import * as React from "react";
import { createUseStyles } from "react-jss";

import { TodoProvider } from '../store/context/TodoContext';
import Todos from './todos/Todos';
import Form from './Form';
import "../styles.css";

const useStyles = createUseStyles((theme: any) => ({
  root: {
    composes: 'flexColumn center justifyCenter',
    height: '100vh',
    fontFamily: 'Roboto, sans-serif',
  },
  content: {
    composes: 'flexColumn center justifyCenter stretchSelf',
    flex: 1,
  },
  body: {},
  titleContainer: {
    fontStyle: 'italic',
    fontWeight: 'normal'
  },
  footer: {
    composes: 'flexColumn center justifyCenter stretchSelf',
    height: 80,
    fontSize: 18,
    letterSpacing: 1.05,
  },
  link: {
    color: theme.colors.active,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
}))

const App = () => {
  const classes = useStyles();

  return (
    <TodoProvider>
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.titleContainer}>
            <h1>My Todo list</h1>
          </div>
          <div className={classes.body}>
            <Form />
            <Todos />
          </div>
        </div>
        <div className={classes.footer}>
          <span>By <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/"  className={classes.link}>Tiavina Michael R.</a></span>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;