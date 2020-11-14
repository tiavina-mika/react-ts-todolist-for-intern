import { Todo } from '../reducers/Todo'

// Type of Actions allowed
export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO"
}

export interface TodoAction {
  type: TodoActionTypes;
  payload?: Todo;
};

// Action Generator for ADD
export const addTodo = (todo: Todo) => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: todo
  };
};

// Action Generator for Remove
export const removeTodo = (todo: Todo) => {
  return {
    type: TodoActionTypes.REMOVE_TODO,
    payload: todo
  };
};