import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async(data) => await alert(JSON.stringify(data));

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      direction="column"
      p={5}
      spacing={2}
      width={200}>
      <Stack gap={2}>
        <TextField
          {...register("firstName")}
          variant="outlined"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
      </Stack>
      <Stack gap={2}>
        <TextField
          {...register("lastName")}
          variant="outlined"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Stack>
      <Stack gap={2}>
        <TextField
          {...register("email")}
          variant="outlined"
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Stack>
      <Stack gap={2}>
        <TextField
          {...register("password")}
          variant="outlined"
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </Stack>
      <Button type="submit" variant="contained">Submit</Button>
    </Stack>
  );
};

export default Register;
