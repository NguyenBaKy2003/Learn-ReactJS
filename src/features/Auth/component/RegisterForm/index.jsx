import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/form-controls/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Button, Typography, Box } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
  });

  const { onSubmit } = props;

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  function handleFormSubmit(values) {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  }

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Avatar sx={{ m: "auto", bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h3" variant="h5" sx={{ mt: 2, mb: 2 }}>
        Create Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retypePassword" label="Retype Password" form={form} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}>
          CREATE AN ACCOUNT
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm;
