import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleValueChange, resetValue] = useInputState(task);
  const dispatch = useContext(DispatchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
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
