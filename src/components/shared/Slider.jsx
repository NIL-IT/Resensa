import { useState } from "react";
import Title from "../ui/Title";

export default function Slider() {
  const slides = [
    {
      image: "/img/slider_1.png",
      title: "МЫ ПРОИЗВОДИМ",
      description:
        "Энергоэффективное оборудование для вентиляции и кондиционирования воздуха, системы управления автоматикой и BMS. Оборудование произведенное ODM партнером под руководством Recensa, или доработанное специалистами из команды Recensa, благодаря нашей глубокой погруженности в каждое техническое задание, обладает уникальными характеристиками, и учитывает все предварительные пожелания клиента для успешной реализации проекта и рациональной, оптимальной эксплуатации объекта в целом.",
    },
    {
      image: "/img/slider_2.png",
      title: "В ПРОИЗВОДСТВЕ ИСПОЛЬЗУЕМ",
      description:
        "Используя принципы контрактного производства, Recensa может предложить конечному потребителю широкий выбор комплектующих, как отечественных заводов, так и от заводов размещенных за рубежом (Азия, Турция, СНГ). Такой подход позволит предложить клиенту оборудования различного класса, в разных ценовых категориях; варьировать сроки поставки, в зависимости от вида комплектующих, и предложить гибкий подход в определении периода гарантии на оборудование.",
    },
    {
      image: "/img/slider_3.png",
      title: "BIM-TECHNOLOGIES",
      description:
        "Используем BIM-технологии для проектирования установок и систем BMS в любой конфигурации, и с любыми параметрами заказчика. Обширный производственный опыт наших инженеров и проектировщиков, позволяет: детализировать каждый элемент конструкции установки, предложить индивидуальные решение по интеллектуальному управлению микроклиматом на конкретном объекте, рекуперировать тепло, экономить при этом и другие энергоносители.",
    },
    {
      image: "/img/slider_4.png",
      title: "AHU Select",
      description:
        "Современная online программа подбора с генератором файлов .rfa (Revit ®), позволяет быстро и точно подбирать установки, строить ID-диаграммы для каждого агрегата и выгружать оборудование в 3D.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (index < 0) return;
    if (index > 2) return;
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Slider container */}
      <div className="relative">
        {/* Slides */}
        <div className="flex justify-center">
          <div className="w-[1160px]">
            <div
              className=" flex gap-[64px] transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full ">
                  <div className="bg-gray-100 w-[816px] h-[558px] ">
                    <div
                      className={`h-[272px] w-full border-b  border-b-gray-400 mb-[30px]  ${
                        index === 1
                          ? "pt-[25px] pl-8"
                          : index === 2 || index === 3
                          ? "pt-7 pl-11"
                          : ""
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="object-cover "
                      />
                    </div>
                    <div className="px-[45px] pb-[52px]">
                      <Title
                        text={slide.title}
                        className="text-2xl leading-[56px]"
                      />
                      <p className="text-lg text-gray-400 leading-[23px]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex-center gap-[25px] mt-[43px] pb-4 mb-20 border-b border-b-gray-400">
          <div
            onClick={() => goToSlide(currentSlide - 1)}
            className="cursor-pointer hover:translate-x-[-2px] transition-all"
          >
            <img src="/icon/arrow_left.svg" alt="" />
          </div>
          <div
            onClick={() => goToSlide(currentSlide + 1)}
            className="cursor-pointer hover:translate-x-[2px] transition-all"
          >
            <img src="/icon/arrow_right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
