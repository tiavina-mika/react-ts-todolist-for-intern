import * as React from "react";
import { useState, ChangeEvent, FormEvent } from 'react';
import { createUseStyles, useTheme } from "react-jss";
import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';
import "./styles.css";

const useStyles = createUseStyles((theme: any) => ({
  root: {
    composes: 'flexColumn center justifyCenter',
    // backgroundColor: 'red',
    height: '100vh'
  },
  container: {

  },
  form: {
    // backgroundColor: theme.colors.primary,
    composes: 'flexColumn center justifyCenter',
    // height: 300,
    width: 300
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
    }
  },
  items: {
    composes: 'flexColumn center spaceBetween flex1 stretchSelf',
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  item: {
    composes: 'flexRow center spaceBetween flex1 stretchSelf',
  },
  text: {
    fontFamily: 'Roboto, sans-serif'
  },
  actions: {
    composes: 'flexRow center',
  },
  actionButton: {
    composes: 'flexRow center',
    backgroundColor: 'transparent',
    border: 'none',
    '&:focus': {
      outline: 'none',
    }
  }
}))
/*
  ['tsxfd', 'exxt'],
  [{ text: 'fsxfs', check: false}]
*/

interface Item {
  text: string;
  checked: boolean;
}
const App = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [text, setText] = useState<string>('');
  const [items, setItems] = useState<Item[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) setItems([...items, { text, checked: false }]);
    setText('');
  };
  
  const handleDelete = (index: number): void => {
    const newItems = items.filter((_, i) => i !== index);
    setItems([...newItems]);
  }

  const handleCheck = (index: number): void => {
    const newItems = [...items];
    newItems.map((item, i) => {
      if (i === index) item.checked = !item.checked;
    })
    setItems([...newItems]);
  }

  return (
      <div className={classes.root}>
        <div className={classes.container}>
          <form className={classes.form} onSubmit={handleSubmit}>
              <input 
                value={text} 
                onChange={handleChange} 
                className={classes.input}
                placeholder="Enter a text"
              />
              <button type="submit" className={classes.button}>Save</button>
          </form>
          <div className={classes.items}>
            { items.length > 0
              ? [items.map((item, index) => (
              <div className={classes.item} key={item.text}>
                <span className={classes.text}>
                  {item.text}
                </span>
              <div className={classes.actions}>
                <button 
                  className={classes.actionButton} 
                  type="button"
                  onClick={() => handleCheck(index)}
                >
                  {item.checked 
                    ? <FaCheck size={22} color={(theme as any)?.colors.active} /> 
                    : <FaTimes size={22} />
                  }
                </button>
                <button 
                  className={classes.actionButton} 
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  <FaTrashAlt size={18} />
                </button>
              </div>
              </div>
            ))]
            : <span className={classes.text}>No Todo Yet </span>
          }
          </div>
        </div>
      </div>
  );
}

export default App;