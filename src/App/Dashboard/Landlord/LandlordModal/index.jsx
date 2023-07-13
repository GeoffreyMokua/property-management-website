import * as React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(" First name is required"),
  lastName: yup.string().required(" Last name is required"),
  email: yup.string().required("email is required"),
  pNumber: yup.string().required("Phone number county is required"),
});

export default function LandlordModal({ open, handleClose, handleUpdate }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        "https://property-system-node.onrender.com/landlords",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: data.Firstname,
            last_name: data.LastName,
            email: data.email,
            p_number: data.pNumber,
          }),
        }
      );

      const responseJson = await res.json();
      reset();
      handleUpdate();
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "100%",
          },
        }}
      >
        <Stack
          gap={3}
          sx={{ padding: "20px" }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "15px",
            }}
          >
            <Stack gap={1}>
              <Typography> First Name</Typography>
              <TextField
                {...register("firstName")}
                placeholder="Enter first name"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Stack>
            <Stack gap={1}>
              <Typography> Last Name</Typography>
              <TextField
                {...register("lastName")}
                placeholder="Enter last name"
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Stack>
            <Stack gap={1}>
              <Typography>Email</Typography>
              <TextField
                placeholder="Enter email"
                variant="outlined"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr",
              columnGap: "15px",
            }}
          >
            <Stack gap={1}>
              <Typography>Phone Number</Typography>
              <TextField
                placeholder="Enter phone number"
                {...register("pNumber")}
                variant="outlined"
                error={!!errors.pNumber}
                helperText={errors.pNumber?.message}
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              columnGap: "15px",
            }}
          ></Stack>
          <Button
            variant="contained"
            size="small"
            type="submit"
            sx={{ textTransform: "capitalize" }}
          >
            create
          </Button>
        </Stack>
        <DialogActions>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="outlined"
            onClick={handleClose}
          >
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
