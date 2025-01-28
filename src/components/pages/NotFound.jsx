import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function NotFound() {
  return (
    <div className="absolute z-50 top-0 left-0 min-h-screen min-w-[100vw] flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>404 - Страница не найдена | Recensa</title>
        <meta
          name="description"
          content="Запрашиваемая страница не существует или была удалена"
        />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">
          Страница не найдена
        </h2>
        <p className="text-gray-500 mt-2 mb-8">
          Запрашиваемая страница не существует или была удалена
        </p>

        <Link
          to={ROUTES.HOME}
          className="inline-block px-6 py-3 bg-gray-300 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
