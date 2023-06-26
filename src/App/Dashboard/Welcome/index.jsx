import React from "react";
import { Stack, Typography, Button, Box, Paper } from "@mui/material/";
import ApartmentIcon from "@mui/icons-material/Apartment";
const Welcome = () => {
  return (
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
      }}>
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}>
        <Stack sx={{ backgroundColor: "#1D267D", height: "100%" }}>
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
          <Typography align="center">property 5</Typography>
          <Button
            sx={{
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "5px",
            }}
            size="small"
            variant="contained">
            properties
          </Button>
        </Stack>
      </Paper>
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}>
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
          <Typography align="center">property 5</Typography>
          <Button
            sx={{ marginRight: "auto", marginLeft: "auto" }}
            size="small"
            variant="contained">
            properties
          </Button>
        </Stack>
      </Paper>
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}>
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
          <Typography align="center">property 5</Typography>
          <Button
            sx={{ marginRight: "auto", marginLeft: "auto" }}
            size="small"
            variant="contained">
            properties
          </Button>
        </Stack>
      </Paper>
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}>
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
          <Typography align="center">property 5</Typography>
          <Button
            sx={{ marginRight: "auto", marginLeft: "auto" }}
            size="small"
            variant="contained">
            properties
          </Button>
        </Stack>
      </Paper>
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}>
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
          <Typography align="center">property 5</Typography>
          <Button
            sx={{ marginRight: "auto", marginLeft: "auto" }}
            size="small"
            variant="contained">
            properties
          </Button>
        </Stack>
      </Paper>
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}>
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
          <Typography align="center">property 5</Typography>
          <Button
            sx={{ marginRight: "auto", marginLeft: "auto" }}
            size="small"
            variant="contained">
            properties
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Welcome;
