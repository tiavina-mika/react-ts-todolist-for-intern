import { TodoAction, TodoActionTypes, } from "../actions/TodoActions";

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}
export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null,
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null
};

export const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state.todos, action.payload];
    case TodoActionTypes.REMOVE_TODO:
      return state.todos.filter((todo: Todo) => todo.id !== action.payload.id)
    default:
      return state;
  }
};
