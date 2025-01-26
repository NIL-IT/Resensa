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

export default function ProductItem({ list }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // const isOrders = pathname.split("/")[2] === "orders";
  const navigate = useNavigate();
  const [dataCategory, setDataCategory] = useState();
  const { routingToOrders, isAdmin, itemId, equipmentById, solutionsById } =
    useSelector(({ user }) => user);
  const [isLoading, setIsLoading] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const isEquipment = equipmentById !== null;
  console.log(isEquipment);

  const [currentProduct, setCurrentProduct] = useState(
    equipmentById ? equipmentById : solutionsById ? solutionsById : list[0]
  );

  document.body.style.overflowY = "auto";
  useEffect(() => {
    if (!currentProduct) navigate("/");
  }, [currentProduct]);

  const scrollToOrders = () => {
    if (itemId) return;
    const widthPage = document.querySelector("body").offsetWidth;
    let scrollPosition;
    if (widthPage > 1600) scrollPosition = 3650;
    else if (widthPage > 1200) scrollPosition = 3000;
    else if (widthPage > 768) scrollPosition = 3500;
    else if (widthPage > 640) scrollPosition = 2400;
    else if (widthPage > 420) scrollPosition = 3600;
    else if (widthPage > 375) scrollPosition = 3350;
    else scrollPosition = 3150;

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
    if (!id) return;
    setCurrentProduct(
      equipmentById ? equipmentById : solutionsById ? solutionsById : list[0]
    );
  }, [id, equipmentById, solutionsById]);

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
    setCurrentProduct(
      equipmentById ? equipmentById : solutionsById ? solutionsById : list[0]
    );
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

  return isLoading ? (
    <>
      <main>
        <EquipmentBanner
          currentProduct={true}
          bannerImg={currentProduct.image_banner}
          title={currentProduct.sub_header}
          subtitle={currentProduct.name}
          text={currentProduct.header}
          isButton={true}
          width={"w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"}
        />
        <Advantages />
        <ItemsList
          equipment={isEquipment}
          title={"каталог"}
          list={dataCategory}
          limited={false}
        />
        <OrderStatus />
      </main>
      <Footer />
    </>
  ) : (
    <div>Загрузка...</div>
  );
}
