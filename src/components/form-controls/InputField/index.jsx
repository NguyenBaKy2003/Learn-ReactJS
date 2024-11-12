import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const {
    formState: { errors, touchedFields },
  } = form;
  const hasError = touchedFields[name] && errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disable}
          error={!!hasError}
          helperText={fieldState.error ? fieldState.error.message : ""}
        />
      )}
    />
  );
}

export default InputField;
