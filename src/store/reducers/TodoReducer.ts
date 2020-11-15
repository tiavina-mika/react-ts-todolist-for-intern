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
  const selectedTodos: Todo[] = state.todos.filter((todoState: Todo): boolean => todoState !== todo);

  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      /** if the todo text exist already, set an error  */
      if (state.todos.find((todo: Todo): boolean  => todo.text === payload?.text)) {
        return {
          ...state,
          error: 'To déjà existant. Veuillez entrer un autre todo',
        }
      }
      return {
        ...state, 
        todos: [...state.todos, payload],
        error: '',
      };
    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo): boolean => todo.id !== payload?.id)
      };
    case TodoActionTypes.CHECK_TODO:
        return {
          ...state, 
          todos: [...selectedTodos, {...todo, checked: !todo?.checked}]
        };
    case TodoActionTypes.SELECT_TODO:
        return {
          ...state, 
          todos: [...selectedTodos, {...todo, selected: !todo?.selected}]
        };
    case TodoActionTypes.REMOVE_TODOS:
        const removedTodos = state.todos.filter((todo: Todo) => todo.selected !== true);
        return {
          ...state, 
          todos: [...removedTodos]
        };
      case TodoActionTypes.CHECK_TODOS:
        const isAllChecked = state.todos.every((todo: Todo) => todo.checked === true);
        return {
          ...state, 
          todos: [
            ...state.todos.map((todo: Todo) => (
              {
                ...todo, 
                checked: isAllChecked ? false: true
              }
            ))
          ]
        };
      case TodoActionTypes.SELECT_ALL_TODOS:
          const isAllSelected = state.todos.every((todo: Todo) => todo.selected === true);
          return {
            ...state, 
            todos: [
              ...state.todos.map((todo: Todo) => (
                {
                  ...todo, 
                  selected: isAllSelected ? false: true
                }
              ))
            ]
          };
      case TodoActionTypes.CLEAR_ERROR:
          return {
            ...state, 
            error: '',
          };
                                   
    default:
      return state;
  }
};
