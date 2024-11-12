import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";

Register.propTypes = {};

function Register(props) {
  function handleSubmit(values) {
    console.log("Form Submit", values);
  }
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
