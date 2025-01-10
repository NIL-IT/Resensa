import { useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import Select from "../ui/Select";

export default function Calculator() {
  const [calculationType, setCalculationType] = useState("byEquipment");
  const [airExchange, setAirExchange] = useState("2.0");
  const [area, setArea] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("99");

  const handleCalculate = () => {
    // Placeholder calculation logic
    // In a real application, you would implement the actual calculation here
    setResult("99");
  };

  return (
    <div className="container pt-[94px] h-[1220px]">
      <Title
        text={"калькулятор"}
        className="text-2xl border-b inline-block mb-10"
      />
      <div className="flex justify-center">
        <div className="w-[1160px] h-[709px]">
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
            <div className="">
              <div>
                <h2 className="font-medium">РАСЧЕТ</h2>
                <div className="mb-[52px] mt-[24px]">
                  <div className="flex items-center gap-2 mb-[14px] ">
                    <input
                      type="radio"
                      id="byPeople"
                      name="calculationType"
                      value="byPeople"
                      checked={calculationType === "byPeople"}
                      onChange={(e) => setCalculationType(e.target.value)}
                    />
                    <label htmlFor="byPeople">По количеству людей</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="byEquipment"
                      name="calculationType"
                      value="byEquipment"
                      checked={calculationType === "byEquipment"}
                      onChange={(e) => setCalculationType(e.target.value)}
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
                    <Select />
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
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-[115px] border border-gray-400 p-2 text-gray-700"
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
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-[115px] border border-gray-400  p-2 text-gray-700"
                    />
                  </div>
                </div>

                <div className="flex border-t border-gray-400 justify-between mb-[45px] mt-[50px] pt-[30px]">
                  <div className="font-medium mb-1 w-[60%]">
                    ПРОИЗВОДИТЕЛЬНОСТЬ ПО КРАТНОСТИ
                  </div>
                  <div className="text-xl">{result} М³/Ч</div>
                </div>

                <Button
                  text={"ОФОРМИТЬ ЗАКАЗ"}
                  onClick={handleCalculate}
                  icon={true}
                  className="w-[257px] text-white py-[17px] text-sm pl-[33px]"
                />
              </div>
            </div>

            <div className="w-[672px]">
              <img
                src="/img/calc.svg"
                alt="Industrial HVAC Equipment"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
