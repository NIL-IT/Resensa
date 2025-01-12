import { useState } from "react";
import Title from "../ui/Title";

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (index < 0) return;
    if (index > 2) return;
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      {/* Slider container */}
      <div className="relative">
        {/* Slides */}
        <div className="flex justify-center">
          <div className="w-[1160px]">
            <div
              className=" flex gap-[64px] transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map(({ image, title = "", description = "" }, index) => (
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
                      <img src={image} alt={title} className="object-cover " />
                    </div>
                    <div className="px-[45px] pb-[52px]">
                      <Title text={title} className="text-2xl leading-[56px]" />
                      <p className="text-lg text-gray-400 leading-[23px]">
                        {description}
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
