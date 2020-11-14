import * as React from "react";

import Column from './Column';
import { useTodoDispatch } from "../../store/context/TodoContext";
import { checkTodo, removeTodo, selectTodo } from "../../store/actions/TodoActions";
import { Todo as TodoI } from "../../store/reducers/TodoReducer";

type Props = { todo: TodoI}
const Todo = ({ todo: item }: Props) => {
  const dispatch = useTodoDispatch();
  
  const handleDelete = (todo: TodoI): void => dispatch(removeTodo(todo));
  const handleCheck = (todo: TodoI): void => dispatch(checkTodo(todo));
  const handleSelected = (todo: TodoI): void => dispatch(selectTodo(todo));

  return (
    <Column 
      onSelect={() => handleSelected(item)}
      onCheck={() => handleCheck(item)}
      onDelete={() => handleDelete(item)}
      content={item.text}
      checked={item.checked}
    />
  );
}

export default Todo;