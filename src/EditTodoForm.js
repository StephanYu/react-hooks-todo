import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, updateTodo, toggleEditForm }) {
  const [value, handleValueChange, resetValue] = useInputState(task);
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
