import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../../components/Footer";
// import axios from "axios";
import Slide from "@mui/material/Slide";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required**"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must have at least 8 characters"),
});

const Login = () => {
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleNotification = () => {
    setOpen1(false);
    setTimeout(() => {
      handleClose();
      navigate("/landlord_dashboard");
    }, 4000);
  };

  const onSubmit = (data) => {
    setOpen1(true);
    return fetch(`https://property-system-node.onrender.com/landlord_login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        pasword: data.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
          
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("landlord_id", JSON.stringify(data.landlord));
        handleClickOpen();
        handleNotification();
      })
      .catch((error) => {
        // Handle any other errors that may occur during the fetch or JSON parsing.
        console.error("Error occurred:", error);
        // You can also display a generic error message to the user.
        // handleErrorMessage("An error occurred. Please try again later.");
      });
  };

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
        Welcome back Landlord!!{" "}
        <Typography
          sx={{ fontWeight: "700" }}
          variant="h4"
          color="secondary.main"
          component="span">
          LOGIN
        </Typography>
      </Typography>
      {error ? (
        <Alert
          sx={{
            marginBottom: "20px",
            color: "red",
            "& .MuiAlert-icon": {
              marginRight: "10px", // Adjust the spacing between the icon and the message
            },
            "& .MuiSvgIcon-root": {
              // Apply your custom styles to the SVG icon
              fill: "red", // Change the icon color to blue
              width: "20px", // Set the icon width
              height: "20px", // Set the icon height
            },
          }}
          onClose={() => {
            setError(false);
          }}>
          {errorMessage?.message}
        </Alert>
      ) : null}
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
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
      <Dialog
        PaperProps={{
          sx: {
            color: "blue",
            minHeight: "300px",
            minWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <Typography>
          <CheckBoxIcon sx={{ fontSize: "80px" }} />
        </Typography>
        <Typography>Login Successfull</Typography>
      </Dialog>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open1}
        onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Footer />
    </Stack>
  );
};

export default Login;
