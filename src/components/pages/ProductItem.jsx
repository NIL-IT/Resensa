import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EquipmentBanner from "../shared/EquipmentBanner";
import Advantages from "../shared/Advantages";
import ItemsList from "../shared/ItemsList";
import Footer from "../shared/Footer";
import OrderStatus from "../shared/OrderStatus";
import {
  changeIsAdmin,
  changeRoutingToOrders,
} from "../../utils/slice/userSlice";

const dataTitle = [
  {
    name: "СЕРИЯ RPOOL",
    subtitle: "Бассейновое",
  },
  {
    name: "СЕРИЯ RCDUCT",
    subtitle: "Канальное",
  },
  {
    name: "смесительные узлы",
    subtitle: "Водяные узлы",
  },
  {
    name: "СЕРИЯ RCLEAN",
    subtitle: "Медицинское Гигиеническое исполнение",
  },
  {
    name: "СЕРИЯ RCROOF",
    subtitle: "Крышное оборудованиe для больших помещений",
  },
  {
    name: "СЕРИЯ RCN",
    subtitle: "Общепромышленное",
  },
];

export default function ProductItem({ list }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isOrders = pathname.split("/")[2] === "orders";
  const navigate = useNavigate();
  const [dataCategory, setDataCategory] = useState();
  const { routingToOrders, isAdmin, itemId } = useSelector(({ user }) => user);
  const [isLoading, setIsLoading] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const findProduct = !isOrders
    ? list.find((item) => +item.id === +id)
    : list[0];
  const [currentProduct, setCurrentProduct] = useState(findProduct);

  document.body.style.overflowY = "auto";

  if (!currentProduct && !isOrders) navigate("/");

  const scrollToOrders = () => {
    if (itemId) return;
    const widthPage = document.querySelector("body").offsetWidth;
    let scrollPosition;
    if (widthPage > 1600) scrollPosition = 3650;
    else if (widthPage > 1200) scrollPosition = 3000;
    else if (widthPage > 768) scrollPosition = 3500;
    else if (widthPage > 640) scrollPosition = 3500;
    else if (widthPage > 420) scrollPosition = 3150;
    else if (widthPage > 375) scrollPosition = 3000;
    else scrollPosition = 2800;

    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  // Handle orders routing scroll
  useEffect(() => {
    if (!routingToOrders) return;
    const hasVisited = localStorage.getItem("hasVisitedProduct");
    if (!hasVisited) {
      localStorage.setItem("hasVisitedProduct", "true");
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }

    if (
      (routingToOrders && !isAdmin) ||
      (isFirstVisit && !isAdmin && routingToOrders)
    ) {
      scrollToOrders();
    }

    if (isFirstVisit) {
      dispatch(changeRoutingToOrders(true));
    }
  }, [routingToOrders, isAdmin, isFirstVisit]);

  // Handle product changes
  useEffect(() => {
    if (!id && isOrders) return;
    setCurrentProduct(findProduct);
  }, [id, findProduct]);

  // Handle pathname changes and scroll behavior
  useEffect(() => {
    if (itemId) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      dispatch(changeIsAdmin(null));
      return;
    }
    const prevPath = prevPathname.split("/");
    const currentPath = pathname.split("/");

    if (prevPath[1] !== currentPath[1] || prevPath[2] !== currentPath[2]) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      dispatch(changeRoutingToOrders(false));
    }
    setCurrentProduct(!isOrders ? findProduct : list[0]);
    setPrevPathname(pathname);
  }, [pathname, itemId]);

  // Handle category data
  useEffect(() => {
    if (!currentProduct) return;

    if (currentProduct.hasOwnProperty("max_param")) {
      const filterData = list.filter((item) => item.max_param);
      setDataCategory(filterData);
    } else {
      const filterData = list.filter(
        (item) => !item.hasOwnProperty("max_param")
      );
      setDataCategory(filterData);
    }
    setIsLoading(true);
  }, [id, list, currentProduct]);

  const getSubtitle = () => {
    if (!currentProduct) return "";

    const item = dataTitle.find(
      (item) => item.name.toLowerCase() === currentProduct.name.toLowerCase()
    );

    return item ? item.subtitle : "";
  };

  return isLoading ? (
    <>
      <EquipmentBanner
        currentProduct={true}
        bannerImg={currentProduct.image_banner}
        title={getSubtitle() || currentProduct.name}
        subtitle={currentProduct.name}
        text={currentProduct.description}
        isButton={true}
        width={"w-[550px]"}
      />
      <Advantages />
      <ItemsList title={"каталог"} list={dataCategory} limited={false} />
      <OrderStatus />
      <Footer />
    </>
  ) : (
    <div>Загрузка...</div>
  );
}
