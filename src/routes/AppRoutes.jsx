import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Equipment from "../components/pages/Equipment";
import { ROUTES } from "./routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.EQUIPMENT} element={<Equipment />} />
    </Routes>
  );
}
