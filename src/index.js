import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/CharlesHenriSaintMars_11_08092022/build/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
