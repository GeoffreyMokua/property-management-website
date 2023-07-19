import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ErrorIcon from "@mui/icons-material/Error";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LandlordDashboard = () => {
  const token = localStorage.getItem("token");
  const landlord = localStorage.getItem("landlord");
  const navigate = useNavigate();
  if (token) {
    return (
      <div>
        <Button
          sx={{ position: "absolute", right: 5, top: 5 }}
          variant="contained"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}>
          Logout
        </Button>
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
