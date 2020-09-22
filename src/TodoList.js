import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "./contexts/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, id) => (
            <React.Fragment key={id}>
              <Todo {...todo} key={todo.id} />
              {id < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
