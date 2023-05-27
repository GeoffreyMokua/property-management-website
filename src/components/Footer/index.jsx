import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack, Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#05014a",
        color: "#ffffff",
        width: "100vw",
      }}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "auto",
          },
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px"
          }}>
          <Typography color="orange" variant="h5">
            QUICK LINKS
          </Typography>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Our Team</Typography>
          <Typography variant="body1">About Us </Typography>
          <Typography variant="body1">Contacts</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px"
          }}>
          <Typography color="orange" variant="h5">
            Our Rooms
          </Typography>
          <Typography variant="body1">3 Bedrooms</Typography>
          <Typography variant="body1">Bed sitter</Typography>
          <Typography variant="body1">1 Bedroom open kitchen</Typography>
          <Typography variant="body1">1 Bedroom with balcony</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            alignItems: "center",
          }}>
          <Typography
            sx={{ marginBottom: "30px" }}
            component="p"
            color="orange"
            variant="h5">
            Social Icons
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CallIcon />
            <EmailIcon />
            <TwitterIcon />
            <FacebookIcon />
          </Box>
        </Box>
      </Box>

      <hr></hr>
      <div class="text-center">
        <Typography variant="body2">
          © Copyright 2023 by GPM. All Rights Reserved.
        </Typography>
      </div>
    </Stack>
  );
};

export default Footer;
