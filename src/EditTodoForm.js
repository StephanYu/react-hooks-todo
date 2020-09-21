import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleValueChange, resetValue] = useInputState(task);
  const { updateTodo } = useContext(TodosContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, value);
        resetValue();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "80%" }}
    >
      <TextField
        value={value}
        onChange={handleValueChange}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
