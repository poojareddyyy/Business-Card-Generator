import React from "react";

const FormElement = ({ ID, Label, Value, onChange }) => {
  return (
    <label>
      <strong>{Label}</strong>
      <input
        type="text"
        name={ID}
        value={Value}
        onChange={onChange}
      />
    </label>
  );
};

export default FormElement;
