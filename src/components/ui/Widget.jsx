import React from "react";
import { useDispatch } from "react-redux";
import { changeShowPopup } from "../../utils/slice/userSlice";

export default function Widget() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(changeShowPopup(true))}
      className="fixed bottom-8 right-8 cursor-pointer z-50"
    >
      <img
        className="max-w-[50px] max-h-[50px] animateWidget"
        src="/icon/widget.svg"
        alt="Позвони нам"
      />
    </button>
  );
}
