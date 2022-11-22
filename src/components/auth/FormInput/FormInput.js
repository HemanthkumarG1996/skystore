import React from "react";

const FormInput = (props) => {
  return (
    <>
      <input
        name={props.name}
        placeholder={props.placeholder}
        className="form-control"
        type={props.type}
      />
    </>
  );
};

export default FormInput;
