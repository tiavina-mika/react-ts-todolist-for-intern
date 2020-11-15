import { Todo } from '../reducers/TodoReducer'

// Type of Actions allowed
export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  CHECK_TODO = "CHECK_TODO",
  SELECT_TODO = "SELECT_TODO",
  REMOVE_TODOS = "REMOVE_TODOS",
  CHECK_TODOS = "CHECK_TODOS",
  SELECT_ALL_TODOS = "SELECT_ALL_TODOS",
  CLEAR_ERROR = "CLEAR_ERROR",
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

// Action Generator for Check
export const checkTodo = (todo: Todo) => {
  return {
    type: TodoActionTypes.CHECK_TODO,
    payload: todo
  };
};

// Action Generator for selected todos
export const selectTodo = (todos: Todo) => {
  return {
    type: TodoActionTypes.SELECT_TODO,
    payload: todos,
  };
};

// Action Generator for selected todos remove
export const removeTodos = () => {
  return {
    type: TodoActionTypes.REMOVE_TODOS,
  };
};

// Action Generator for checked todos
export const checkTodos = () => {
  return {
    type: TodoActionTypes.CHECK_TODOS,
  };
};

// Action Generator for all selected todos
export const selectAllTodos = () => {
  return {
    type: TodoActionTypes.SELECT_ALL_TODOS,
    // payload: isSelect
  };
};

// Action Generator to clear error
export const clearError = () => {
  return {
    type: TodoActionTypes.CLEAR_ERROR,
  };
};

