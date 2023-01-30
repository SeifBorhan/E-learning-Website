import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
