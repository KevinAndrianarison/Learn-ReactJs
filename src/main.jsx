import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContexteProvider } from "./contexte/useTheme.jsx";
import { NameContexteProvider } from "./contexte/useName.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeContexteProvider>
      <NameContexteProvider>
        <App />
      </NameContexteProvider>
    </ThemeContexteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
