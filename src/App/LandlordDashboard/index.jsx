import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ErrorIcon from "@mui/icons-material/Error";

const LandlordDashboard = () => {
  const token = localStorage.getItem("token");
  const landlord = localStorage.getItem("landlord_id");

  if (token) {
    return (
      <div>
        <br></br>
        {landlord}
      </div>
    );
  } else {
    return (
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}>
        <Typography
          sx={{
            fontSize: "40px",
          }}>
          Unauthorised access !!! <ErrorIcon sx={{ fontSize: "40px" }} />
        </Typography>
      </Stack>
    );
  }
};

export default LandlordDashboard;
