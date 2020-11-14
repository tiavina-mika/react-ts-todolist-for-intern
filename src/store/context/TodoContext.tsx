import * as React from "react";
import { ReactNode } from "react";
import { useReducer, createContext } from "react";

import { todoReducer, initialState, } from "../reducers/TodoReducer";

export const TodoContext = createContext(null);

type Props = { children: ReactNode };
export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
};