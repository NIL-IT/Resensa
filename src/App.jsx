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
} from "./utils/slice/userSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const isLoginForm = pathname === "/auth" || pathname === "/auth/";
  const {
    isPopup,
    status,
    addOrderPopup,
    isAuth,
    equipmentPopup,
    addNewItemPopup,
    newsPopup,
    searchPopup,
  } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const isActivePopup =
    isPopup ||
    status ||
    addOrderPopup ||
    equipmentPopup ||
    addNewItemPopup ||
    newsPopup ||
    searchPopup;
  useEffect(() => {
    dispatch(getAllNews());
    dispatch(getAllEquipment());
    dispatch(getAllSolutions());
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
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
    </div>
  );
}

export default App;
