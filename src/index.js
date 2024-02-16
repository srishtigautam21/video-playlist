import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlaylistProvider } from "./context/playlistContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlaylistProvider>
        <App />
      </PlaylistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
