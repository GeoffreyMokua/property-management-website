import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MuiTelInput } from "mui-tel-input";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required**"),
  lastName: yup.string().required("Last name is required**"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required**"),
  phoneNumber: yup.number().integer().required("Phone number is required**"),
  password: yup.string().required("Password is required"),
  date: yup.date().required("Date is a required field"),
});

const Register = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => await alert(JSON.stringify(data));

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      p={5}
      spacing={2}
      sx={{
        maxWidth: "600px",
        display: "grid",
        gap: 5,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}>
      <Stack>
        <TextField
          {...register("firstName")}
          variant="outlined"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
      </Stack>
      <Stack>
        <TextField
          {...register("lastName")}
          variant="outlined"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Stack>
      <Stack>
        <TextField
          {...register("email")}
          variant="outlined"
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Stack>
      <Stack>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <MuiTelInput
              {...field}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          )}
        />
      </Stack>
      <Stack>
        <TextField
          {...register("date")}
          variant="outlined"
          label="Date"
          type="date"
          error={!!errors.date}
          helperText={errors.date?.message}
        />
      </Stack>
      <Stack>
        <TextField
          {...register("password")}
          variant="outlined"
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </Stack>
      <Stack sx={{ gridColumn: "2fr" }}>
        <Button size="large" type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};

export default Register;
