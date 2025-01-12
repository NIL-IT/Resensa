import { useSelector } from "react-redux";
import Header from "./components/shared/Header";
import Popup from "./components/shared/Popup";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { isPopup } = useSelector(({ user }) => user);
  return (
    <div className="relative">
      <div className={`${isPopup && "blur-md bg-gray-200"}`}>
        <Header />
        <AppRoutes />
      </div>
      {isPopup && <Popup open={true} />}
    </div>
  );
}

export default App;
