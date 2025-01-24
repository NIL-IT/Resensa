import React, { useEffect, useState } from "react";
import Title from "../../ui/Title";
import { PencilLine, Plus, Trash2 } from "lucide-react";
import VerticalDote from "../../ui/VerticalDote";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  deleteOrders,
  exportOrdersExcel,
} from "../../../utils/slice/userSlice";
import { useFormatDate } from "../../../utils/hooks/formatDate";
import SearchInput from "../../ui/SearchInput";
import { parseExcelToOrders } from "../../../utils/hooks/parseServerExcel";

export const list = [
  { name: "Добавить новый заказ", icon: <Plus width={20} />, action: "add" },
  {
    name: "Изменить статус заказа",
    icon: <PencilLine width={20} />,
    action: "change",
  },
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
  const { orders, exportExcel } = useSelector(({ user }) => user);
  const [ordersList, setOrdersList] = useState(orders);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [excel, setExcel] = useState(ordersList);

  useEffect(() => {
    setLoading(true);
    const fetchOrders = async () => {
      await dispatch(getAllOrders());
      return setLoading(false);
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    setOrdersList(orders);
  }, [orders]);

  const handleCheckedAllOrders = () => {
    if (selectedOrders.length === ordersList.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(ordersList.map((order) => order.id));
    }
  };
  // export excel
  // useEffect(() => {
  //   const fetchExcel = async () => {
  //     const file = await exportOrdersExcel();
  //     const data = await parseExcelToOrders(file);
  //     console.log("parseData", data);
  //     // setExcel(file.payload);
  //     console.log("file", file.payload);
  //   };
  //   fetchExcel();
  // }, [exportExcel, dispatch]);
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
      <span className="hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-start lg:items-center justify-between mb-4">
        <Title
          className="text-xl font-normal text-gray-400 mb-2 md:mb-0"
          text={title}
        />
        <div className="flex  md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto">
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
        <table id="tableId" className="min-w-full relative">
          <thead className="sticky top-0 left-0 bg-white z-20">
            <tr className="border-b font-normal text-sm lg:text-base text-gray-400">
              <th className="w-[15px] py-2 px-1 ">
                <input
                  onChange={handleCheckedAllOrders}
                  checked={selectedOrders.length === orders.length}
                  type="checkbox"
                  className="rounded border-gray-300 cursor-pointer"
                />
              </th>
              <th className="text-left py-2 px-1  xl:px-4">Заказ</th>
              <th className="text-left py-2 px-1  xl:px-4">Номер</th>
              <th className="text-left py-2 px-1 xl:px-4">Дата</th>
              <th className="text-left py-2 px-1  xl:px-4">Данные клиента</th>
              <th className="text-left py-2 px-1  xl:px-4">Статус</th>
              <th className="text-left py-2 px-1 xl:px-4">Сумма</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr className="border-b *:text-sm *:font-normal *:text-gray-400">
                <td colSpan="7" className="py-3 px-4 text-center">
                  Загрузка...
                </td>
              </tr>
            </tbody>
          ) : ordersList.length > 0 ? (
            <tbody>
              {excel.map((order) => (
                <tr
                  key={order.id}
                  className="border-b *:text-[11px] lg:*:text-[11px] xl:*:text-sm *:font-normal *:text-gray-400"
                >
                  <td className="py-2 xl:py-3 w-[15px] px-1 xl:px-2">
                    <input
                      checked={isChecked(order.id)}
                      onChange={() => handleCheckedOrder(order.id)}
                      type="checkbox"
                      className="rounded border-gray-300 cursor-pointer"
                    />
                  </td>
                  <td className="py-2 xl:py-3 px-1 xl:px-4">{order.name}</td>
                  <td className="py-2 xl:py-3 px-1 xl:px-4">{order.number}</td>
                  <td className="py-2 xl:py-3 px-1 xl:pr-4">
                    {useFormatDate(order.date)}
                  </td>
                  <td className="py-2 lg:py-3 px-1 lg:px-4 text-center">
                    {order.client_name}
                  </td>
                  <td className="py-2 lg:py-3 px-1 lg:pr-4">
                    <span
                      className={`inline-flex items-center gap-1 lg:gap-2 px-1 lg:px-2 py-0.5 lg:py-1 rounded-full text-gray-400 text-[11px] lg:text-sm`}
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
                  <td className="py-2 lg:py-3 px-1 lg:px-4 text-[11px] lg:text-sm">
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
