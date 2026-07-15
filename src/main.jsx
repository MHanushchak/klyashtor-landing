import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

// Перевіряємо, чи є вже готовий HTML всередині (якщо це пререндер або продакшен)
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  // Звичайний рендер (працює під час розробки npm run dev)
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
