import React from "react";
import { Stack, Typography, Button, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material/";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Link } from "react-router-dom";


function createData(
  name,
  location,
  rooms,
  occupied,
  vacant
) {
  return { name, location, rooms, occupied, vacant };
}

const rows = [
  createData( "Lucky Summer", "Lucky summer", 24, 18, 6),
  createData( "Timba Shops", "Lucky summer",8, 8, 0),
  createData( "Wisdom Shops", "Pipeline",16, 12, 4),
  createData( "Riverside", "Embakasi", 36, 30, 6),
];


const Welcome = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",

          rowGap: "20px",
          columnGap: "20px",
          backgroundColor: "hsla(0, 0%, 96%, 1)",
        }}
      >
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <Stack sx={{ backgroundColor: "green", height: "100%" }}>
            <ApartmentIcon
              sx={{
                fontSize: "50px",
                color: "#ffff",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </Stack>
          <Stack gap={1} sx={{ justifyContent: "center" }}>
            <Typography align="center">
              Property <br /> 5
            </Typography>
            <Link to="/dashboard/manage-property">
            <Button
              sx={{
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: "5px",
              }}
              size="small"
              variant="contained"
            >
              view Properties
            </Button>
            </Link>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <Stack sx={{ backgroundColor: "#1D267D", height: "100%" }}>
            <ApartmentIcon
              sx={{
                fontSize: "70px",
                color: "#ffff",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </Stack>
          <Stack gap={1} sx={{ justifyContent: "center" }}>
            <Typography align="center">
              Landlords <br /> 1
            </Typography>
            <Button
              sx={{ marginRight: "auto", marginLeft: "auto" }}
              size="small"
              variant="contained"
            >
              View Landlords
            </Button>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <Stack sx={{ backgroundColor: "#b8288d", height: "100%" }}>
            <ApartmentIcon
              sx={{
                fontSize: "70px",
                color: "#ffff",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </Stack>
          <Stack gap={1} sx={{ justifyContent: "center" }}>
            <Typography align="center">
              Tenants <br /> 65
            </Typography>
            <Link to="/dashboard/tenants">
            <Button
              sx={{ marginRight: "auto", marginLeft: "auto" }}
              size="small"
              variant="contained"
            >
              View Tenants
            </Button>
            </Link>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <Stack sx={{ backgroundColor: "#b88128", height: "100%" }}>
            <ApartmentIcon
              sx={{
                fontSize: "70px",
                color: "#ffff",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </Stack>
          <Stack gap={1} sx={{ justifyContent: "center" }}>
            <Typography align="center">
              Vacants <br /> 5
            </Typography>
            <Button
              sx={{ marginRight: "auto", marginLeft: "auto" }}
              size="small"
              variant="contained"
            >
              View Vacant Rooms
            </Button>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <Stack
            gap={1}
            sx={{ justifyContent: "center", backgroundColor: "green" }}
          >
            <Typography align="left">46,800</Typography>
            <h5>June Payments</h5>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <Stack sx={{ backgroundColor: "#1D267D", height: "100%" }}>
            <ApartmentIcon
              sx={{
                fontSize: "70px",
                color: "#ffff",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </Stack>
          <Stack gap={1} sx={{ justifyContent: "center" }}>
            <Typography align="center">586,400</Typography>
            <Button
              sx={{ marginRight: "auto", marginLeft: "auto" }}
              size="small"
              variant="contained"
            >
              Rent Balances
            </Button>
          </Stack>
        </Paper>
      </Box>

      <TableContainer component={Paper}>
        <h5 align="left">Property Summary</h5>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Property Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Location
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Rooms
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Occupied
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Vacant
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.rooms}</TableCell>
                <TableCell align="right">{row.occupied}</TableCell>
                <TableCell align="right">{row.vacant}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Welcome;
