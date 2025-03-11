import { useEffect, useState } from "react";

export default function Slider({ slides, second, recensaAbout }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let currentWidth = document.body.offsetWidth;
  const [width, setWidth] = useState(currentWidth);
  useEffect(() => {
    setWidth(currentWidth);
    setCurrentSlide(0);
  }, [currentWidth]);

  const goToSlide = (index) => {
    if (index < 0) return;
    // if (second && width > 1024 && width < 1536 && index > 3) return;
    if (second && width > 1669 && index > 1) return;
    if (second && index > 2 && width > 1220) return;
    if (second && index > 3) return;
    if (index > 2 && width > 1536) return;
    if (index > 3) return;
    setCurrentSlide(index);
  };
  const setTranslate = () => {
    if (width >= 1024 && second) return currentSlide * 60;
    if (width > 1280) return currentSlide * 60;
    if (width > 1024) return currentSlide * 60;
    if (width > 768) return currentSlide * 100;
    if (width > 768) return currentSlide * 100;
    if (width > 640) return currentSlide * 100;
    if (width > 420) return currentSlide * 100;
    if (width < 420) return currentSlide * 100;
  };
  return (
    <article className="min-w-[100wh] mb-10 xs:mb-0">
      <div className="relative">
        <div className="flex justify-center">
          <div className="min-w-[100wh] overflow-hidden ">
            <div
              className=" flex gap-0  
              xl:gap-[55px] 2xl:gap-[60px] 3xl:gap-[64px] 
              transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${setTranslate()}%)` }}
            >
              {slides.map(({ image, title = "", description = "" }, index) => (
                <div
                  key={index}
                  className="w-full min-w-full flex justify-center xl:block xl:min-w-[auto]
                   3xl:min-w-[auto]  
                   2xl:h-auto  xs:w-full    "
                >
                  {second ? (
                    <div
                      className=" h-[270px]  sm:w-[420px]
                     sm:h-[324px] md:w-[631px] md:h-[487px]  "
                    >
                      <img
                        src={image}
                        alt={title}
                        title={title}
                        className="object-cover w-full max-h-[100%]"
                      />
                    </div>
                  ) : (
                    <div
                      className={` w-full xs:w-full sm:w-full 
                        md:w-[600px] lg:w-[650px] xl:w-[700px] 
                        2xl:w-[750px] 3xl:w-[816px] h-[360px] 
                        xs:h-[400px] sm:h-[420px] 
                        md:h-[420px] 
                        lg:h-[450px] xl:h-[490px] 2xl:h-[460px] 
                        3xl:h-[458px] ${second ? "" : "bg-gray-100"}`}
                    >
                      <div
                        className={` h-[150px] xs:h-[170px] sm:h-[190px] md:h-[210px] lg:h-[230px] xl:h-[250px] 2xl:h-[260px] 3xl:h-[272px]
                           w-full mb-[15px] xs:mb-[18px] sm:mb-[20px] md:mb-[25px] 
                           lg:mb-[28px] xl:mb-[30px] border-b border-b-gray-400 ${
                             index === 1
                               ? " pt-[15px] xs:pt-[17px] sm:pt-[20px] md:pt-[22px] lg:pt-[25px] pl-[20px] xs:pl-[25px] sm:pl-[30px] md:pl-[35px] lg:pl-[40px]"
                               : index === 2 || index === 3
                               ? "pt-[15px] xs:pt-[17px] sm:pt-[20px] md:pt-[22px] lg:pt-[25px] pl-[25px] xs:pl-[30px] sm:pl-[35px] md:pl-[40px] lg:pl-[45px]"
                               : ""
                           } `}
                      >
                        <img
                          src={image}
                          alt={title}
                          title={title}
                          className={`object-cover w-full ${
                            index === 0
                              ? "  max-w-[300px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[490px] 2xl:max-w-[546px]"
                              : index === 1
                              ? "max-w-[210px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[300px] 2xl:max-w-[346px]"
                              : index === 2
                              ? "max-w-[240px] sm:max-w-[290px] md:max-w-[320px] lg:max-w-[350px] xl:max-w-[380px] 2xl:max-w-[400px]"
                              : index === 3
                              ? "max-w-[170px] sm:max-w-[210px] md:max-w-[230px] lg:max-w-[250px] xl:max-w-[280px] 2xl:max-w-[290px]"
                              : ""
                          }`}
                        />
                      </div>
                      <div className="px-[20px] xs:px-[25px] sm:px-[30px] md:px-[35px] lg:px-[40px] xl:px-[45px] pb-[30px] xs:pb-[35px] sm:pb-[40px] md:pb-[45px] lg:pb-[50px] xl:pb-[52px]">
                        <p className="text-gray-400 uppercase text-md xs:lg sm:text-xl ">
                          {description}
                        </p>
                        {/* <h3
                          className="text-gray-400 uppercase text-lg xs:text-xl sm:text-2xl leading-[30px] 
                          xs:leading-[35px] sm:leading-[40px] md:leading-[45px] 
                          lg:leading-[50px] xl:leading-[56px]"
                        >
                          {title}
                        </h3>
                        <p className="xl:max-w-[90%] 2xl:max-w-[100%] text-base xs:text-base sm:text-lg text-gray-400 leading-[18px] xs:leading-[19px] sm:leading-[20px] md:leading-[21px] lg:leading-[22px] xl:leading-[23px]">
                          {description}
                        </p> */}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div
          className={`container pl-5 xs:pl-0 flex-center gap-[15px] xs:gap-[17px] sm:gap-[20px]
         md:gap-[22px] lg:gap-[25px] mt-[25px] xs:mt-[30px] sm:mt-[35px] md:mt-[38px] lg:mt-[40px] xl:mt-[43px] pb-4 pt-5 xs:pt-0 
          border-b border-b-gray-400 ${
            !second
              ? `mb-[60px]
         xs:mb-[70px] sm:mb-[80px] md:mb-[90px] lg:mb-[100px] xl:mb-20`
              : ``
          }`}
        >
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="cursor-pointer hover:translate-x-[-2px] transition-all"
          >
            <img
              src="/icon/arrow_left.svg"
              alt="Стрелка"
              title="Нажмите чтобы перелистнуть назад"
            />
          </button>
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="cursor-pointer hover:translate-x-[2px] transition-all"
          >
            <img
              src="/icon/arrow_right.svg"
              alt="Стрелка"
              title="Нажмите чтобы перелистнуть вперёд"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
