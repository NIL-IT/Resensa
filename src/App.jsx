import { useDispatch, useSelector } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/shared/Header";
import Popup from "./components/shared/popup/Popup";
import AppRoutes from "./routes/AppRoutes";
import StatusPopup from "./components/shared/popup/StatusPopup";
import AddOrderPopup from "./components/shared/popup/AddOrderPopup";
import ChangeEquipmentPopup from "./components/shared/popup/ChangeEquipmentPopup";
import AddNewItem from "./components/shared/popup/AddNewItem";
import NewsPopup from "./components/shared/popup/NewsPopup";
import Widget from "./components/ui/Widget";
import SearchPopup from "./components/shared/popup/SearchPopup";
import {
  getAllEquipment,
  getAllNews,
  getAllOrders,
  getAllSolutions,
  getBanner,
} from "./utils/slice/userSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChangeStatusPopup from "./components/shared/popup/ChangeStatusPopup";
import EquipmentType from "./components/shared/popup/EquipmentType";

function App() {
  const { pathname } = useLocation();
  const isLoginForm = pathname === "/auth" || pathname === "/auth/";
  const {
    isPopup,
    status,
    addOrderPopup,
    equipmentPopup,
    addNewItemPopup,
    newsPopup,
    searchPopup,
    statusOrderPopup,
    equipment,
    solutions,
    banner,
    news,
    orders,
    calcPopup,
  } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const isActivePopup =
    isPopup ||
    status ||
    addOrderPopup ||
    equipmentPopup ||
    addNewItemPopup ||
    newsPopup ||
    searchPopup ||
    statusOrderPopup ||
    calcPopup;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await dispatch(getAllNews());
        await dispatch(getAllEquipment());
        await dispatch(getAllSolutions());
        await dispatch(getAllOrders());
        await dispatch(getBanner());
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return !loading ? (
    <HelmetProvider>
      <div className="relative">
        {!isLoginForm && <Widget />}
        <div className={`${isActivePopup && "blur-md bg-gray-200"}`}>
          {!isLoginForm && <Header />}
          <AppRoutes
            equipment={equipment}
            solutions={solutions}
            banner={banner}
            news={news}
            orders={orders}
          />
        </div>
        {isPopup && <Popup />}
        {status && <StatusPopup orders={orders} />}
        {addOrderPopup && <AddOrderPopup />}
        {equipmentPopup && <ChangeEquipmentPopup />}
        {addNewItemPopup && <AddNewItem />}
        {newsPopup && <NewsPopup />}
        {searchPopup && <SearchPopup />}
        {statusOrderPopup && <ChangeStatusPopup />}
        {calcPopup && <EquipmentType />}
      </div>
    </HelmetProvider>
  ) : (
    <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
      <div className="loader" />
    </div>
  );
}

export default App;
