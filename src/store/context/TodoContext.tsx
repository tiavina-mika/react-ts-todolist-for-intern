import React, { useReducer, ReactNode, useContext, createContext, Dispatch } from "react";
import { TodoAction } from "../actions/TodoActions";
import { todoReducer, TodoState, initialState, Todo } from "../reducers/TodoReducer";

export const todosState = createContext<TodoState | undefined>(undefined);

export const todosDispatch = createContext<Dispatch<TodoAction> | undefined>(undefined);

type Props = { children: ReactNode };
export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <todosState.Provider value={state}>
      <todosDispatch.Provider value={dispatch}>
        {children}
      </todosDispatch.Provider>
    </todosState.Provider>
  );
};

export const useTodoState = (): TodoState => {
  const context = useContext(todosState);
  if (undefined === context) {
    throw new Error("Please use within TodosStateProvider");
  }
  return context;
};

export const useTodoDispatch = (): Dispatch<TodoAction> => {
  const context = useContext(todosDispatch);
  if (undefined === context) {
    throw new Error("Please use within TodosDispatchProvider");
  }
  return context;
};
