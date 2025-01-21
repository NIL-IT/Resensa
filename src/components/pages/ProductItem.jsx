import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import EquipmentBanner from "../shared/EquipmentBanner";
import Advantages from "../shared/Advantages";
import { data } from "../../utils/data";
import ItemsList from "../shared/ItemsList";
import Footer from "../shared/Footer";
import OrderStatus from "../shared/OrderStatus";
import { useDispatch, useSelector } from "react-redux";
import { changeRoutingToOrders } from "../../utils/slice/userSlice";

const text = `Оборудование серии RCN стандартного исполнения предназначено для 
размещения и эксплуатации в помещениях различного 
назначения как внутри зданий, так и на открытом 
воздухе.`;
export default function ProductItem({ list }) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { routingToOrders } = useSelector(({ user }) => user);
  const findProduct = (idProduct) =>
    list.find((item) => +item.id === +idProduct);
  const [currentProduct, setCurrentProduct] = useState(findProduct(id));
  useEffect(() => {
    if (routingToOrders) {
      setTimeout(() => {
        console.log("routing");
        window.scrollTo({
          top: 2650,
          left: 0,
        });
      }, 20);
    }
  });

  useEffect(() => {
    if (!id) return;
    setCurrentProduct(findProduct(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  function findCategory(id) {
    for (const category of ["equipment", "solutions"]) {
      const item = data[category].items.find((item) => item.id === +id);
      if (item) {
        return data[category];
      }
    }
    return null;
  }

  return (
    <>
      <EquipmentBanner
        bannerImg={"/img/product_banner.png"}
        title={"ОБЩЕПРОМЫШЛЕННОЕ"}
        subtitle={currentProduct.name}
        text={text}
        isButton={true}
        width={"w-[550px]"}
      />
      <Advantages />
      <ItemsList title={"каталог"} list={findCategory(id)} limited={false} />
      <OrderStatus />
      <Footer />
    </>
  );
}
