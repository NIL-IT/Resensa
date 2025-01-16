import React, { useState } from "react";
import Title from "../ui/Title";
import { Plus, Trash2 } from "lucide-react";
export const orders = [
  {
    id: "25426",
    date: "12.12.2024",
    client: "Kevin",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25425",
    date: "12.12.2024",
    client: "Komsai",
    status: "cancelled",
    amount: "200.00 ₽",
  },
  {
    id: "25424",
    date: "12.12.2024",
    client: "Nikhi",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25423",
    date: "12.12.2024",
    client: "Shivam",
    status: "cancelled",
    amount: "200.00 ₽",
  },
  {
    id: "25422",
    date: "12.12.2024",
    client: "Shubhi",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25420",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25419",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25418",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25417",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25416",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
];
const list = [
  { name: "Добавить новый заказ", icon: <Plus />, action: "add" },
  { name: "Удалить выбранное", icon: <Trash2 />, action: "deleteSelected" },
  { name: "Удалить все заказы", icon: <Trash2 />, action: "deleteAll" },
];

export default function AdminOrders({ title }) {
  const [ordersList, setOrdersList] = useState(orders);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [active, setActive] = useState(false);

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
  console.log(selectedOrders);

  const deleteSelected = () => {
    setOrdersList((prev) =>
      prev.filter((order) => !selectedOrders.includes(order.id))
    );
    setSelectedOrders([]);
  };

  const deleteAll = () => {
    setOrdersList([]);
    setSelectedOrders([]);
  };

  const handleAction = (action) => {
    switch (action) {
      case "deleteSelected":
        deleteSelected();
        break;
      case "deleteAll":
        deleteAll();
        break;
      // Add other cases as needed
    }
    setActive(false);
  };

  return (
    <div className="w-full relative">
      <div className="flex-center justify-between mb-6">
        <Title className="text-xl font-normal text-gray-400" text={title} />
        <div className="relative">
          <button className="p-2" onClick={() => setActive(!active)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
          {active && (
            <div className="absolute space-y-4 top-2 right-[30px] py-1 bg-white w-[250px] z-30 rounded-lg border">
              {list.map(({ name, icon, action }) => (
                <button
                  key={name}
                  className="flex-center gap-4 hover:bg-gray-50 p-2 w-full transition-all rounded"
                  onClick={() => handleAction(action)}
                >
                  {icon}
                  <span>{name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="max-h-[480px] overflow-y-scroll">
        <table className="min-w-full relative">
          <thead className="sticky top-0 left-0 bg-white z-20">
            <tr className="border-b font-normal text-base text-gray-400">
              <th className="w-[15px] py-3 px-0 mx-0">
                <input
                  onChange={handleCheckedAllOrders}
                  checked={selectedOrders.length === orders.length}
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
                <td className="py-3 px-4 ">{order.date}</td>
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
      <div className="mt-4 flex justify-end space-x-2">
        <button
          variant="outline"
          onClick={deleteSelected}
          disabled={selectedOrders.length === 0}
        >
          Delete Selected ({selectedOrders.length})
        </button>
        <button
          variant="destructive"
          onClick={deleteAll}
          disabled={orders.length === 0}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
