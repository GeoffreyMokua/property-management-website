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
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
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
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      });

      const responseJson = await res.json();
      reset();
      handleUpdate();
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Stack>
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
                <Typography>Name</Typography>
                <TextField
                  {...register("name")}
                  placeholder="Enter name of the Landlord"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Stack>
              <Stack gap={1}>
                <Typography>Email</Typography>
                <TextField
                  placeholder="Enter email of the Landlord"
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
    </Stack>
  );
}
