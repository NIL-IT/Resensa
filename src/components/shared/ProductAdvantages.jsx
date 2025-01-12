import React, { useRef, useState } from "react";
import Title from "../ui/Title";
import { Tetrahedron } from "@react-three/drei";
const list = [
  {
    title: "УДОБСТВО В ОБСЛУИВАНИИ",
    text: [
      "Используется усиленная и долговечная фурнитура для секций с обслуживаемыми дверцами.",
      "Используется усиленная и долговечная фурнитура для секций с обслуживаемыми дверцами.",
      "Используется усиленная и долговечная фурнитура для секций с обслуживаемыми дверцами.",
    ],
  },
  {
    title: "ПРИМЕНЕНИЕ СПЕЦИАЛЬНЫХ ТЕПЛООБМЕННИКОВ",
    text: [
      "Эпоксидирование деталей установок для агрессивных сред.",
      "Эпоксидирование деталей установок для агрессивных сред.",
      "Эпоксидирование деталей установок для агрессивных сред.",
    ],
  },
  {
    title: "ЭФФЕКТИВНОСТЬ ЭКСПЛУАТАЦИИ",
    text: [
      "Заслонки с периметральным греющим кабелем или ТЭНами. Оси лопаток клапана имеют латунные втулки скольжения.",
      "Заслонки с периметральным греющим кабелем или ТЭНами. Оси лопаток клапана имеют латунные втулки скольжения.",
      "Заслонки с периметральным греющим кабелем или ТЭНами. Оси лопаток клапана имеют латунные втулки скольжения.",
    ],
  },
  {
    title: "СЕРТИФИКАЦИЯ ОБОРУДОВАНИЯ",
    text: [
      "С каждой установкой выдается акт испытаний в аккредитованной лаборатории.",
      "С каждой установкой выдается акт испытаний в аккредитованной лаборатории.",
      "С каждой установкой выдается акт испытаний в аккредитованной лаборатории.",
    ],
  },
  {
    title: "ЭНЕРГОСБЕРЕГАЮЩИЕ ТЕХНОЛОГИИ",
    text: [
      "Применение ЕС технологий, рекуператоров и тепловых насосов - гарантия экономии при эксплуатации.",
      "Применение ЕС технологий, рекуператоров и тепловых насосов - гарантия экономии при эксплуатации.",
      "Применение ЕС технологий, рекуператоров и тепловых насосов - гарантия экономии при эксплуатации.",
    ],
  },
  {
    title: "ШИРОКИЕ ВОЗМОЖНОСТИ РАЗМЕЩЕНИЯ",
    text: [
      "Элементы автоматики и управляющие механизмы устанавливаются с учетом норм и правил размещения электротехнического оборудования.",
      "Элементы автоматики и управляющие механизмы устанавливаются с учетом норм и правил размещения электротехнического оборудования.",
      "Элементы автоматики и управляющие механизмы устанавливаются с учетом норм и правил размещения электротехнического оборудования.",
    ],
  },
  {
    title: "КАРКАСНО-ПАНЕЛЬНАЯ КОНСТРУКЦИЯ",
    text: [
      "Возможно изготовление каркаса из сварного профиля.",
      "Возможно изготовление каркаса из сварного профиля..",
      "Возможно изготовление каркаса из сварного профиля.",
    ],
  },
];
export default function ProductAdvantages() {
  const ref = useRef(null);
  const [activeIndex, setIndex] = useState(null);
  const handleClick = (i) => setIndex(activeIndex === i ? null : i);
  return (
    <div className="container pt-[111px]">
      <Title
        text={"преимущества продукции завода"}
        className="w-full text-2xl font-normal mb-[181px] "
      />
      <div className=" flex justify-center">
        <div className="w-[1160px]">
          {list.map(({ title, text }, i) => (
            <div
              key={i}
              className="border-t border-t-gray-400 py-10  *:transition-all w-full"
            >
              <div
                className="flex-center justify-between cursor-pointer"
                onClick={() => handleClick(i)}
              >
                <span className="text-2xl font-normal text-gray-250">
                  0{i + 1}
                </span>
                <Title
                  text={title}
                  className="text-2xl font-normal text-gray-600 w-[485px]"
                />
                <div>
                  <img
                    className={` transition-all duration-300 ${
                      activeIndex !== i ? "-rotate-90" : ""
                    }`}
                    src="/icon/arrow_black.svg"
                    alt="arrow"
                  />
                </div>
              </div>
              <div
                className={`mt-5 overflow-hidden transition-all duration-500 relative`}
                style={{
                  height:
                    activeIndex === i ? ref.current?.offsetHeight || 0 : "50px",
                }}
              >
                <div
                  className={`${
                    activeIndex === i ? "opacity-0" : "opacity-80"
                  } absolute w-[500px] bg-white h-[200px] blur-md top-[14px]  right-[350px] transition-all duration-500 ease-in-out `}
                ></div>

                <div ref={ref} className="w-[761px] ml-[334px]">
                  {text.map((el, i) => (
                    <p key={i} className=" text-base  text-gray-900  h-[62px] ">
                      {el}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
