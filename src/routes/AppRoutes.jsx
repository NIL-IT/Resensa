import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
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
import Contacts from "../components/pages/Contacts";
export default function AppRoutes() {
  const { isAdmin, equipment, solutions } = useSelector(({ user }) => user);
  // const location = useLocation();
  // const navigate = useNavigate();
  // const [loading, isLoading] = useState(true);
  // console.log(equipment, "equipment");
  // console.log(solutions, "solutions");
  const combinedData = [...equipment, ...solutions];

  // console.log(combinedData, "combinedData");
  // useEffect(() => {
  //   // Redirect to auth if not authenticated, unless already on auth page
  //   if (!isAuth && location.pathname !== ROUTES.AUTH) {
  //     navigate(ROUTES.AUTH);
  //   }
  //   // Redirect from auth page to home if already authenticated
  //   if (isAuth && location.pathname === ROUTES.AUTH) {
  //     navigate(ROUTES.HOME);
  //   }
  // }, [isAuth, location.pathname, navigate]);

  // Show only auth route when not authenticated
  // if (!isAuth) {
  //   return (
  //     <Routes>
  //       <Route path={ROUTES.AUTH} element={<LoginForm />} />
  //       <Route path="*" element={<Navigate to={ROUTES.AUTH} replace />} />
  //     </Routes>
  //   );
  // }

  // Show all routes when authenticated
  return (
    <Routes>
      <Route path={ROUTES.AUTH} element={<LoginForm />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.EQUIPMENT}
        element={
          <Equipment
            data={equipment}
            text={textEquipment}
            bannerImg={"/img/newbanner.png"}
            title={"оборудование"}
          />
        }
      />
      <Route
        path={ROUTES.SOLUTIONS}
        element={
          <Equipment
            data={solutions}
            text={textEquipment}
            bannerImg={"/img/newsol_banner.png"}
            title={"решения"}
          />
        }
      />
      <Route
        path={ROUTES.PRODUCT}
        element={<ProductItem list={combinedData} />}
      />
      <Route path={ROUTES.ABOUT} element={<AboutCompany />} />
      {isAdmin && <Route path={ROUTES.ADMIN} element={<Admin />} />}
      <Route path={ROUTES.CONTACT} element={<Contacts />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
}
