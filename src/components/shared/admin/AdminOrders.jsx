import React, { useEffect, useState } from "react";
import Title from "../../ui/Title";
import { Plus, Trash2 } from "lucide-react";
import VerticalDote from "../../ui/VerticalDote";
import { useDispatch, useSelector } from "react-redux";
import { changeOrdersList } from "../../../utils/slice/userSlice";
import { useFormatDate } from "../../../utils/hooks/formatDate";
import SearchInput from "../../ui/SearchInput";
export const list = [
  { name: "Добавить новый заказ", icon: <Plus width={20} />, action: "add" },
  {
    name: "Удалить выбранное",
    icon: <Trash2 width={20} />,
    action: "deleteSelected",
  },
  {
    name: "Удалить все заказы",
    icon: <Trash2 width={20} />,
    action: "deleteAll",
  },
];

export default function AdminOrders({ title }) {
  const { ordersData } = useSelector(({ user }) => user);
  const [ordersList, setOrdersList] = useState(ordersData);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setOrdersList(ordersData);
  }, [ordersData]);
  const handleCheckedAllOrders = () => {
    if (selectedOrders.length === ordersList.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(ordersList.map((order) => order.id));
    }
  };
  const handleCheckedOrder = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };
  const isChecked = (orderId) => {
    return selectedOrders.includes(orderId);
  };

  const deleteSelected = () => {
    setOrdersList((prev) =>
      prev.filter((order) => !selectedOrders.includes(order.id))
    );
    dispatch(changeOrdersList(ordersList));
    setSelectedOrders([]);
  };

  const deleteAll = () => {
    setOrdersList([]);
    setSelectedOrders([]);
    dispatch(changeOrdersList(ordersList));
  };
  const handleSearch = (value) => {
    setOrdersList(
      ordersData.filter((order) => order.id.toString().includes(value))
    );
  };
  return (
    <div className="w-full relative">
      <span className="w-[1px] h-[100%] absolute bg-gray-400 top-0 left-[-39px]" />
      <div className="flex-center justify-between mb-4">
        <Title className="text-xl font-normal text-gray-400" text={title} />
        <div className="flex-center gap-8">
          <SearchInput
            handleSearch={handleSearch}
            type={"number"}
            placeholder={"Введите номер заказа"}
            className={"w-[300px]  border-0 border-b border-gray-250"}
          />
          <VerticalDote
            deleteAll={deleteAll}
            deleteSelected={deleteSelected}
            list={list}
            selectedOrders={selectedOrders}
            ordersList={ordersList}
          />
        </div>
      </div>
      <div className="max-h-[480px] overflow-y-scroll">
        <table className="min-w-full relative">
          <thead className="sticky top-0 left-0 bg-white z-20">
            <tr className="border-b font-normal text-base text-gray-400">
              <th className="w-[15px] py-3 px-0 mx-0">
                <input
                  onChange={handleCheckedAllOrders}
                  checked={selectedOrders.length === ordersData.length}
                  type="checkbox"
                  className="rounded border-gray-300 cursor-pointer"
                />
              </th>
              <th className="text-left py-3 px-4">Заказ</th>
              <th className="text-left py-3 px-4 ">Номер</th>
              <th className="text-left py-3 px-4 ">Дата</th>
              <th className="text-left py-3 px-4 ">Данные клиента</th>
              <th className="text-left py-3 px-4 ">Статус</th>
              <th className="text-left py-3 px-4 ">Сумма</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((order) => (
              <tr
                key={order.id}
                className="border-b *:text-sm *:font-normal *:text-gray-400"
              >
                <td className="py-3 w-[15px] ">
                  <input
                    checked={isChecked(order.id)}
                    onChange={() => handleCheckedOrder(order.id)}
                    type="checkbox"
                    className="rounded border-gray-300 cursor-pointer"
                  />
                </td>
                <td className="py-3 px-4 ">Lorem ipsum</td>
                <td className="py-3 px-4 ">{order.id}</td>
                <td className="py-3 px-4 ">{useFormatDate(order.date)}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span className="text-sm">{order.client}</span>
                  </div>
                </td>
                <td className="py-3 ">
                  <span
                    className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-gray-400`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ml-2 ${
                        order.status === "delivered" ? "bg-green" : "bg-red"
                      }`}
                    />
                    {order.status === "delivered" ? "Доставлен" : "Отменен"}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
