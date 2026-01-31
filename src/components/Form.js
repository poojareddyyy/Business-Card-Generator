import React from "react";
import FormElement from "./FormElement";

const Form = ({ onChange, Values }) => {
  return (
    <section className="Form">
      <h2>Enter your Details</h2>
      <form>
        {Object.keys(Values).map((field, key) => (
          <FormElement
            key={key}
            ID={field}
            Label={field}
            Value={Values[field]}
            onChange={onChange}
          />
        ))}
      </form>
    </section>
  );
};

export default Form;
