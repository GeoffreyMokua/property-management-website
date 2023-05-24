import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./App/Contact";
import Login from "./App/Login";
import About from "./App/About";
import Register from "./App/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "register",
    element: <Register />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
