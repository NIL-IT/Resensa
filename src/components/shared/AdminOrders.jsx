import React from "react";
import Title from "../ui/Title";
const orders = [
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
    id: "25421",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25421",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25421",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25421",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25421",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
];
export default function AdminOrders({ title }) {
  return (
    <div className="w-full relative">
      <div className="flex-center justify-between  mb-6 ">
        <Title className="text-xl font-normal text-gray-400" text={title} />
        <button className="p-2">
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
      </div>
      <div className="  max-h-[480px] overflow-y-scroll ">
        <table className="min-w-full relative ">
          <thead className=" sticky top-0 left-0 bg-white z-20  ">
            <tr className="border-b font-normal text-base text-gray-400">
              <th className="w-[15px] py-3 px-0 mx-0">
                <input
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
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b *:text-sm *:font-normal *:text-gray-400"
              >
                <td className="py-3 w-[15px] ">
                  <input
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
    </div>
  );
}
