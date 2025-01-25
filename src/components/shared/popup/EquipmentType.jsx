import React, { useEffect, useRef, useState } from "react";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeItemId,
  changeRoutingToOrders,
} from "../../../utils/slice/userSlice";

export default function EquipmentType() {
  const ref = useRef(null);
  const { result, equipment } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  function findItemWithLowestMinParam(array, targetNumber) {
    // Filter items where the number falls between min_param and max_param
    const filteredItems = array.filter(
      (item) => targetNumber >= item.min_param && targetNumber <= item.max_param
    );

    // If no items match the criteria, return null
    if (filteredItems.length === 0) {
      return null;
    }

    // Sort by min_param in ascending order
    const sortedItems = filteredItems.sort((a, b) => a.min_param - b.min_param);

    // Return the id of the first item (lowest min_param)
    return sortedItems[0].id;
  }
  const [activeIndex, setIndex] = useState(
    findItemWithLowestMinParam(equipment, result)
  );
  useEffect(() => {
    if (findItemWithLowestMinParam(equipment, result)) {
      setIndex(findItemWithLowestMinParam(equipment, result));
    } else {
      setIndex(equipment[0].id);
    }
  }, [result, equipment]);
  const handleClick = (id) => setIndex(activeIndex === id ? null : id);
  const findImage = () => {
    if (!activeIndex) return "/img/placeholder.svg";
    console.log(equipment, activeIndex);
    const img = equipment.find(({ id }) => id === activeIndex);
    return img ? img : null;
  };
  const handleClickButton = (id) => {
    dispatch(changeRoutingToOrders(false));
    dispatch(changeItemId(id));
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-scroll">
      <div className="mt-14 md:mt-0 flex-center justify-center w-full px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 mb-10 lg:mb-20">
        <div className="w-full max-w-[300px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1300px] pt-10 xs:pt-12 sm:pt-14 md:pt-16 lg:pt-18 xl:pt-20">
          <Title
            text={"оборудование"}
            className="inline-block border-b border-gray-400 text-lg xs:text-xl sm:text-2xl font-normal"
          />
          <Title
            text={"ВЫБЕРИТЕ ТИП ОБОРУДОВАНИЯ"}
            className="pt-6 xs:pt-7 sm:pt-8 md:pt-9 lg:pt-10"
          />
          <p className="w-full md:w-[500px] lg:w-[600px] xl:w-[735px] text-gray-900 text-base xs:text-lg sm:text-xl pb-[20px] xs:pb-[25px] sm:pb-[30px] md:pb-[35px] lg:pb-[40px] pt-4 xs:pt-5 sm:pt-6">
            Предварительные выводы неутешительны: сплочённость команды
            профессионалов обеспечивает широкому кругу (специалистов) участие в
            формировании поставленных обществом задач. Безусловно.
          </p>
          <div className="flex flex-col  xl:items-start xl:flex-row xl:justify-between w-full gap-8 lg:gap-10">
            <div
              className={`overflow-hidden transition-all duration-500 relative`}
            >
              <div className="space-y-1 pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-20">
                {equipment.map(
                  ({ name, description, min_param, max_param, id }) => (
                    <div
                      ref={ref}
                      onClick={() => handleClick(id)}
                      key={id}
                      className="flex flex-col w-full xs:w-[320px] sm:w-[350px] md:w-[375px] lg:w-[320px] xl:w-[320px] 2xl:w-[400px]
                       hover:bg-gray-50 cursor-pointer overflow-hidden"
                    >
                      <div
                        className={`flex justify-between items-center px-1 py-2 ${
                          activeIndex === id ? "bg-gray-50" : ""
                        }`}
                      >
                        <span
                          className={`text-gray-900 text-base xs:text-lg sm:text-xl md:text-2xl uppercase`}
                        >
                          {name}
                        </span>
                        <img
                          className={`w-[14px] transition-all duration-300 ${
                            activeIndex !== id ? "-rotate-90" : "rotate-0"
                          }`}
                          src="/icon/small_arrow.svg"
                          alt=""
                        />
                      </div>
                      <div
                        className={`transition-all duration-300 ease-in-out bg-gray-50 rounded px-4
                        ${
                          activeIndex === id
                            ? "max-h-[500px] opacity-100 py-4 mb-2 translate-y-0"
                            : "max-h-0 opacity-0 py-0 -translate-y-2"
                        }`}
                      >
                        <p className="text-gray-700 mb-2">{description}</p>
                        <p className="text-gray-600 mb-2">
                          Минимальный параметр: {min_param} М³/ч
                        </p>
                        <p className="text-gray-600 mb-2">
                          Максимальный параметр: {max_param} М³/ч
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className=" h-[300px] lg:h-[337px] flex-center justify-center ">
                <img
                  src={findImage().image_card || "/img/placeholder.svg"}
                  alt="оборудование"
                  className="w-full 
                max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 
                2xl:max-w-[570px] max-h-[337px] object-contain"
                />
              </div>
              <div
                className="w-[742px] border-t border-gray-400 pt-2 xs:pt-3 
              sm:pt-4 mt-[30px] xs:mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[65px] 
              flex-col lg:flex-row flex-center gap-4 lg:gap-0 lg:justify-between  
              max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[742px]"
              >
                <div className="text-center lg:text-left">
                  <p className="text-base xs:text-lg sm:text-xl">
                    {findImage().name}
                  </p>
                  <p className="text-sm xs:text-base">общепромышленное</p>
                </div>
                <div className="text-center">
                  <p className="text-base xs:text-lg sm:text-xl">
                    от {findImage().min_param} м3/ч
                  </p>
                  <p className="text-sm xs:text-base">
                    до {findImage().max_param} м3/ч
                  </p>
                </div>
                <Button
                  onClick={() => handleClickButton(findImage().id)}
                  icon={true}
                  href={`/product/${findImage().id}`}
                  text="подробнее"
                  iconWidth={"w-[20px] xs:w-[25px] sm:w-[30px]"}
                  className="text-sm py-4   lg:pr-6 lg:pl-4 xl:pr-8 xl:pl-5  xs:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
