import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styling/index.css";
import App from "./Components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
