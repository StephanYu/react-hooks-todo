import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todos = useTodoState([]);
  return (
    <TodosContext.Provider value={todos}>
      {props.children}
    </TodosContext.Provider>
  );
}
