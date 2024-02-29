import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "admin-lte/dist/css/adminlte.css";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
