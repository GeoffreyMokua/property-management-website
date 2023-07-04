import React from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const handleEdit = (row) => {
  // Handle edit action for the specific row
  console.log("Edit row:", row);
};

const columns = [
  { field: "id", headerName: "Property Number", width: 130 },
  { field: "propertyName", headerName: "Property name", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  { field: "rooms", headerName: "Rooms", width: 130 },
  { field: "occupied", headerName: "Occupied", width: 130 },
  { field: "vacant", headerName: "Vacant", width: 130 },
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <IconButton
        color="primary"
        size="small"
        onClick={() => handleEdit(params.row)}
      >
        <EditIcon />
      </IconButton>
    ),
  },

  {
    field: "view",
    headerName: "view",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <IconButton color="primary" size="small">
        <VisibilityIcon />
      </IconButton>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <IconButton color="red" size="small">
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
    ),
  },
];

const rows = [
  {
    id: 1,
    propertyName: "Lucky Summer",
    location: "Lucky Summer",
    rooms: 24,
    occupied: 18,
    vacant: 6,
  },
  {
    id: 2,
    propertyName: "Timba Shops",
    location: "Roysambu",
    rooms: 8,
    occupied: 8,
    vacant: 0,
  },
  {
    id: 3,
    propertyName: "Wisdom Shops",
    location: "Pipeline",
    rooms: 16,
    occupied: 12,
    vacant: 4,
  },
  {
    id: 4,
    propertyName: "Riverside",
    location: "Embakasi",
    rooms: 36,
    occupied: 30,
    vacant: 6,
  },
  {
    id: 5,
    propertyName: "Kimani Aparments",
    location: "Kikuyu",
    rooms: 65,
    occupied: 55,
    vacant: 10,
  },
  {
    id: 6,
    propertyName: "Lucky Woods",
    location: "Uthiru",
    rooms: 34,
    occupied: 28,
    vacant: 6,
  },
  {
    id: 7,
    propertyName: "Baraka Apartments",
    location: "Kinoo",
    rooms: 104,
    occupied: 90,
    vacant: 14,
  },
  {
    id: 8,
    propertyName: "ABC Apartments",
    location: "Juja",
    rooms: 44,
    occupied: 40,
    vacant: 4,
  },
  {
    id: 9,
    propertyName: "Lokichogi Luxury",
    location: "Kasarani",
    rooms: 54,
    occupied: 48,
    vacant: 6,
  },
  {
    id: 10,
    propertyName: "Luxury Aparments",
    location: "Ngong Road",
    rooms: 74,
    occupied: 70,
    vacant: 4,
  },
];

const ManageProperty = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Typography align="center" sx={{ margin: "10px", fontWeight: "bold" }}>
        PROPERTY LISTING
      </Typography>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 8, 10]}
      />
    </div>
  );
};

export default ManageProperty;
