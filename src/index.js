import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'mdbootstrap/css/mdb.min.css';
// import 'mdbootstrap/css/bootstrap.min.css';
import "mdb-react-ui-kit/dist/css/mdb.min.css";

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import "@fortawesome/fontawesome-free/css/all.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./App/Contact";
import Login from "./App/Login";
import Houses from "./App/Houses";
import About from "./App/About";
import Register from "./App/Register";
import Dashboard from "./App/Dashboard";
import ManageTenants from "./App/Dashboard/ManageTenants";
import ManageProperty from "./App/Dashboard/ManageProperty";
import ManageInvoices from "./App/Dashboard/ManageInvoices";
import Landlord from "./App/Dashboard/Landlord";
import Caretaker from "./App/Dashboard/Caretaker";
import Agent from "./App/Dashboard/Agent";
import Payments from "./App/Dashboard/Payments";
import Welcome from "./App/Dashboard/Welcome";
import Reports from "./App/Dashboard/Reports";
import AdminProfile from "./App/Dashboard/AdminProfile";
import SingleProperty from "./App/Dashboard/ManageProperty/SingleProperty";
import LandlordDashboard from "./App/LandlordDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Houses",
    element: <Houses />,
  },

  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "landlord_dashboard",
    element: <LandlordDashboard />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "tenants",
        element: <ManageTenants />,
      },
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "agent",
        element: <Agent />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "landlord",
        element: <Landlord />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "manage-invoices",
        element: <ManageInvoices />,
      },
      {
        path: "manage-property",
        element: <ManageProperty />,
      },
      {
        path: "manage-property/:id",
        element: <SingleProperty />,
      },
      {
        path: "caretaker",
        element: <Caretaker />,
      },
      {
        path: "admin-profile",
        element: <AdminProfile />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
