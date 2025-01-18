import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/pages/Home";
import Equipment from "../components/pages/Equipment";
import { ROUTES } from "./routes";
import AboutCompany from "../components/pages/AboutCompany";
import Admin from "../components/pages/Admin";
import { data } from "../utils/data";
import { textEquipment } from "../utils/data";
import ProductItem from "../components/pages/ProductItem";
import LoginForm from "../components/pages/LoginForm";
import { useSelector } from "react-redux";
export default function AppRoutes() {
  const combinedData = {
    itemsList: [...data.equipment.items, ...data.solutions.items],
  };
  const { isAuth, isAdmin } = useSelector(({ user }) => user);
  const [auth, setAuth] = useState(isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    setAuth(isAuth);
    if (auth) {
      navigate(ROUTES.HOME);
      console.log("Home");
    } else {
      navigate(ROUTES.AUTH);
    }
  }, [isAuth, auth, setAuth]);

  return (
    <Routes>
      <Route path={ROUTES.AUTH} element={<LoginForm setAuth={setAuth} />} />
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
