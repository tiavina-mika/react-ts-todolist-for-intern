import * as React from "react";
import { ReactNode } from 'react';
import { createUseStyles, useTheme } from "react-jss";
import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';

// import { Todo } from '../App';
import IconButton from './IconButton';
import { useTodoDispatch, useTodoState } from "../../store/context/TodoContext";
import { checkTodo, removeTodo } from "../../store/actions/TodoActions";
import { Todo } from "../../store/reducers/TodoReducer";

const useStyles = createUseStyles((theme: any) => ({
  items: {
    composes: 'flexColumn center spaceBetween flex1 stretchSelf',
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  item: {
    composes: 'flexRow center spaceBetween flex1 stretchSelf',
  },
  checkbox: {
    marginRight: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
    }
  },
  text: {
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
  },
  actions: {
    composes: 'flexRow center',
  },
}))

const Todos = () => {
  const { todos: items } = useTodoState();
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useTodoDispatch();
  
  const handleDelete = (todo: Todo): void => {
    dispatch(removeTodo(todo));
  }

  const handleCheck = (todo: Todo): void => {
    // const newItems: Todo[] = [...items];
    // newItems.map((item: Todo, i: number): void | boolean => {
    //   if (i !== index) return false;
    //   item.checked = !item.checked;
    //   return false;
    // })
    // handleItems([...newItems]);
    dispatch(checkTodo(todo))
  }

  return (
    <div className={classes.items}>
      { items?.length > 0
        ? [items.map((item: Todo, index: number): ReactNode => (
      // ----------------- List -----------------------------// 
        <div className={classes.item} key={item.id + index}>
          <div>
            <input type="checkbox" className={classes.checkbox}/>
            <span className={classes.text}>
              {item.text}
            </span>
          </div>
          {/* ----------------- Button Actions ----------------------------- */}
          <div className={classes.actions}>
            <IconButton
              icon={item.checked ? FaCheck : FaTimes}
              color={item.checked ? (theme as any)?.colors.active : 'initial'}
              onClick={() => handleCheck(item)}
            
            />
            <IconButton
              icon={FaTrashAlt}
              size={18}
              onClick={() => handleDelete(item)}
            />
          </div>
        </div>
      ))]
      // ----------------- No Data -----------------------------// 
      : <span className={classes.text}>No Todo Yet </span>
    }
    </div>
  );
}

export default Todos;