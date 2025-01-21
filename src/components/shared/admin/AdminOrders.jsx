import React, { useEffect, useState } from "react";
import Title from "../../ui/Title";
import { Plus, Trash2 } from "lucide-react";
import VerticalDote from "../../ui/VerticalDote";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, deleteOrders } from "../../../utils/slice/userSlice";
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
  const { orders } = useSelector(({ user }) => user);
  const [ordersList, setOrdersList] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders) {
      setLoading(true);
      setOrdersList(orders);
    }
  }, [orders, dispatch]);

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

  const deleteSelected = async () => {
    for (const orderId of selectedOrders) {
      const filter = ordersList.filter(({ id }) => id !== orderId);
      setOrdersList(filter);
    }

    for (const orderId of selectedOrders) {
      await dispatch(deleteOrders(orderId));
    }
    setSelectedOrders([]);
    await dispatch(getAllOrders());
  };

  const deleteAll = async () => {
    for (const order of ordersList) {
      await dispatch(deleteOrders(order.id));
    }

    setSelectedOrders([]);
  };

  const handleSearch = (value) => {
    setOrdersList(
      orders.filter((order) => order.number.toString().includes(value))
    );
  };

  return (
    <div className="w-full relative">
      <span className="w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <Title
          className="text-xl font-normal text-gray-400 mb-2 md:mb-0"
          text={title}
        />
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto">
          <SearchInput
            handleSearch={handleSearch}
            type={"number"}
            placeholder={"Введите номер заказа"}
            className={"w-full md:w-[300px] border-0 border-b border-gray-250"}
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
      <div className="max-h-[480px] overflow-x-auto overflow-y-scroll">
        <table className="min-w-full relative">
          <thead className="sticky top-0 left-0 bg-white z-20">
            <tr className="border-b font-normal text-base text-gray-400">
              <th className="w-[15px] py-3 px-2">
                <input
                  onChange={handleCheckedAllOrders}
                  checked={selectedOrders.length === orders.length}
                  type="checkbox"
                  className="rounded border-gray-300 cursor-pointer"
                />
              </th>
              <th className="text-left py-3 px-2 md:px-4">Заказ</th>
              <th className="text-left py-3 px-2 md:px-4">Номер</th>
              <th className="text-left py-3 px-2 md:px-4">Дата</th>
              <th className="text-left py-3 px-2 md:px-4">Данные клиента</th>
              <th className="text-left py-3 px-2 md:px-4">Статус</th>
              <th className="text-left py-3 px-2 md:px-4">Сумма</th>
            </tr>
          </thead>
          {loading && ordersList.length > 0 ? (
            <tbody>
              {ordersList.map((order) => (
                <tr
                  key={order.id}
                  className="border-b *:text-xs md:*:text-sm *:font-normal *:text-gray-400"
                >
                  <td className="py-3 w-[15px] px-2">
                    <input
                      checked={isChecked(order.id)}
                      onChange={() => handleCheckedOrder(order.id)}
                      type="checkbox"
                      className="rounded border-gray-300 cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-2 md:px-4">{order.name}</td>
                  <td className="py-3 px-2 md:px-4">{order.number}</td>
                  <td className="py-3 px-2 md:px-4">
                    {useFormatDate(order.date)}
                  </td>
                  <td className="py-3 px-2 md:px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-xs md:text-sm">
                        {order.client_name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-2 md:px-4">
                    <span
                      className={`inline-flex items-center gap-1 md:gap-2 px-1 md:px-2 py-1 rounded-full text-gray-400 text-xs md:text-sm`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          order.state === "Доставлен"
                            ? "bg-green"
                            : order.state === "Отменен"
                            ? "bg-red"
                            : "bg-yellow"
                        }`}
                      />
                      {order.state}
                    </span>
                  </td>
                  <td className="py-3 px-2 md:px-4 text-xs md:text-sm">
                    {order.order_amount} ₽
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr className="border-b *:text-sm *:font-normal *:text-gray-400">
                <td colSpan="7" className="py-3 px-4 text-center">
                  Нет заказов
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
