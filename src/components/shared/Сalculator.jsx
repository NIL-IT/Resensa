import { useState } from "react";
import Title from "../ui/Title";
import EquipmentType from "./popup/EquipmentType";
import { useDispatch } from "react-redux";
import { changeCalcPopup, changeResult } from "../../utils/slice/userSlice";

export default function Calculator() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    square: "",
    count: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isCalculated = formData.square * formData.count;
    dispatch(changeResult(isCalculated));
    dispatch(changeCalcPopup(true));
    setFormData({
      square: "",
      count: "",
    });
  };

  return (
    <section
      className="pl-5 pr-5 xs:pl-0 xs:pr-0 container 
    pt-[50px] xs:pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[85px] xl:pt-[90px] 2xl:pt-[92px]
     3xl:pt-[94px] 
     pb-[50px] xs:pb-[60px] sm:pb-[70px] md:pb-[80px] lg:pb-[85px] xl:pb-[90px] 2xl:pb-[92px] 
     3xl:pb-[94px] h-[1150px]
     min-h-[1250px] xs:min-h-[1400px] sm:min-h-[1500px] 
     md:min-h-[1660px] lg:min-h-[1200px] 
     xl:min-h-[1250px] 2xl:min-h-[1280px] 3xl:min-h-[1320px]"
    >
      <Title
        text={"калькулятор"}
        className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b inline-block mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"
      />
      <div className="flex justify-center">
        <div className="w-full xs:w-full sm:w-full md:w-[800px] lg:w-[720px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1160px] min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[675px] xl:min-h-[690px] 2xl:min-h-[700px] 3xl:min-h-[709px]">
          <h2 className="mb-20 font-light text-gray-500 text-2xl xs:text-[30px] xs:leading-[40px] md:text-[48px] md:leading-[61px] ">
            РАССЧИТАЙТЕ ПРОИЗВОДИТЕЛЬНОСТЬ ОБОРУДОВАНИЯ САМОСТОЯТЕЛЬНО
          </h2>

          <div className="flex flex-col lg:flex-row justify-between gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 max-h-[500px] xs:max-h-[550px] sm:max-h-[600px] md:max-h-[650px] lg:max-h-[675px] xl:max-h-[690px] 2xl:max-h-[700px] 3xl:max-h-[709px]">
            <form
              className="2xl:h-[685px] 3xl:h-[709px] flex flex-col justify-between "
              onSubmit={handleSubmit}
            >
              <div>
                <h3 className="font-normal text-xl uppercase mb-10 text-gray-400">
                  расчет по площади воздухообмена
                </h3>

                <div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <label
                        htmlFor="area"
                        className="block mb-[8px] xs:mb-[9px] sm:mb-[10px] md:mb-[11px] lg:mb-[12px] xl:mb-[12px] 2xl:mb-[12px] 3xl:mb-[13px] text-gray-600 font-normal text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl"
                      >
                        ПЛОЩАДЬ ПОМЕЩЕНИЯ, М²
                      </label>
                      <input
                        type="number"
                        id="area"
                        name="square"
                        value={formData.square}
                        onChange={handleInputChange}
                        className="w-[90px] xs:w-[95px] sm:w-[100px] md:w-[105px] lg:w-[110px] xl:w-[112px] 2xl:w-[113px] 3xl:w-[115px] border border-gray-400 p-1.5 xs:p-1.5 sm:p-2 text-gray-700"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="height"
                        className="block mb-[8px] xs:mb-[9px] sm:mb-[10px] md:mb-[11px] lg:mb-[12px] xl:mb-[12px] 2xl:mb-[12px] 3xl:mb-[13px] text-gray-600 font-normal text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl"
                      >
                        ВЫСОТА ПОТОЛКА, М
                      </label>
                      <input
                        type="number"
                        id="height"
                        name="count"
                        value={formData.count}
                        onChange={handleInputChange}
                        className="w-[90px] xs:w-[95px] sm:w-[100px] md:w-[105px] lg:w-[110px] xl:w-[112px] 2xl:w-[113px] 3xl:w-[115px] border border-gray-400 p-1.5 xs:p-1.5 sm:p-2 text-gray-700"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex border-t border-gray-400 justify-between mb-[25px] xs:mb-[30px] sm:mb-[35px] md:mb-[38px] lg:mb-[40px] xl:mb-[42px] 2xl:mb-[43px] 3xl:mb-[45px] mt-[30px] xs:mt-[35px] sm:mt-[40px] md:mt-[43px] lg:mt-[45px] xl:mt-[47px] 2xl:mt-[48px] 3xl:mt-[50px] pt-[20px] xs:pt-[22px] sm:pt-[24px] md:pt-[26px] lg:pt-[28px] xl:pt-[29px] 2xl:pt-[29px] 3xl:pt-[30px]">
                  <h4 className="font-medium mb-1 w-[60%]">
                    ПРОИЗВОДИТЕЛЬНОСТЬ ПО КРАТНОСТИ
                  </h4>
                  <p className="text-xl">99 М³/Ч</p>
                </div>
              </div>

              <button
                className="group  bg-gray-400 text-white 
              font-normal px-[20px] xs:px-[22px] sm:px-[25px] md:px-[27px]
               lg:px-[28px] xl:px-[29px] 2xl:px-[29px] 3xl:px-[30px] uppercase 
               flex-center justify-center 
               gap-3 xs:gap-4 sm:gap-5 xl:gap-10
               w-[200px] xs:w-[215px] sm:w-[225px] md:w-[235px] lg:w-[245px]
                xl:w-[250px] 2xl:w-[253px] 3xl:w-[257px] py-[12px] xs:py-[13px] 
                sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[16px] 2xl:py-[16px] 
                3xl:py-[17px] text-xs xs:text-sm sm:text-sm pl-[25px] xs:pl-[27px] 
                sm:pl-[29px] md:pl-[30px] lg:pl-[31px] xl:pl-[32px] 2xl:pl-[32px] 
                3xl:pl-[33px]"
              >
                <img
                  className="group-hover:translate-x-1 transition-all"
                  src="/icon/arrow.svg"
                  alt="arrow"
                />
                рассчитать
              </button>
            </form>

            <div className="w-full xs:w-full sm:w-full md:w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[650px] 3xl:w-[672px]">
              <img
                src="/img/calc.svg"
                alt="Industrial HVAC Equipment"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
