import React from "react";

const InputComponent = ({
  type,
  state,
  setState,
  placeholder,
  required
}) => {

  return (
    <input
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="p-2 text-sm"
    />
  );
};

export default InputComponent;
