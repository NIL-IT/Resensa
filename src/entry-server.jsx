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
  console.warn = () => {};
  console.error = () => {};
  console.log = () => {};
  console.info = () => {};
  console.debug = () => {};
  const helmetContext = { helmet: {} };
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

  return {
    html,
    head: helmetContext.helmet
      ? `
    ${helmetContext.helmet.title?.toString() || ""}
    ${helmetContext.helmet.meta?.toString() || ""}
    ${helmetContext.helmet.link?.toString() || ""}
  `
      : "",
  };
}
