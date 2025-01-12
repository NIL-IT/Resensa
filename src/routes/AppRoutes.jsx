import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Equipment from "../components/pages/Equipment";
import { ROUTES } from "./routes";
import AboutCompany from "../components/pages/AboutCompany";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.EQUIPMENT} element={<Equipment />} />
      <Route path={ROUTES.ABOUT} element={<AboutCompany />} />
    </Routes>
  );
}
