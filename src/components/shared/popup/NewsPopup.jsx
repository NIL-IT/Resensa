import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowNewsPopup } from "../../../utils/slice/userSlice";

export default function NewsPopup() {
  const dispatch = useDispatch();
  const { newsId, news } = useSelector(({ user }) => user);
  const { title, text, date, img } = news.find(({ id }) => id === newsId);
  document.body.style.overflow = "hidden";
  const handleClose = () => {
    dispatch(changeShowNewsPopup(false));
    document.body.style.overflow = "auto";
  };
  return (
    <div className="w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[922px] min-h-[80vh] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll">
      <div className="bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-full relative">
        <button
          onClick={() => handleClose()}
          className="fixed top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div>
          <h2 className="text-lg xs:text-xl sm:text-2xl leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[30.6px] text-gray-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8">
            {title}
          </h2>
          <div className="flex justify-center">
            <img
              className="w-full max-h-[150px] xs:max-h-[180px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-contain"
              src={img}
              alt={title}
            />
          </div>
          <span className="text-gray-900 text-sm xs:text-base block mt-4">
            {date}
          </span>
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8">
            <p className="text-gray-900 text-sm xs:text-base">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
