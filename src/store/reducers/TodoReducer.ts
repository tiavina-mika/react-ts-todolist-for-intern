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
  const { payload }: Pick<TodoAction, 'payload'> = action;
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state, 
        todos: [...state.todos, {...payload}]
      };
    case TodoActionTypes.REMOVE_TODO:
      return state.todos.filter((todo: Todo): boolean => todo.id !== payload?.id);
    case TodoActionTypes.CHECK_TODO:
        const todo: Todo | undefined = state.todos.find((todo: Todo): boolean => todo.id === payload?.id);
        const newTodos: Todo[] = state.todos.filter((todoState: Todo): boolean => todoState !== todo);
        return {
          ...state, 
          todos: [...newTodos, {...todo, checked: !todo?.checked}]
        };
    default:
      return state;
  }
};
