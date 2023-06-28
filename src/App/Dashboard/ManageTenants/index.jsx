import * as React from "react";
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
  { field: "id", headerName: "House Number", width: 130 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "phoneNumber", headerName: "Phone Number", width: 130 },
  {
    field: "rentStatus",
    headerName: "Rent status",
    sortable: false,
    width: 200,
  },
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <IconButton
        color="primary"
        size="small"
        onClick={() => handleEdit(params.row)}>
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
      <IconButton color="primary" size="small">
        <DeleteIcon />
      </IconButton>
    ),
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    phoneNumber: null,
    rentStatus: "paid",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 11,
    lastName: "Roxie",
    firstName: "Harvey",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 12,
    lastName: "Roxie",
    firstName: "Harvey",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 13,
    lastName: "Roxie",
    firstName: "Harvey",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
  {
    id: 14,
    lastName: "Roxie",
    firstName: "Harvey",
    phoneNumber: 726555838,
    rentStatus: "paid",
  },
];
export default function ManageTenants() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Typography align="center" sx={{ margin: "10px" }}>
        Tenants list
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
}
