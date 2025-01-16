import { useSelector } from "react-redux";
import Header from "./components/shared/Header";
import Popup from "./components/shared/Popup";
import AppRoutes from "./routes/AppRoutes";
import StatusPopup from "./components/shared/StatusPopup";

function App() {
  const { isPopup, status } = useSelector(({ user }) => user);
  return (
    <div className="relative">
      <div className={`${(isPopup || status) && "blur-md bg-gray-200"}`}>
        <Header />
        <AppRoutes />
      </div>
      {isPopup && <Popup />}
      {status && <StatusPopup />}
    </div>
  );
}

export default App;
