import { Todo } from "../src/store/reducers/TodoReducer";

export const findTodoById = (todos: Todo[], id: number | undefined): Todo | undefined=>
  todos.find((todo: Todo): boolean => todo.id === id);
