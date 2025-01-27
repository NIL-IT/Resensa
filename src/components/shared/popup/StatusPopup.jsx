import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowStatus } from "../../../utils/slice/userSlice";

export default function StatusPopup({ orders }) {
  const dispatch = useDispatch();
  const { orderNum } = useSelector(({ user }) => user);
  const [isOpen, setIsOpen] = useState(true);
  const [findOrder, setFindOrder] = useState(null);
  const [updateOrder, setUpdateOrder] = useState(orders);

  document.body.style.overflowY = "hidden";

  useEffect(() => {
    if (!updateOrder) return;
    if (updateOrder.length > 0 && orderNum) {
      setFindOrder(updateOrder.find((order) => +order.number === +orderNum));
    }
  }, [setUpdateOrder, updateOrder]);
  useEffect(() => {
    dispatch(changeShowStatus(isOpen));
  }, [isOpen]);
  const getColor = (state) => {
    const toLowerCase = state.toLowerCase();
    if (toLowerCase == "отменен") return "bg-red";
    if (toLowerCase == "доставлен") return "bg-green";
    if (toLowerCase == "оплачен") return "bg-blue";
    return "bg-gray-400";
  };

  return (
    <section className="max-w-[100vw] max-h-[100vh] fixed inset-0  z-50 flex items-center justify-center">
      <div
        className="bg-white py-[38px] px-8 rounded-lg xl:min-h-[200px] xl:h-[auto]  
         w-[80%] xl:max-w-[800px] lg:max-h-[553px] flex flex-col justify-normal xl:justify-center relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-lg lg:text-xl font-medium leading-8 lg:leading-[40.8px] text-gray-400 mb-6 uppercase">
          вы можете проверить статус своего заказа
        </h2>
        {findOrder ? (
          <div className="flex justify-center">
            <table className=" xl:w-[80%] ">
              <thead
                className="border-0 xl:border-b border-gray-400 relative  
              :max-w-[400px]"
              >
                <tr
                  className="flex xl:*:min-w-[113px]  flex-col font-normal text-base text-gray-400 *:py-4  xl:flex xl:flex-row justify-between 
                 w-[280px] sm:w-[300px] md:w-[350px] xl:w-[600px] px-2"
                >
                  <th className="text-left xl:text-center  border-b xl:border-b-0 border-b-gray-400 ">
                    Номер
                  </th>
                  <th className="text-left xl:text-center     border-b xl:border-b-0 border-b-gray-400">
                    Дата
                  </th>
                  <th className="text-left xl:text-center       border-b xl:border-b-0 border-b-gray-400">
                    Статус
                  </th>
                  <th className="text-left xl:text-center     border-b xl:border-b-0 border-b-gray-400">
                    Сумма
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="*:py-4 xl:*:min-w-[113px]   flex flex-col left-[-2vw] top-[132px] sm:left-[5vw] sm:top-[132px] md:top-[105px] md:left-[22vw] text-right xl:text-left absolute xl:static  xl:flex-row justify-between w-[300px]  xl:w-[600px] px-2">
                  <td className="xl:text-center  text-sm text-gray-400 pl-[5px]">
                    {findOrder.number}
                  </td>
                  <td className="xl:text-center  text-sm text-gray-400 ">
                    {findOrder.date}
                  </td>
                  <td className=" xl:text-center  mt-[4px] xl:mt-0  ">
                    <p
                      className={`  inline-flex items-center justify-center gap-2 xl:px-2  rounded-full text-gray-400`}
                    >
                      <p
                        className={`w-1.5 h-1.5 rounded-full ${getColor(
                          findOrder.state
                        )}`}
                      />
                      {findOrder.state}
                    </p>
                  </td>
                  <td className="xl:text-center text-sm text-gray-400  mt-[3px] xl:mt-0">
                    {findOrder.order_amount} ₽
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-sm text-gray-400">
            <p>Заказ с номером {orderNum} не найден</p>
          </div>
        )}
      </div>
    </section>
  );
}
