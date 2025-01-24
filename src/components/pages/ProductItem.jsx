import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EquipmentBanner from "../shared/EquipmentBanner";
import Advantages from "../shared/Advantages";

import ItemsList from "../shared/ItemsList";
import Footer from "../shared/Footer";
import OrderStatus from "../shared/OrderStatus";
import { useDispatch, useSelector } from "react-redux";
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
const text = `Оборудование серии RCN стандартного исполнения предназначено для 
размещения и эксплуатации в помещениях различного 
назначения как внутри зданий, так и на открытом 
воздухе.`;
export default function ProductItem({ list }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isOrders = pathname.split("/")[2] === "orders";
  const navigate = useNavigate();
  const [dataCategory, setDataCategory] = useState();
  const { routingToOrders, isAdmin } = useSelector(({ user }) => user);
  const [isLoading, setIsLoading] = useState(false);
  const findProduct = !isOrders
    ? list.find((item) => +item.id === +id)
    : list[0];
  const [currentProduct, setCurrentProduct] = useState(findProduct);
  document.body.style.overflowY = "auto";
  if (!currentProduct && !isOrders) navigate("/");
  const routing = (top) => {
    setTimeout(() => {
      console.log("routing");
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    }, 20);
  };
  useEffect(() => {
    let widthPage = document.querySelector("body").offsetWidth;
    if (routingToOrders && !isAdmin) {
      if (widthPage > 1600) routing(2650);

      if (widthPage > 1200) routing(3000);

      if (widthPage > 768) routing(3200);
      if (widthPage > 640) routing(3150);
      if (widthPage > 420) routing(3150);
      if (widthPage > 375) routing(3000);
      if (widthPage < 375) routing(2800);
    }
  });
  const changeRoutingToOrders = () => {
    dispatch(changeRoutingToOrders(false));
  };
  useEffect(() => {
    if (!id && isOrders) return;
    setCurrentProduct(findProduct);
  }, [id]);

  useEffect(() => {
    setCurrentProduct(!isOrders ? findProduct : list[0]);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  useEffect(() => {
    if (!currentProduct) return;
    if (currentProduct.hasOwnProperty("max_param")) {
      const filterData = list.filter((item) => item.max_param);
      setDataCategory(filterData);
      setIsLoading(true);
    } else {
      const filterData = list.filter(
        (item) => !item.hasOwnProperty("max_param")
      );
      setDataCategory(filterData);
      setIsLoading(true);
    }
  }, [id, list]);
  const subtitle = () => {
    let item;
    if (!currentProduct) return;

    item = dataTitle.filter(
      (item) => item.name.toLowerCase() === currentProduct.name.toLowerCase()
    );

    if (item.length > 0) {
      return item[0].subtitle;
    }
    return "";
  };

  return isLoading ? (
    <>
      <EquipmentBanner
        currentProduct={true}
        bannerImg={currentProduct.image}
        title={subtitle() || currentProduct.name}
        subtitle={currentProduct.name}
        text={currentProduct.description}
        isButton={true}
        width={"w-[550px]"}
      />
      <Advantages />
      <ItemsList
        changeRoutingToOrders={changeRoutingToOrders}
        title={"каталог"}
        list={dataCategory}
        limited={false}
      />
      <OrderStatus />
      <Footer />
    </>
  ) : (
    <div>Загрузка...</div>
  );
}
