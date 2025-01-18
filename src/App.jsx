import { useSelector } from "react-redux";
import Header from "./components/shared/Header";
import Popup from "./components/shared/popup/Popup";
import AppRoutes from "./routes/AppRoutes";
import StatusPopup from "./components/shared/popup/StatusPopup";
import AddOrderPopup from "./components/shared/popup/AddOrderPopup";
import ChangeEquipmentPopup from "./components/shared/popup/ChangeEquipmentPopup";

function App() {
  const { isPopup, status, addOrderPopup, isAuth, equipmentPopup } =
    useSelector(({ user }) => user);
  return (
    <div className="relative">
      <div
        className={`${
          (isPopup || status || addOrderPopup || equipmentPopup) &&
          "blur-md bg-gray-200"
        }`}
      >
        {isAuth && <Header />}
        <AppRoutes />
      </div>
      {isPopup && <Popup />}
      {status && <StatusPopup />}
      {addOrderPopup && <AddOrderPopup />}
      {equipmentPopup && <ChangeEquipmentPopup />}
    </div>
  );
}

export default App;
