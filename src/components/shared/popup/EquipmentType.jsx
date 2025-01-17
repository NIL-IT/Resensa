import React, { useRef, useState } from "react";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
const data = [
  { title: "СЕРИЯ RCN" },
  { title: "СЕРИЯ RCNICE" },
  { title: "СЕРИЯ RCLEAN" },
  { title: "СЕРИЯ RCDUCT" },
  { title: "СЕРИЯ RCOMP" },
  { title: "СЕРИЯ RECO " },
  { title: "СЕРИЯ RCROOF" },
  { title: "СЕРИЯ RPOOL" },
  { title: "СИСТЕМЫ RCONTRO" },
  { title: "ХОЛОД" },
  { title: "ТЕПЛООБМЕННИКИ" },
  { title: "СМЕСИТЕЛЬНЫЕ УЗЛЫ" },
];

export default function EquipmentType() {
  const ref = useRef(null);
  const [activeIndex, setIndex] = useState(null);
  const handleClick = (i) => setIndex(activeIndex === i ? null : i);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 ">
      <div className="flex-center justify-center w-full h-full">
        <div className="w-[1300px]">
          <Title
            text={"оборудование"}
            className="inline-block border-b border-gray-400 text-2xl font-normal p"
          />
          <Title text={"ВЫБЕРИТЕ ТИП ОБОРУДОВАНИЯ"} className="pt-10" />
          <p className="w-[735px] text-gray-900 text-xl pb-[40px] pt-6">
            Предварительные выводы неутешительны: сплочённость команды
            профессионалов обеспечивает широкому кругу (специалистов) участие в
            формировании поставленных обществом задач. Безусловно.
          </p>
          <div className="flex-center justify-between w-full">
            <div
              className={`overflow-hidden transition-all duration-500 relative`}
            >
              <div className="space-y-1">
                {data.map(({ title }, i) => (
                  <div
                    ref={ref}
                    onClick={() => handleClick(i)}
                    key={i}
                    className="group flex justify-between w-[300px] gap-[16px] px-2 py-2  hover:bg-gray-50 cursor-pointer"
                    style={{
                      height:
                        activeIndex === i
                          ? ref.current?.offsetHeight || 0
                          : "40px",
                    }}
                  >
                    <span className="text-gray-900 text-2xl uppercase">
                      {title}
                    </span>
                    <img
                      className={` w-[14px] transition-all duration-300 ${
                        activeIndex !== i ? "-rotate-90" : "rotate-0"
                      }`}
                      src="/icon/small_arrow.svg"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/img/type_img.png" alt="оборудование" />
              <div className="border-t border-gray-400 pt-4 mt-[65px] flex-center justify-between w-[742px]">
                <div>
                  <p>СЕРИЯ RCN</p>
                  <p>общепромышленное</p>
                </div>
                <div>
                  <p>от 1000 м3/ч</p>
                  <p>до 100 000 м3/ч</p>
                </div>
                <Button
                  icon={true}
                  href={"/product/1"}
                  text="подробнее"
                  iconWidth={"w-[30px]"}
                  className="py-[15px] pl-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
