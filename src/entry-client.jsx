import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
console.warn = () => {};
console.error = () => {};
hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
