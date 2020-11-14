import * as React from "react";
import { ReactNode } from 'react';
import { createUseStyles } from "react-jss";

import { useTodoDispatch, useTodoState } from "../../store/context/TodoContext";
import { checkTodo, removeTodo, removeTodos, selectTodo, checkTodos, selectAllTodos } from "../../store/actions/TodoActions";
import { Todo as TodoI } from "../../store/reducers/TodoReducer";
import Column from "./Column";
import Text from "../shared/Text";

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
  console.log(items);
  const classes = useStyles();
  const dispatch = useTodoDispatch();
  
  if (items.length === 0) {
    return (
      <div className={classes.items}>
        <Text text="No Todo Yet" /> 
      </div>
    )
  }

  const handleDelete = (todo: TodoI): void => dispatch(removeTodo(todo));
  const handleCheck = (todo: TodoI): void => dispatch(checkTodo(todo));
  const handleSelected = (todo: TodoI): void => dispatch(selectTodo(todo));
  const handleDeleteSelected = (): void => dispatch(removeTodos());
  const handleCheckSelected = (): void => dispatch(checkTodos());

  const handleSelectAll = (): void => dispatch(selectAllTodos());

  return (
    <div className={classes.items}>
      <Column 
        onSelect={() => handleSelectAll()}
        onCheck={() => handleCheckSelected()}
        onDelete={() => handleDeleteSelected()}
      />
  
      {items.map((item: TodoI, index: number): ReactNode => 
        <Column
          key={item.id + index}
          onSelect={() => handleSelected(item)}
          onCheck={() => handleCheck(item)}
          onDelete={() => handleDelete(item)}
          content={item.text}
          checked={item.checked}
          selected={item.selected}
        />
      )}
    </div>
  );
}

export default Todos;