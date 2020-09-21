import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, id) => (
            <React.Fragment key={id}>
              <Todo
                key={id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
              />
              {id < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
