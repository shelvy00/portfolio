import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./Error/Error";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<Error />} />
        <Route path="*" element={<Error notFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
