import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MuiTelInput } from "mui-tel-input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const onSubmit = async (data) => await alert(JSON.stringify(data));

  return (
    <Stack
      sx={{
        height: "100%",
        width: "100vw",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Header />
      <Typography sx={{ marginBottom: "20px", marginTop: "80px" }} variant="h5">
        Welcome New Tenant{" "}
        <Typography
          sx={{ fontWeight: "700" }}
          variant="h4"
          color="secondary.main"
          component="span">
          Create Account
        </Typography>
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: "600px",
          display: "grid",
          gridGap: "25px",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "40px",
          "@media (max-width: 600px)": {
            display: "flex",
            width: "90vw",
            marginRight: "auto",
            marginLeft: "auto",
            flexDirection: "column",
            marginBottom: "40px",
          },
        }}>
        <Stack>
          <TextField
            sx={{ width: "100%" }}
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
                label="Phone Number"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />
        </Stack>
        <Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  slotProps={{
                    textField: {
                      error: !!errors.date,
                      helperText: errors.date?.message,
                    },
                  }}
                  label="Move in date"
                />
              )}
            />
          </LocalizationProvider>
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
        <Stack sx={{ gridColumn: "span 2" }}>
          <Button size="large" type="submit" variant="contained">
            Submit
          </Button>
        </Stack>

        <Typography sx={{ alignSelf: "end" }} variant="body1" color="grey">
          Already have an account?{" "}
          <Typography
            onClick={() => navigate("/login")}
            sx={{ cursor: "pointer", textDecoration: "underline" }}
            color="primary.main"
            component="span"
            variant="body2">
            Log in
          </Typography>
        </Typography>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Register;
