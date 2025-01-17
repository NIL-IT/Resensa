import { useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import Select from "../ui/Select";
import EquipmentType from "./popup/EquipmentType";
const options = [
  { label: "1.0", value: "1.0" },
  { label: "2.0", value: "2.0" },
  { label: "3.0", value: "3.0" },
];

export default function Calculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [formData, setFormData] = useState({
    calculationType: "byEquipment",
    multiplicity: "",
    square: "",
    count: "",
  });
  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      multiplicity: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      calculationType: "byEquipment",
      multiplicity: "",
      square: "",
      count: "",
    });
    setIsCalculated(true);
  };
  return (
    <div className="container pt-[94px] pb-[94px] h-[1320px]">
      {isCalculated && <EquipmentType />}
      <Title
        text={"калькулятор"}
        className="text-2xl border-b inline-block mb-10"
      />
      <div className="flex justify-center">
        <div className="w-[1160px] h-[709px] ">
          <div>
            <Title
              className="font-light text-gray-500"
              text={
                "РАССЧИТАЙТЕ ПРОИЗВОДИТЕЛЬНОСТЬ ОБОРУДОВАНИЯ САМОСТОЯТЕЛЬНО"
              }
            />

            <p className="text-gray-300 text-xl w-[735px] mt-[30px] mb-20">
              Предварительные выводы неутешительны: сплоченность команды
              профессионалов обеспечивает широкому кругу (специалистов) участие
              в формировании поставленных обществом задач. Безусловно.
            </p>
          </div>
          <div className="flex justify-between gap-10 max-h-[709px]">
            <form onSubmit={handleSubmit}>
              <div>
                <h2 className="font-medium">РАСЧЕТ</h2>
                <div className="mb-[52px] mt-[24px]">
                  <div className="flex items-center gap-2 mb-[14px] ">
                    <input
                      type="radio"
                      id="byPeople"
                      name="calculationType"
                      value={"byPeople"}
                      checked={formData.calculationType === "byPeople"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="byPeople">По количеству людей</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="byEquipment"
                      value={"byEquipment"}
                      name="calculationType"
                      checked={formData.calculationType === "byEquipment"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="byEquipment">
                      По площади воздухообмена
                    </label>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className=" text-gray-600 font-normal text-xl uppercase ">
                      кратность воздухообмена
                    </span>
                    <Select
                      handleSelectChange={handleSelectChange}
                      options={options}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="area"
                      className="block mb-[13px] text-gray-600 font-normal text-xl"
                    >
                      ПЛОЩАДЬ ПОМЕЩЕНИЯ, М²
                    </label>
                    <input
                      type="number"
                      id="area"
                      name="square"
                      value={formData.square}
                      onChange={handleInputChange}
                      className="w-[115px] border border-gray-400 p-2 text-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="height"
                      className="block mb-[13px] text-gray-600 font-normal text-xl"
                    >
                      ВЫСОТА ПОТОЛКА, М
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="count"
                      value={formData.count}
                      onChange={handleInputChange}
                      className="w-[115px] border border-gray-400  p-2 text-gray-700"
                      required
                    />
                  </div>
                </div>

                <div className="flex border-t border-gray-400 justify-between mb-[45px] mt-[50px] pt-[30px]">
                  <div className="font-medium mb-1 w-[60%]">
                    ПРОИЗВОДИТЕЛЬНОСТЬ ПО КРАТНОСТИ
                  </div>
                  <div className="text-xl">99 М³/Ч</div>
                </div>
                {/* <button
                  className="w-[257px] text-white py-[17px] text-sm pl-[33px] "
                  onSubmit={handleSubmit}
                >
                  оформить заказ
                </button> */}
                <button
                  className="group bg-gray-400 text-white 
                font-normal  px-[30px]  uppercase 
                flex-center gap-5 w-[257px]  py-[17px] text-sm pl-[33px]"
                >
                  <img
                    className="group-hover:translate-x-1 transition-all"
                    src="/icon/arrow.svg"
                    alt="arrow"
                  />
                  оформить заказ
                </button>
              </div>
            </form>

            <div className="w-[672px] ">
              <img
                src="/img/calc.svg"
                alt="Industrial HVAC Equipment"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
