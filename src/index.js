import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CreateContexts } from "./context/Createcontext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <CreateContexts>
    <SnackbarProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </SnackbarProvider>
  </CreateContexts>
  </BrowserRouter>
);
