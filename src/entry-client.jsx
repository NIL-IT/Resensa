import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./utils/slice"; // Adjust to your actual import
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { store } from "./utils/store";
// Get the server state
const preloadedState = window.__INITIAL_STATE__;

// // Create store with server state
// const store = configureStore({
//   reducer: rootReducer,
//   preloadedState,
// });

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
