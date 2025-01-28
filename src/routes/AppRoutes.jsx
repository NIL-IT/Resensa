import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "./routes";
// import Home from "../components/pages/Home";
// import NotFound from "../components/pages/NotFound";
// import Equipment from "../components/pages/Equipment";
// import AboutCompany from "../components/pages/AboutCompany";
// import Admin from "../components/pages/Admin";
// import ProductItem from "../components/pages/ProductItem";
// import LoginForm from "../components/pages/LoginForm";
// import Contacts from "../components/pages/Contacts";
const Home = lazy(() => import("../components/pages/Home"));
const NotFound = lazy(() => import("../components/pages/NotFound"));
const Equipment = lazy(() => import("../components/pages/Equipment"));
const AboutCompany = lazy(() => import("../components/pages/AboutCompany"));
const Admin = lazy(() => import("../components/pages/Admin"));
const ProductItem = lazy(() => import("../components/pages/ProductItem"));
const LoginForm = lazy(() => import("../components/pages/LoginForm"));
const Contacts = lazy(() => import("../components/pages/Contacts"));
export default function AppRoutes({ equipment, solutions, banner, news }) {
  const { isAdmin } = useSelector(({ user }) => user);

  return (
    <Routes>
      <Route
        path={ROUTES.AUTH}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <LoginForm />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.HOME}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <Home
              equipment={equipment}
              solutions={solutions}
              banner={banner}
              news={news}
            />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.EQUIPMENT}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <Equipment
              title={"Оборудование"}
              text={`Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. 

`}
              data={equipment}
              bannerImg={"/img/newbanner.png"}
              placeholderSrc={"/img/newbanner_compress.png"}
            />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.SOLUTIONS}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <Equipment
              title={"Решения"}
              text={`Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. 

`}
              data={solutions}
              bannerImg={"/img/newsol_banner.png"}
              placeholderSrc={"/img/newsol_banner_compress.png"}
            />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.EQUIPMENT_PRODUCT}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <ProductItem list={equipment} />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.SOLUTIONS_PRODUCT}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <ProductItem list={solutions} />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.ABOUT}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <AboutCompany />
          </Suspense>
        }
      />

      {isAdmin && (
        <Route
          path={ROUTES.ADMIN}
          element={
            <Suspense
              fallback={
                <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                  <div className="loader" />
                </div>
              }
            >
              <Admin />
            </Suspense>
          }
        />
      )}

      <Route
        path={ROUTES.CONTACT}
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <Contacts />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
                <div className="loader" />
              </div>
            }
          >
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}
