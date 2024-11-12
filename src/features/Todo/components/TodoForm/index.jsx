import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form"; // Importing useForm from react-hook-form
import InputField from "../../../../components/form-controls/InputField"; // Make sure this path is correct

TodoForm.propTypes = {
  onsubmit: PropTypes.func,
};

function TodoForm(props) {
  // Initialize form with useForm hook
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    console.log("Todo Form", values);
    if (props.onsubmit) {
      props.onsubmit(values); // Call parent onSubmit if it's passed as a prop
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Todo Form</h3>
      <InputField
        name="title"
        label="Todo" // Correct the spelling of 'label'
        register={register} // Pass register function from useForm to InputField
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
