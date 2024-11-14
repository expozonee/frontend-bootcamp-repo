import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PlacesProvider from "./providers/PlacesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlacesProvider>
      <App />
    </PlacesProvider>
  </StrictMode>
);
