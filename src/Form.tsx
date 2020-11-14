import * as React from "react";
import { useState, ChangeEvent, FormEvent } from 'react';
import { createUseStyles } from "react-jss";

import { Todo } from './App';


const useStyles = createUseStyles((theme: any) => ({
  form: {
    composes: 'flexColumn center justifyCenter',
    width: 300,
  },
  input: {
    border: '1px solid grey',
    composes: 'stretchSelf',
    borderRadius: 3,
    padding: theme.spacing(3),
    '&:focus': {
      outline: 'none',
    }
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

type Props = { handleSubmit: (value: Todo) => void };
const Form = ({ handleSubmit }: Props) => {
  const classes = useStyles();
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (text) handleSubmit({ text, checked: false })
    setText('');
  };

  return (
      <form className={classes.form} onSubmit={onSubmit}>
          <input 
            value={text} 
            onChange={handleChange} 
            className={classes.input}
            placeholder="Enter a text"
          />
          <button type="submit" className={classes.button}>Save</button>
      </form>
  );
}

export default Form;