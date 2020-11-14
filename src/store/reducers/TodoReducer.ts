import { TodoAction, TodoActionTypes, } from "../actions/TodoActions";
import { findTodoById } from '../../../utils/utils';

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
  selected: boolean;
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
  const { payload }: Pick<TodoAction, 'payload'> = action;
  const todo: Todo | undefined = findTodoById(state.todos, payload?.id);
  const newTodos: Todo[] = state.todos.filter((todoState: Todo): boolean => todoState !== todo);

  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state, 
        todos: [...state.todos, {...payload}]
      };
    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo): boolean => todo.id !== payload?.id)
      };
    case TodoActionTypes.CHECK_TODO:
        return {
          ...state, 
          todos: [...newTodos, {...todo, checked: !todo?.checked}]
        };
    case TodoActionTypes.SELECT_TODO:
        return {
          ...state, 
          todos: [...newTodos, {...todo, selected: !todo?.selected}]
        };
        
    default:
      return state;
  }
};
