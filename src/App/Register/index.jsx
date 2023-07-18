import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MuiTelInput } from "mui-tel-input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required**"),
  lastName: yup.string().required("Last name is required**"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required**"),
  pNumber: yup.number().integer().required("Phone number is required**"),
  pasword: yup.string().required("Password is required"),
  username: yup.string().required("Username is a required field"),
});

const Register = () => {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNotification = () => {
    setTimeout(() => {
      handleClose();
      navigate("/landlord_dashboard");
    }, 4000);
  };

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setError(false)
    fetch("https://property-system-node.onrender.com/landlords", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        p_number: data.pNumber,
        username: data.username,
        pasword: data.pasword,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(true);
          // Handle the error here, you can log it or display an error message.
          console.error("Response was not ok. Status:", res.status);
          // You may also want to show an error message to the user.
          // For example, you can call a function to display a snackbar or modal with the error message.
          // handleErrorMessage("Failed to process the request.");
          throw new Error("Failed to process the request.");
        }
      })
      .then((data) => {
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
        Welcome New Landlord{" "}
        <Typography
          sx={{ fontWeight: "700" }}
          variant="h4"
          color="secondary.main"
          component="span">
          Create Account
        </Typography>
      </Typography>
      {error ? (
        <Alert
          sx={{ marginBottom: "20px", color: "red" }}
          onClose={() => {
            setError(false);
          }}>
          Username or email already ,,try changing both and try again
        </Alert>
      ) : null}
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
            name="pNumber"
            control={control}
            render={({ field }) => (
              <MuiTelInput
                {...field}
                label="Phone Number"
                error={!!errors.pNumber}
                helperText={errors.pNumber?.message}
              />
            )}
          />
        </Stack>
        <Stack>
          <TextField
            {...register("username")}
            variant="outlined"
            label="Username"
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Stack>

        <Stack>
          <TextField
            {...register("pasword")}
            variant="outlined"
            label="Password"
            error={!!errors.pasword}
            helperText={errors.pasword?.message}
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
          },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <Typography>
          <CheckBoxIcon />
        </Typography>
        <Typography>Register Successfull</Typography>
      </Dialog>
      <Footer />
    </Stack>
  );
};

export default Register;
