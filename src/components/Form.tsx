import * as React from "react";
import { useState, ChangeEvent, FormEvent } from 'react';
import { createUseStyles } from "react-jss";

import { addTodo, clearError } from "../store/actions/TodoActions";
import { useTodoDispatch, useTodoState } from "../store/context/TodoContext";

const useStyles = createUseStyles((theme: any) => ({
  form: {
    composes: 'flexColumn center justifyCenter',
    width: 300,
  },
  input: {
    border: ({ error }) => error? '1px solid #a94442' : '1px solid grey',
    composes: 'stretchSelf',
    borderRadius: 3,
    padding: theme.spacing(3),
    '&:focus': {
      outline: 'none',
    }
  },
  error: {
    composes: 'flexColumn  stretchSelf',
    borderColor: '#ebcccc',
    color: '#a94442',
    padding: theme.spacing(0.5),
    fontSize: 14,
  },
  button: {
    composes: 'stretchSelf',
    border: '1px solid grey',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

const Form = () => {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');

  const dispatch = useTodoDispatch();
  const { todos, error: dataError } = useTodoState();
  const classes = useStyles({ error: error || dataError });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (error || dataError) {
      setError('');
      dispatch(clearError());
    }
    setText(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>): void | boolean => {
    e.preventDefault();
    if (text.length > 0 && text.length <= 5) {
      setError('Le text devrait avoir au moins 5 caractères');
      return false;
    } 

    if (text) {
      const id: number = todos?.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      dispatch(
        addTodo({
          id,
          text,
          checked: false,
          selected: false,
        })
      );
      setText('');
      setError('');
      return false;
    } 
    setError('Veuillez entrer un text');
  };

  return (
      <form className={classes.form} onSubmit={onSubmit}>
          <input 
            value={text} 
            onChange={handleChange} 
            className={classes.input}
            placeholder="Enter a todo"
          />
          {(error || dataError) && (
            <div className={classes.error}>
              <span>{error || dataError}</span>
            </div>
          )}
          <button type="submit" className={classes.button}>Save</button>
      </form>
  );
}

export default Form;