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

InputField.defaultProps = {
  label: "",
  disable: false,
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
          helperText={hasError ? errors[name]?.message : ""}
          variant="outlined"
          margin="normal"
        />
      )}
    />
  );
}

export default InputField;
