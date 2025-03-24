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
  // console.warn = () => {};
  // console.error = () => {};
  const { helmet } = renderToString(<App />);
  console.log(helmet);

  const html = renderToString(
    <StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <HelmetProvider context={helmet}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </Provider>
    </StrictMode>
  );

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
