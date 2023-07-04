import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateModal from "./CreateModal";
import { Link } from "react-router-dom";
const ManageProperty = () => {
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [properties, setProperties] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = async (id) => {
    await fetch("https://property-system-node.onrender.com/properties/" + id, {
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
    fetch("https://property-system-node.onrender.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data.data));
  }, [update]);

  return (
    <Stack gap={2}>
      <Typography variant="h5">Properties</Typography>
      <Stack gap={3} sx={{ display: "flex", alignItems: "end" }}>
        <Button
          onClick={handleClickOpen}
          sx={{ textTransform: "capitalize", borderRadius: "5px" }}
          elevation={0}
          size="small"
          variant="contained">
          Create property
        </Button>
      </Stack>
      <Stack gap={3}>
        {properties
          ?.map((property) => (
            <Paper
              sx={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr 1fr 0.5fr 0.5fr 0.5fr",
                columnGap: 2,
                padding: "5px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              key={property.id}>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
                  {property.name}
                </Typography>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                  {property.county}
                </Typography>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                  {property.sub_county}
                </Typography>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <IconButton
                  sx={{ height: "40px", width: "40px" }}
                  aria-label="delete"
                  color="primary">
                  <Link to={`${property.id}`}>
                    <VisibilityIcon />
                  </Link>
                </IconButton>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <IconButton
                  sx={{ height: "40px", width: "40px" }}
                  aria-label="delete"
                  color="primary">
                  <EditIcon />
                </IconButton>
              </Stack>
              <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
                <IconButton
                  onClick={() => handleDelete(property.id)}
                  sx={{ height: "40px", width: "40px" }}
                  aria-label="delete"
                  color="error">
                  <DeleteIcon color="error" />
                </IconButton>
              </Stack>
            </Paper>
          ))
          .reverse()}
      </Stack>
      <CreateModal
        open={open}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
      />
    </Stack>
  );
};

export default ManageProperty;
