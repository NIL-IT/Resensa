import React, { useRef, useState } from "react";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
const navList = [
  {
    title: "СЕРИЯ RCN",
    description:
      "Общепромышленные установки для вентиляции и кондиционирования",
    capacity: "1000-100000 м³/ч",
    features: [
      "Высокая энергоэффективность",
      "Компактные размеры",
      "Низкий уровень шума",
    ],
  },
  {
    title: "СЕРИЯ RCNICE",
    description: "Специализированные установки для чистых помещений",
    capacity: "500-50000 м³/ч",
    features: [
      "Высокая степень фильтрации",
      "Прецизионное управление",
      "Антибактериальное покрытие",
    ],
  },
  {
    title: "СЕРИЯ RCLEAN",
    description: "Установки для медицинских учреждений",
    capacity: "800-80000 м³/ч",
    features: [
      "Медицинское исполнение",
      "HEPA-фильтрация",
      "Дезинфекция воздуха",
    ],
  },
  {
    title: "СЕРИЯ RCDUCT",
    description: "Канальные установки обработки воздуха",
    capacity: "500-25000 м³/ч",
    features: [
      "Компактный монтаж",
      "Простое обслуживание",
      "Гибкая конфигурация",
    ],
  },
  {
    title: "СЕРИЯ RCOMP",
    description: "Компактные вентиляционные установки",
    capacity: "300-15000 м³/ч",
    features: [
      "Минимальные размеры",
      "Быстрый монтаж",
      "Встроенная автоматика",
    ],
  },
  {
    title: "СЕРИЯ RECO",
    description: "Энергоэффективные установки с рекуперацией",
    capacity: "500-50000 м³/ч",
    features: [
      "Высокий КПД рекуперации",
      "Экономия энергии",
      "Всесезонная работа",
    ],
  },
  {
    title: "СЕРИЯ RCROOF",
    description: "Крышные вентиляционные установки",
    capacity: "1000-60000 м³/ч",
    features: ["Наружное исполнение", "Встроенная защита", "Простой монтаж"],
  },
  {
    title: "СЕРИЯ RPOOL",
    description: "Установки для бассейнов и аквапарков",
    capacity: "2000-40000 м³/ч",
    features: ["Осушение воздуха", "Защита от коррозии", "Рекуперация тепла"],
  },
];

export default function EquipmentType() {
  const ref = useRef(null);

  const { data } = useSelector(({ user }) => user);

  const [activeIndex, setIndex] = useState(0);

  const combinedData = [...data.equipment.items, ...data.solutions.items];
  const dataIncludes = combinedData.filter((item) =>
    item.name.toString().toLowerCase().includes(navList[0].title.toLowerCase())
  );
  console.log(dataIncludes);
  const handleClick = (i) => setIndex(activeIndex === i ? null : i);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-scroll">
      <div className="flex-center justify-center w-full px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8">
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
          <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-10">
            <div
              className={`overflow-hidden transition-all duration-500 relative`}
            >
              <div className="space-y-1 pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-20">
                {navList.map(
                  ({ title, description, capacity, features }, i) => (
                    <div
                      ref={ref}
                      onClick={() => handleClick(i)}
                      key={i}
                      className="flex flex-col w-full xs:w-[300px] sm:w-[350px] md:w-[375px] lg:w-[400px]
                       hover:bg-gray-50 cursor-pointer overflow-hidden"
                    >
                      <div
                        className={`flex justify-between items-center px-1 py-2 ${
                          activeIndex === i ? "bg-gray-50" : ""
                        }`}
                      >
                        <span
                          className={`text-gray-900 text-base xs:text-lg sm:text-xl md:text-2xl uppercase`}
                        >
                          {title}
                        </span>
                        <img
                          className={`w-[14px] transition-all duration-300 ${
                            activeIndex !== i ? "-rotate-90" : "rotate-0"
                          }`}
                          src="/icon/small_arrow.svg"
                          alt=""
                        />
                      </div>
                      <div
                        className={`transition-all duration-300 ease-in-out bg-gray-50 rounded px-4
                        ${
                          activeIndex === i
                            ? "max-h-[500px] opacity-100 py-4 mb-2 translate-y-0"
                            : "max-h-0 opacity-0 py-0 -translate-y-2"
                        }`}
                      >
                        <p className="text-gray-700 mb-2">{description}</p>
                        <p className="text-gray-600 mb-2">
                          Производительность: {capacity}
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                          {features.map((feature, idx) => (
                            <li key={idx} className="text-sm">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/img/type_img.png"
                alt="оборудование"
                className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[742px] h-auto"
              />
              <div className="border-t border-gray-400 pt-2 xs:pt-3 sm:pt-4 mt-[30px] xs:mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[65px] flex-col lg:flex-row flex-center gap-4 lg:gap-0 lg:justify-between w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[742px]">
                <div className="text-center lg:text-left">
                  <p className="text-base xs:text-lg sm:text-xl">СЕРИЯ RCN</p>
                  <p className="text-sm xs:text-base">общепромышленное</p>
                </div>
                <div className="text-center">
                  <p className="text-base xs:text-lg sm:text-xl">
                    от 1000 м3/ч
                  </p>
                  <p className="text-sm xs:text-base">до 100 000 м3/ч</p>
                </div>
                <Button
                  icon={true}
                  href={"/product/1"}
                  text="подробнее"
                  iconWidth={"w-[20px] xs:w-[25px] sm:w-[30px]"}
                  className="py-[10px] xs:py-[12px] sm:py-[15px] pl-3 xs:pl-4 sm:pl-5 text-sm xs:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
