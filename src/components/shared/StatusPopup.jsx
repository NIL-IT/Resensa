import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowStatus } from "../../utils/slice/userSlice";
import { orders } from "./AdminOrders";
import { div } from "three/tsl";

export default function StatusPopup() {
  const dispatch = useDispatch();
  const { orderNum } = useSelector(({ user }) => user);
  const [isOpen, setIsOpen] = useState(true);
  const findOrder = orders.find((order) => order.id === orderNum);
  useEffect(() => {
    dispatch(changeShowStatus(isOpen));
  }, [isOpen]);
  return (
    <div className="fixed inset-0  flex items-center justify-center">
      <div className="bg-white py-[38px] px-8 rounded-lg w-full max-w-[800px] max-h-[553px] flex flex-col justify-center relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-xl font-medium leading-[40.8px] text-gray-400 mb-6 uppercase">
          вы можете проверить статус своего заказа
        </h2>
        {findOrder ? (
          <div className="flex justify-center">
            <table className="w-[80%]">
              <thead className="border-b border-gray-400">
                <tr className=" font-normal text-base text-gray-400 *:py-4  flex justify-between w-[600px] px-2">
                  <th className="text-left  ">Номер</th>
                  <th className="text-left  ">Дата</th>
                  <th className="text-left ">Статус</th>
                  <th className="text-left  mr-2">Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr className="*:py-4 flex justify-between w-[600px] px-2">
                  <td className=" text-sm text-gray-400 pl-[5px]">
                    {findOrder.id}
                  </td>
                  <td className=" text-sm text-gray-400 pl-7">
                    {findOrder.date}
                  </td>
                  <td className="pr-4">
                    <span
                      className={`inline-flex items-center gap-2 px-2  rounded-full text-gray-400`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          findOrder.status === "delivered"
                            ? "bg-green"
                            : "bg-red"
                        }`}
                      />
                      {findOrder.status === "delivered"
                        ? "Доставлен"
                        : "Отменен"}
                    </span>
                  </td>
                  <td className=" text-sm text-gray-400">{findOrder.amount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-sm text-gray-400">
            Заказ с номером {orderNum} не найден
          </div>
        )}
      </div>
    </div>
  );
}
