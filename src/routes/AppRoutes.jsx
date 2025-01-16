import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Equipment from "../components/pages/Equipment";
import { ROUTES } from "./routes";
import AboutCompany from "../components/pages/AboutCompany";
import Admin from "../components/pages/Admin";
import { data } from "../utils/data";
import { textEquipment } from "../utils/data";
import ProductItem from "../components/pages/ProductItem";
export default function AppRoutes() {
  const combinedData = {
    itemsList: [...data.equipment.items, ...data.solutions.items],
  };
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.EQUIPMENT}
        element={
          <Equipment
            data={data.equipment}
            text={textEquipment}
            bannerImg={"/img/eq_banner.svg"}
            title={"оборудование"}
          />
        }
      />
      <Route
        path={ROUTES.SOLUTIONS}
        element={
          <Equipment
            data={data.solutions}
            text={textEquipment}
            bannerImg={"/img/solutions_banner.png"}
            title={"решения"}
          />
        }
      />
      <Route
        path={ROUTES.PRODUCT}
        element={<ProductItem list={combinedData.itemsList} />}
      />
      <Route path={ROUTES.ABOUT} element={<AboutCompany />} />
      <Route path={ROUTES.ADMIN} element={<Admin />} />
    </Routes>
  );
}
