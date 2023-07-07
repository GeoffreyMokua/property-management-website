import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LandlordModal from "./LandlordModal";

const rows = [
  {
    id: 1,
    Username: "Geoffrey nyakundi",
    Email: "jeff@gmail.com",
  },
  {
    id: 2,
    Username: "James Smith",
    Email: "james@gmail.com",
  },
  {
    id: 3,
    Username: "Kered Dosiash",
    Email: "kdosiash@gmail.com",
  },
  {
    id: 4,
    Username: "John Kenya",
    Email: "joe@gmail.com",
  },
  {
    id: 5,
    Username: "Lucy Dany",
    Email: "lucydany@gmail.com",
  },
];

const Landlord = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack gap={2}>
      <div style={{ height: 250, width: "100%" }}>
        <Typography variant="h5">List of Landlords</Typography>
        <Stack gap={2} sx={{ display: "flex", alignItems: "start" }}>
          <Button
            onClick={handleClickOpen}
            sx={{ textTransform: "capitalize", borderRadius: "5px" }}
            elevation={0}
            size="small"
            variant="contained"
          >
            Landlord Login
          </Button>
        </Stack>
        <Stack gap={0} sx={{ display: "flex", alignItems: "end" }}>
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
        <Stack gap={3}>
          <DataGrid
            columns={[
              { field: "id" },
              { field: "Username", width: 125, minWidth: 150, maxWidth: 200 },
              { field: "Email" },
            ]}
            rows={rows}
          />
        </Stack>
      </div>
      <LandlordModal open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default Landlord;
