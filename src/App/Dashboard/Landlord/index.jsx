import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LandlordModal from "./LandlordModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const Landlord = () => {
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [landlords, setLandlords] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = async (id) => {
    await fetch(`${process.env.BASE_URL}/landlords/${id}`, {
      method: "DELETE",
    });

    handleUpdate();
  };

  function handleUpdate() {
    setUpdate((update) => !update);
  }

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("https://property-system-node.onrender.com/landlords")
      .then((res) => res.json())
      .then((data) => setLandlords(data.data));
  }, [update]);

  return (
    <Stack gap={2}>
      <Typography variant="h5">Landlords</Typography>
      <Stack gap={3} sx={{ display: "flex", alignItems: "end" }}>
        <Button
          onClick={handleClickOpen}
          sx={{ textTransform: "capitalize", borderRadius: "5px" }}
          elevation={0}
          size="small"
          variant="contained"
        >
          Add Landlord
        </Button>
      </Stack>
      <Stack
        gap={3}
        sx={{ backgroundColor: "#808080", padding: "20px", minHeght: "100%" }}
      >
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "2.5fr 1fr 1fr 1fr 1.5fr",
            columnGap: 2,
            backgroundColor: "primary.main",
            color: "#fffff",
            padding: "5px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Stack>
            <Typography
              sx={{ color: "#ffffff", fontSize: "15px", fontWeight: 700 }}
            >
              First Name
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{ color: "#ffffff", fontSize: "15px", fontWeight: 700 }}
            >
              Last Name
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{ color: "#ffffff", fontSize: "15px", fontWeight: 700 }}
            >
              Email
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{ color: "#ffffff", fontSize: "15px", fontWeight: 700 }}
            >
              Phone Number
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              Actions
            </Typography>
          </Stack>
        </Paper>
        {landlords
          ?.map((landlord) => (
            <Paper
              sx={{
                display: "grid",
                borderRadius: "5px",
                gridTemplateColumns: "3fr 1fr 1fr 0.5fr 0.5fr 0.5fr 0.5fr",
                columnGap: 2,
                padding: "5px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              key={landlord.id}
            >
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
                  {landlord.first_name}
                </Typography>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                  {landlord.last_name}
                </Typography>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                  {landlord.email}
                </Typography>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                  {landlord.p_number}
                </Typography>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <IconButton
                  sx={{ height: "40px", width: "40px" }}
                  aria-label="delete"
                  color="primary"
                >
                  <Link to={`${landlord.id}`}>
                    <VisibilityIcon />
                  </Link>
                </IconButton>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <IconButton
                  sx={{ height: "40px", width: "40px" }}
                  aria-label="delete"
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <IconButton
                  onClick={() => handleDelete(landlord.id)}
                  sx={{ height: "40px", width: "40px" }}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </Stack>
            </Paper>
          ))
          .reverse()}
      </Stack>
      <LandlordModal
        open={open}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
      />
    </Stack>
  );
};

export default Landlord;
