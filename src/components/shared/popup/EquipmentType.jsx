import React, { useEffect, useRef, useState } from "react";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCalcPopup,
  changeItemId,
  changeRoutingToOrders,
  changeShowPopup,
  getEquipmentById,
} from "../../../utils/slice/userSlice";

export default function EquipmentType() {
  const ref = useRef(null);
  const { result, equipment } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  document.body.style.overflow = "hidden";
  function findItemWithLowestMinParam(array, targetNumber) {
    // Input validation
    if (
      !array?.length ||
      typeof targetNumber !== "number" ||
      isNaN(targetNumber)
    ) {
      return null;
    }

    try {
      // Filter valid items where number is in range
      const filteredItems = array.filter((item) => {
        const min = Number(item.min_param);
        const max = Number(item.max_param);

        // Skip invalid items
        if (
          isNaN(min) ||
          isNaN(max) ||
          min === undefined ||
          max === undefined
        ) {
          return false;
        }

        return targetNumber >= min && targetNumber <= max;
      });

      // Return null if no matches found
      if (!filteredItems.length) {
        return null;
      }

      // If only one item matches, return its id
      if (filteredItems.length === 1) {
        return filteredItems[0].id;
      }

      // Sort by min_param and return id of item with lowest min_param
      const sortedItems = [...filteredItems].sort((a, b) => {
        const minA = Number(a.min_param);
        const minB = Number(b.min_param);
        return minA - minB;
      });

      return sortedItems[0].id;
    } catch (error) {
      console.error("Error in findItemWithLowestMinParam:", error);
      return null;
    }
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
    const img = equipment.find(({ id }) => id === activeIndex);
    return img ? img : null;
  };
  const handleClickButton = async (id) => {
    await dispatch(getEquipmentById(id));
    dispatch(changeRoutingToOrders(false));
    dispatch(changeItemId(id));
    dispatch(changeCalcPopup(false));
    dispatch(changeShowPopup(true));
  };
  const handleClose = () => {
    dispatch(changeCalcPopup(false));
  };
  return (
    <section className="min-h-[90%] min-w-[90%] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll">
      <div className=" bg-white pt-2 xs:pt-3 sm:pt-4  rounded-lg min-w-[100%] min-h-[90vh]  relative  ">
        <div className="sticky z-50 flex-center top-0 left-0 bg-white ">
          <div className="w-full  ">
            <button
              onClick={() => handleClose()}
              className=" text-xl absolute top-2 right-4 text-gray-500  hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
        <div
          className="overflow-y-scroll h-full mt-14 md:mt-0 flex-center justify-center w-full 
   px-4 mb-10 lg:mb-20"
        >
          <div
            className="w-full max-w-[300px] xs:max-w-[400px] 
        sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] 
        xl:max-w-[1200px] 2xl:max-w-[1300px]  pt-0 
         md:pt-16 lg:pt-18 xl:pt-10 xl:pb-10"
          >
            <Title
              text={"оборудование"}
              className=" pt-0 xs:pt-5 inline-block border-b border-gray-400 text-lg xs:text-xl sm:text-2xl font-normal"
            />
            <Title
              text={"ВЫБЕРИТЕ ТИП ОБОРУДОВАНИЯ"}
              className="pt-6 xs:pt-7 sm:pt-8 md:pt-9 lg:pt-10 text-4xl leading-[40px] lg:text-[48px] lg:leading-[61px]"
            />
            <p className="w-full md:w-[500px] lg:w-[600px] xl:w-[735px] text-gray-900 text-base xs:text-lg sm:text-xl pb-[20px] xs:pb-[25px] sm:pb-[30px] md:pb-[35px] lg:pb-[40px] pt-4 xs:pt-5 sm:pt-6">
              Предварительные выводы неутешительны: сплочённость команды
              профессионалов обеспечивает широкому кругу (специалистов) участие
              в формировании поставленных обществом задач. Безусловно.
            </p>
            <div className="flex flex-col  xl:items-start xl:flex-row xl:justify-between w-full gap-8 lg:gap-10">
              <div
                className={`overflow-scroll transition-all duration-500 relative`}
              >
                <div
                  className={`space-y-1 pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-0 xl:pb-20 h-[500px]  xl:h-[600px]`}
                >
                  {equipment.map(
                    ({ name, description, min_param, max_param, id }) => (
                      <div
                        ref={ref}
                        onClick={() => handleClick(id)}
                        key={id}
                        className="flex flex-col w-full xs:w-[320px] sm:w-[350px] md:w-[375px] lg:w-[500px] xl:w-[320px] 2xl:w-[400px]
                       hover:bg-gray-50 cursor-pointer "
                      >
                        <div
                          className={`flex justify-between items-center px-1 py-2 ${
                            activeIndex === id ? "bg-gray-50" : ""
                          }`}
                        >
                          <p
                            className={`text-gray-900 text-base xs:text-lg sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl uppercase`}
                          >
                            {name}
                          </p>
                          <img
                            className={`w-[14px] transition-all duration-300 ${
                              activeIndex !== id ? "-rotate-90" : "rotate-0"
                            }`}
                            src="/icon/small_arrow.svg"
                            alt=""
                          />
                        </div>
                        <div
                          className={`transition-all overflow-hidden duration-300 ease-in-out bg-gray-50 rounded px-4
                        ${
                          activeIndex === id
                            ? "max-h-[500px] opacity-100 py-4 mb-2 translate-y-0"
                            : "max-h-0 opacity-0 py-0 -translate-y-2"
                        }`}
                        >
                          <p className={`text-gray-700 mb-2 `}>{description}</p>
                          <p className={`text-gray-700 mb-2 `}>
                            Минимальный параметр: {min_param} М³/ч
                          </p>
                          <p className={`text-gray-700 mb-2 `}>
                            Максимальный параметр: {max_param} М³/ч
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className=" h-[300px] lg:h-[400px] flex-center justify-center ">
                  <img
                    src={
                      findImage().image_card ||
                      equipment[0].image_card ||
                      "/img/placeholder.svg"
                    }
                    alt="оборудование"
                    className="w-full 
                max-w-[300px] lg:max-w-[400px] xl:max-w-[550px] 
                2xl:max-w-[570px] max-h-[337px] object-contain"
                  />
                </div>
                <div
                  className="w-[742px] border-t border-gray-400 pt-2 xs:pt-3 
              sm:pt-4 mt-[30px] xs:mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[25px] 
              flex-col 2xl:flex-row  items-center 2xl:flex-center  xl:gap-4 gap-4  lg:justify-between  
              max-w-[320px] sm:max-w-[350px] lg:max-w-[600px] xl:max-w-[530px] 2xl:max-w-[680px] 3xl:max-w-[742px] mb-10 xl:mb-0 "
                >
                  <div className="flex flex-row xl:w-[100%]  2xl:w-[55%] justify-between mb-5 2xl:mb-0">
                    <div className="text-center lg:text-left">
                      <p className="text-left text-base xs:text-lg sm:text-xl uppercase">
                        {findImage().name || equipment[0].name}
                      </p>
                      <p className="text-left text-sm xs:text-base xl:max-w-[400px] 2xl:max-w-[200px] 3xl:max-w-auto uppercase">
                        {findImage().sub_header || equipment[0].sub_header}
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-base xs:text-lg sm:text-xl lg:text-base 2xl:text-xl">
                        от {findImage().min_param || equipment[0].min_param}{" "}
                        м3/ч
                      </p>
                      <p className="text-sm xs:text-base">
                        до {findImage().max_param || equipment[0].max_param}{" "}
                        м3/ч
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleClickButton(findImage().id)}
                    icon={true}
                    text="оформить заказ"
                    iconWidth={"w-[20px] xs:w-[25px] sm:w-[30px]"}
                    className="text-sm py-4   lg:pr-6 lg:pl-4 2xl:pr-8 2xl:pl-5 lg:text-sm  2xl:text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
