import { useSelector } from "react-redux";
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

function App() {
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

  const isActivePopup =
    isPopup ||
    status ||
    addOrderPopup ||
    equipmentPopup ||
    addNewItemPopup ||
    newsPopup ||
    searchPopup;

  return (
    <div className="relative">
      <Widget />
      <div className={`${isActivePopup && "blur-md bg-gray-200"}`}>
        {isAuth && <Header />}
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
