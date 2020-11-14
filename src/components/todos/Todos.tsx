import * as React from "react";
import { ReactNode } from 'react';
import { createUseStyles, useTheme } from "react-jss";
import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';

// import { Todo } from '../App';
import IconButton from './IconButton';
import { useTodoDispatch, useTodoState } from "../../store/context/TodoContext";
import { checkTodo, removeTodo, selectTodo } from "../../store/actions/TodoActions";
import { Todo as TodoI } from "../../store/reducers/TodoReducer";
import Todo from "./Todo";
import Column from "./Column";

const useStyles = createUseStyles((theme: any) => ({
  items: {
    composes: 'flexColumn center spaceBetween flex1 stretchSelf',
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

const Todos = () => {
  const { todos: items } = useTodoState();
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useTodoDispatch();
  
  if (items.length === 0) {
    return (
      <div className={classes.items}>
        <span className={classes.text}>No Todo Yet </span>
      </div>
    )
  }
  return (
    <div className={classes.items}>
      <Column 
        onSelect={() => {}}
        onCheck={() => {}}
        onDelete={() => {}}
        checked={false}
      />
  
      {items.map((item: TodoI, index: number): ReactNode => 
        <Todo todo={item} key={item.id + index} />
      )}
    </div>
  );
}

export default Todos;