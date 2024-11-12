import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import InputField from "../../../../components/form-controls/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
  });

  const { onSubmit } = props;

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  function handleFormSubmit(values) {
    // console.log("Todo Form", values);
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <h3>Todo Form</h3>
      <InputField name="title" label="Todo" form={form} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
