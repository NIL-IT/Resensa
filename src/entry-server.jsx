import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";
import pkg from "react-helmet-async";
const { HelmetProvider } = pkg;
import App from "./App";

/**
 * @param {string} url
 */
export function render(url) {
  const helmetContext = {}; // Create context for Helmet

  const html = renderToString(
    <StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </Provider>
    </StrictMode>
  );

  const { helmet } = helmetContext; // Get helmet data from context

  return {
    html,
    head: helmet
      ? `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `
      : "",
  };
}
