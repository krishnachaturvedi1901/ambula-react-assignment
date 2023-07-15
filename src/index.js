import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./Redux/store";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AlertContextProvider } from "./Context/AlertContext";
import WindowWidthContextProvider from "./Context/WindowWidthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <AlertContextProvider>
    <WindowWidthContextProvider>
    <App />
    </WindowWidthContextProvider>
    </AlertContextProvider>
    </BrowserRouter>
  </Provider>
);
