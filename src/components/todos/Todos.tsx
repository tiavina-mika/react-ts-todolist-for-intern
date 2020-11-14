import * as React from "react";
import { ReactNode } from 'react';
import { createUseStyles } from "react-jss";

import { useTodoDispatch, useTodoState } from "../../store/context/TodoContext";
import { checkTodo, removeTodo, removeTodos, selectTodo } from "../../store/actions/TodoActions";
import { Todo as TodoI } from "../../store/reducers/TodoReducer";
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
  const dispatch = useTodoDispatch();
  
  if (items.length === 0) {
    return (
      <div className={classes.items}>
        <span className={classes.text}>No Todo Yet </span>
      </div>
    )
  }

  const handleDelete = (todo: TodoI): void => dispatch(removeTodo(todo));
  const handleCheck = (todo: TodoI): void => dispatch(checkTodo(todo));
  const handleSelected = (todo: TodoI): void => dispatch(selectTodo(todo));
  const handleDeleteSelected = (): void => dispatch(removeTodos());

  return (
    <div className={classes.items}>
      <Column 
        onSelect={() => {}}
        onCheck={() => {}}
        onDelete={() => handleDeleteSelected()}
        checked={false}
      />
  
      {items.map((item: TodoI, index: number): ReactNode => 
        <Column
          key={item.id + index}
          onSelect={() => handleSelected(item)}
          onCheck={() => handleCheck(item)}
          onDelete={() => handleDelete(item)}
          content={item.text}
          checked={item.checked}
        />
      )}
    </div>
  );
}

export default Todos;