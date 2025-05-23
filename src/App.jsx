import { useDispatch, useSelector } from "react-redux";
import Header from "./components/shared/Header";
import AppRoutes from "./routes/AppRoutes";
import Widget from "./components/ui/Widget";
import {
  getAllEquipment,
  getAllNews,
  getAllSolutions,
  getBanner,
  getCompany,
} from "./utils/slice/userSlice";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import ChangeStatusPopup from "./components/shared/popup/ChangeStatusPopup";
import EquipmentType from "./components/shared/popup/EquipmentType";
import { useLocation } from "react-router-dom";

const Popup = lazy(() => import("./components/shared/popup/Popup"));

const StatusPopup = lazy(() => import("./components/shared/popup/StatusPopup"));

const AddOrderPopup = lazy(() =>
  import("./components/shared/popup/AddOrderPopup")
);

const ChangeEquipmentPopup = lazy(() =>
  import("./components/shared/popup/ChangeEquipmentPopup")
);

const AddNewItem = lazy(() => import("./components/shared/popup/AddNewItem"));
const SearchPopup = lazy(() => import("./components/shared/popup/SearchPopup"));

function App() {
  console.warn = () => {};

  console.error = () => {};

  window.addEventListener("error", (event) => {
    event.preventDefault(); // Блокирует стандартный вывод ошибки в консоль
  });

  window.addEventListener("unhandledrejection", (event) => {
    event.preventDefault(); // Блокирует вывод ошибок промисов
  });

  // console.error = (...args) => {
  //   console.trace("Suppressed Error:", ...args);
  // };
  // const [pathname, setPathname] = useState("");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setPathname(window.location.pathname);
  //   }
  // }, []);
  const { pathname } = useLocation();
  const isLoginForm = pathname === "/auth" || pathname === "/auth/";
  const {
    isPopup,
    status,
    addOrderPopup,
    equipmentPopup,
    addNewItemPopup,
    searchPopup,
    statusOrderPopup,
    equipment,
    solutions,
    banner,
    news,
    orders,
    calcPopup,
    company,
  } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const isActivePopup =
    isPopup ||
    status ||
    addOrderPopup ||
    equipmentPopup ||
    addNewItemPopup ||
    searchPopup ||
    statusOrderPopup ||
    calcPopup;

  const [loading, setLoading] = useState(true);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    if (!equipment.length || !news.length || !solutions.length) {
      const fetchData = async () => {
        setLoading(true);
        try {
          await dispatch(getAllNews());
          await dispatch(getAllEquipment());
          await dispatch(getAllSolutions());
          await dispatch(getBanner());
          await dispatch(getCompany());
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [dispatch, equipment.length, news.length, solutions.length]);
  return !loading ? (
    <div className="relative">
      {!isLoginForm && <Widget />}
      <div className={`${isActivePopup && "blur-md bg-gray-200"}`}>
        {!isLoginForm && <Header />}
        <Suspense
          fallback={
            <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center  ">
              <div className="loader" />
            </div>
          }
        >
          <AppRoutes
            equipment={equipment}
            solutions={solutions}
            company={company}
            banner={banner}
            news={news}
            orders={orders}
          />
        </Suspense>
      </div>
      {isPopup && (
        <Suspense fallback={"...Загрузка"}>
          <Popup />
        </Suspense>
      )}
      {status && (
        <Suspense fallback={"...Загрузка"}>
          <StatusPopup orders={orders} />
        </Suspense>
      )}
      {addOrderPopup && (
        <Suspense fallback={"...Загрузка"}>
          <AddOrderPopup />
        </Suspense>
      )}
      {equipmentPopup && (
        <Suspense fallback={"...Загрузка"}>
          <ChangeEquipmentPopup />
        </Suspense>
      )}
      {addNewItemPopup && (
        <Suspense fallback={"...Загрузка"}>
          <AddNewItem />
        </Suspense>
      )}
      {searchPopup && (
        <Suspense fallback={"...Загрузка"}>
          <SearchPopup />
        </Suspense>
      )}
      {statusOrderPopup && (
        <Suspense fallback={"...Загрузка"}>
          <ChangeStatusPopup />
        </Suspense>
      )}
      {calcPopup && (
        <Suspense fallback={"...Загрузка"}>
          <EquipmentType />
        </Suspense>
      )}
    </div>
  ) : (
    <div className="fixed top-0 left-0  z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center">
      <div className="loader" />
    </div>
  );
}

export default App;
