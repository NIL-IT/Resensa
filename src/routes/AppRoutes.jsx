import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { useSelector } from "react-redux";
const Home = lazy(() => import("../components/pages/Home"));
const NotFound = lazy(() => import("../components/pages/NotFound"));
const Equipment = lazy(() => import("../components/pages/Equipment"));
const AboutCompany = lazy(() => import("../components/pages/AboutCompany"));
const Admin = lazy(() => import("../components/pages/Admin"));
const ProductItem = lazy(() => import("../components/pages/ProductItem"));
const LoginForm = lazy(() => import("../components/pages/LoginForm"));
const Contacts = lazy(() => import("../components/pages/Contacts"));
const NewsPage = lazy(() => import("../components/pages/NewsPage"));
export default function AppRoutes({
  company,
  equipment,
  solutions,
  banner,
  news,
}) {
  const { isAdmin } = useSelector(({ user }) => user);
  return (
    <Routes>
      <Route path={ROUTES.AUTH} element={<LoginForm />} />
      <Route
        path={ROUTES.HOME}
        element={
          <Home
            equipment={equipment}
            solutions={solutions}
            banner={banner}
            news={news}
            company={company}
          />
        }
      />
      <Route
        path={ROUTES.EQUIPMENT}
        element={
          <Equipment
            company={company}
            title={"Оборудование"}
            text={`Recensa предлагает широкий ассортимент вентиляционного оборудования 
              для коммерческих, промышленных и жилых объектов. В линейке представлены 
              установки общего и специализированного назначения, системы вентиляции, 
              осушения, кондиционирования и автоматизации. Каждая серия разработана с 
              учетом энергоэффективности, надежности и удобства эксплуатации. 

`}
            data={equipment}
            bannerImg={"/img/newbanner.png"}
            placeholderSrc={"/img/newbanner_compress.png"}
          />
        }
      />
      <Route
        path={ROUTES.SOLUTIONS}
        element={
          <Equipment
            company={company}
            title={"Решения"}
            text={`Recensa разрабатывает и поставляет климатические системы для объектов
               с особыми требованиями. Наши технологии помогают создать комфортный и безопасный 
               климат в любых условиях. Мы предлагаем комплексные системы для
               вентиляции, осушения, охлаждения и 
               автоматизации, адаптированное под 
               конкретные задачи бизнеса и инфраструктуры.
`}
            data={solutions}
            bannerImg={"/img/newsol_banner.png"}
            placeholderSrc={"/img/newsol_banner_compress.png"}
          />
        }
      />
      <Route
        path={ROUTES.EQUIPMENT_PRODUCT}
        element={<ProductItem list={equipment} />}
      />
      <Route
        path={ROUTES.SOLUTIONS_PRODUCT}
        element={<ProductItem list={solutions} />}
      />
      <Route path={ROUTES.ABOUT} element={<AboutCompany company={company} />} />
      {isAdmin && <Route path={ROUTES.ADMIN} element={<Admin />} />}
      <Route path={ROUTES.CONTACT} element={<Contacts company={company} />} />
      <Route path={ROUTES.NEWS} element={<NewsPage news={news} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
