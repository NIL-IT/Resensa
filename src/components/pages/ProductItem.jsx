import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EquipmentBanner from "../shared/EquipmentBanner";
import Advantages from "../shared/Advantages";

import ItemsList from "../shared/ItemsList";
import Footer from "../shared/Footer";
import OrderStatus from "../shared/OrderStatus";
import { useSelector } from "react-redux";

const text = `Оборудование серии RCN стандартного исполнения предназначено для 
размещения и эксплуатации в помещениях различного 
назначения как внутри зданий, так и на открытом 
воздухе.`;
export default function ProductItem({ list }) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const isOrders = pathname.split("/")[2] === "orders";
  const navigate = useNavigate();
  const [dataCategory, setDataCategory] = useState();
  const { routingToOrders } = useSelector(({ user }) => user);
  const [isLoading, setIsLoading] = useState(false);
  const findProduct = !isOrders
    ? list.find((item) => +item.id === +id)
    : list[0];
  const [currentProduct, setCurrentProduct] = useState(findProduct);

  if (!currentProduct && !isOrders) navigate("/");
  useEffect(() => {
    if (routingToOrders && isOrders) {
      setTimeout(() => {
        console.log("routing");
        window.scrollTo({
          top: 2650,
          left: 0,
          behavior: "smooth",
        });
      }, 20);
    }
  });

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

  return isLoading ? (
    <>
      <EquipmentBanner
        currentProduct={true}
        bannerImg={currentProduct.image}
        title={"ОБЩЕПРОМЫШЛЕННОЕ"}
        subtitle={currentProduct.name}
        text={text}
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
