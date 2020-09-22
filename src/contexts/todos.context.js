import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer.js";

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const defaultTodos = [];
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
