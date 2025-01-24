import { useDispatch, useSelector } from "react-redux";
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
  updateBanner,
} from "./utils/slice/userSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChangeStatusPopup from "./components/shared/popup/ChangeStatusPopup";
import { update } from "three/examples/jsm/libs/tween.module.js";
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
    statusOrderPopup;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        dispatch(getAllNews());
        dispatch(getAllEquipment());
        dispatch(getAllSolutions());
        dispatch(getAllOrders());
        dispatch(getBanner());
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return !loading ? (
    <div className="relative">
      {!isLoginForm && <Widget />}
      <div className={`${isActivePopup && "blur-md bg-gray-200"}`}>
        {!isLoginForm && <Header />}
        <AppRoutes />
      </div>
      {isPopup && <Popup />}
      {status && <StatusPopup />}
      {addOrderPopup && <AddOrderPopup />}
      {equipmentPopup && <ChangeEquipmentPopup />}
      {addNewItemPopup && <AddNewItem />}
      {newsPopup && <NewsPopup />}
      {searchPopup && <SearchPopup />}
      {statusOrderPopup && <ChangeStatusPopup />}
    </div>
  ) : (
    <div className="fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center mt-20">
      <div className="loader" />
    </div>
  );
}

export default App;
