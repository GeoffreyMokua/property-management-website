import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PaymentIcon from "@mui/icons-material/Payment";
import PublicIcon from "@mui/icons-material/Public";
import { Outlet } from "react-router";
import { Stack } from "react-bootstrap";

const drawerWidth = 240;

const paymentIcon = <PaymentIcon />;
const supportAgentIcon = <SupportAgentIcon />;
const tenantsIcon = <GroupsIcon />;
const invoiceIcon = <ReceiptIcon />;
const appartmentIcon = <ApartmentIcon />;
const summarizeIcon = <SummarizeIcon />;
const publicIcon = <PublicIcon />;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "#1D267D", height: "70px",display: "flex" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard SUMMARY DASHBOARD
          </Typography>
          <Button
          href="/dashboard"
          sx={{
            marginTop: "auto",
            marginLeft: "auto",
            marginBottom: "auto",
            alignSelf: "right",
            color: "white",
            backgroundColor: "green",
          }}
          variant="outlined">
          Back to dashboard
        </Button>
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#363636",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <Typography sx={{ color: "#ffff", fontSize: "15px" }}>
            Rental Management
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "#ffff" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "#ffff" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ color: "#ffff" }} />
        <Stack
          sx={{
            width: "100%",

            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Avatar
            alt="avatar"
            src="https://img.freepik.com/free-vector/home-icon-pin-deal-isolated-white_1284-48167.jpg"
            sx={{
              width: 100,
              height: 100,
              marginTop: "20px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
          <Typography sx={{ color: "#ffff" }} align="center">
            GOLDEN MANAGEMENT
          </Typography>
        </Stack>
        <Divider sx={{ color: "#ffff" }} />
        <List>
          {[
            { text: "Payments", path: "payments", icon: paymentIcon },
            {
              text: "Manage Invoices",
              path: "manage-invoices",
              icon: invoiceIcon,
            },
            { text: "Manage Tenants", path: "tenants", icon: tenantsIcon },
            {
              text: "Manage Property",
              path: "manage-property",
              icon: appartmentIcon,
            },
            { text: "Reports", path: "reports", icon: summarizeIcon },
            { text: "caretaker", path: "caretaker", icon: supportAgentIcon },
            { text: "landlord", path: "landlord", icon: publicIcon },
          ].map(({ text, path, icon }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={`/dashboard/${path}`}>
                <ListItemIcon sx={{ color: "#ffff" }}>{icon}</ListItemIcon>
                <ListItemText sx={{ color: "#ffff" }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
