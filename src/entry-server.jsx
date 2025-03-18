import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server"; // Corrected import
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { store } from "./utils/store";
import {
  getAllEquipment,
  getAllNews,
  getAllSolutions,
  getBanner,
  getCompany,
} from "./utils/slice/userSlice";
export async function fetchInitialData(url, store) {
  // Dispatch your initial data actions here
  try {
    await Promise.all([
      store.dispatch(getAllNews()),
      store.dispatch(getAllEquipment()),
      store.dispatch(getAllSolutions()),
      store.dispatch(getBanner()),
      store.dispatch(getCompany()),
    ]);
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
  return store.getState();
}

export async function render(url) {
  // Prefetch data before rendering
  await fetchInitialData(url, store);
  const helmetContext = {};
  const html = renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;

  // Return both HTML and initial state to hydrate the client
  return {
    html,
    head: helmet
      ? `${helmet.title.toString()}
       ${helmet.meta.toString()}
       ${helmet.link.toString()}`
      : "",
    initialState: store.getState(), // Add this to pass to the client
  };
}
