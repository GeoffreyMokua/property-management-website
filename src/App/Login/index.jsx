import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { MuiTelInput } from "mui-tel-input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required**"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const {
    register,
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
        Welcome back Tenant!!{" "}
        <Typography
          sx={{ fontWeight: "700" }}
          variant="h4"
          color="secondary.main"
          component="span">
          LOGIN
        </Typography>
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "500px",
          // mixWidth: "600px",
          display: "flex",
          gap: 4,
          marginBottom: "40px",
          flexDirection: "column",
          "@media (max-width: 600px)": {
            display: "flex",
            width: "90vw",
            marginRight: "auto",
            marginLeft: "auto",
            flexDirection: "column",
            marginBottom: "40px",
          },
        }}>
        <Stack sx={{ width: "100%" }}>
          <TextField
            {...register("email")}
            variant="outlined"
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
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
        <Stack sx={{ gridColumn: "span 2" }}>
          <Button
            sx={{ paddingY: "10px" }}
            size="large"
            type="submit"
            variant="contained">
            LOGIN
          </Button>
        </Stack>
        <Typography
          component="span"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          variant="body1"
          color="primary.main">
          Forgot password?
        </Typography>
        <Typography sx={{ alignSelf: "end" }} variant="body1" color="grey">
          Don't have an account?{" "}
          <Typography
            onClick={() => navigate("/register")}
            sx={{ cursor: "pointer", textDecoration: "underline" }}
            color="primary.main"
            component="span"
            variant="body2">
            Register
          </Typography>
        </Typography>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Login;
