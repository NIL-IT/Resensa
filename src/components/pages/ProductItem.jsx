import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
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
  getAllOrders,
} from "../../utils/slice/userSlice";

export default function ProductItem({ list }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { routingToOrders, isAdmin, itemId, equipmentById, solutionsById } =
    useSelector(({ user }) => user);

  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const isEquipment =
    !equipmentById && !solutionsById ? true : equipmentById ? true : false;

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
    if (widthPage > 1600) scrollPosition = 0;
    else if (widthPage > 1200) scrollPosition = 0;
    else if (widthPage > 768) scrollPosition = 800;
    else if (widthPage > 640) scrollPosition = 1200;
    else if (widthPage > 420) scrollPosition = 1300;
    else if (widthPage > 375) scrollPosition = 1300;
    else scrollPosition = 1200;
    scrollPosition = document.body.scrollHeight - scrollPosition;
    console.log(scrollPosition);
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "smooth",
      });
    }, 10);
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
    setCurrentProduct(
      equipmentById ? equipmentById : solutionsById ? solutionsById : list[0]
    );
  }, [pathname, equipmentById, solutionsById]);

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

  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getAllOrders());
  }, []);

  return list.length > 0 ? (
    <>
      <Helmet>
        <title>{`${currentProduct.name} - Recensa`}</title>
        <meta
          name="description"
          content={`${currentProduct.name}. ${currentProduct.header}. Профессиональные решения для вентиляции от RECENSA.`}
        />
      </Helmet>
      <main>
        <EquipmentBanner
          list={list}
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
          list={list}
          limited={false}
        />
        <OrderStatus />
      </main>
      <Footer />
    </>
  ) : (
    <></>
  );
}
