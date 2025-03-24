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
  const helmetContext = {};

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

  const { helmet } = helmetContext;

  // Важно: возвращайте все типы данных из helmet
  return {
    html,
    head: helmet
      ? `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
      `
      : "",
  };
}
