import { useState } from "react";

function useInputState(initialVal) {
  const [value, setValue] = useState(initialVal);
  const handleValueChange = (e) => setValue(e.target.value);
  const resetValue = () => setValue("");

  return [value, handleValueChange, resetValue];
}

export default useInputState;
