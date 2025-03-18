import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./utils/slice/userSlice";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// Get the server state
const preloadedState = window.__INITIAL_STATE__;

// // Create store with server state
const store = configureStore({
  reducer: {
    user: userSlice,
  },
  preloadedState,
});
// Hydrate with matching server structure
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
