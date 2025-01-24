import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowStatus, getAllOrders } from "../../../utils/slice/userSlice";

export default function StatusPopup() {
  const dispatch = useDispatch();
  const { orderNum, orders } = useSelector(({ user }) => user);
  const [isOpen, setIsOpen] = useState(true);
  const [findOrder, setFindOrder] = useState(null);
  const [updateOrder, setUpdateOrder] = useState();
  const [loading, setLoading] = useState(true);

  document.body.style.overflowY = "hidden";

  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(getAllOrders());
        setUpdateOrder(data.payload);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
    setLoading(true);
  }, []);
  useEffect(() => {
    if (!updateOrder) return;
    if (updateOrder.length > 0 && orderNum) {
      setFindOrder(updateOrder.find((order) => +order.number === +orderNum));
    }
  }, [setUpdateOrder, updateOrder]);
  useEffect(() => {
    dispatch(changeShowStatus(isOpen));
  }, [isOpen]);
  console.log(findOrder);
  const getColor = (state) => {
    const toLowerCase = state.toLowerCase();
    if (toLowerCase == "отменен") return "bg-red";
    if (toLowerCase == "доставлен") return "bg-green";
    if (toLowerCase == "оплачен") return "bg-blue";
    return "bg-gray-400";
  };

  return (
    <div className="max-w-[100vw] max-h-[100vh] fixed inset-0  z-50 flex items-center justify-center">
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
                  className="flex  flex-col font-normal text-base text-gray-400 *:py-4  xl:flex xl:flex-row justify-between 
                 w-[280px] sm:w-[300px] md:w-[350px] xl:w-[600px] px-2"
                >
                  <th className="text-left  border-b xl:border-b-0 border-b-gray-400 ">
                    Номер
                  </th>
                  <th className="text-left  xl:mr-10  border-b xl:border-b-0 border-b-gray-400">
                    Дата
                  </th>
                  <th className="text-left   xl:mr-6  border-b xl:border-b-0 border-b-gray-400">
                    Статус
                  </th>
                  <th className="text-left  xl:mr-2  border-b xl:border-b-0 border-b-gray-400">
                    Сумма
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="*:py-4 flex flex-col left-[-2vw] top-[132px] sm:left-[5vw] sm:top-[132px] md:top-[105px] md:left-[22vw] text-right xl:text-left absolute xl:static  xl:flex-row justify-between w-[300px]  xl:w-[600px] px-2">
                  <td className="  text-sm text-gray-400 pl-[5px]">
                    {findOrder.number}
                  </td>
                  <td className=" text-sm text-gray-400 ">{findOrder.date}</td>
                  <td className="xl:pr-4 mt-[4px] xl:mt-0">
                    <span
                      className={`inline-flex items-center gap-2 xl:px-2  rounded-full text-gray-400`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${getColor(
                          findOrder.state
                        )}`}
                      />
                      {findOrder.state}
                    </span>
                  </td>
                  <td className=" text-sm text-gray-400 xl:mr-1 mt-[3px] xl:mt-0">
                    {findOrder.order_amount} ₽
                  </td>
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
