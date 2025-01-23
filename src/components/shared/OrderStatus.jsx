import React from "react";
import Title from "../ui/Title";
import {
  changeOrderNumber,
  changeShowStatus,
} from "../../utils/slice/userSlice";
import { useDispatch } from "react-redux";

export default function OrderStatus() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  const handleClickStatus = (e) => {
    e.preventDefault();

    dispatch(changeShowStatus(true));
    dispatch(changeOrderNumber(value));
  };
  return (
    <section className="bg-gray-200 py-[69px] flex-center flex-col justify-center gap-10 mt-[35px]">
      <Title
        text="вы можете проверить статус своего заказа"
        className="text-xl font-normal text-gray-400"
      />

      <form
        onSubmit={handleClickStatus}
        className="w-[600px] flex flex-col items-center gap-5   md:flex-row md:flex-center md:justify-center "
      >
        <input
          placeholder="Номер заказа"
          onChange={handleChange}
          value={value}
          type="number"
          className="bg-white py-[18px] px-6 w-[370px] text-base font-normal"
          required
        />
        <button
          type="submit"
          className={
            "group bg-gray-400 text-white font-normal py-[15px] px-[30px] text-xs uppercase flex-center gap-5"
          }
        >
          <img
            className={`group-hover:translate-x-1 transition-all w-[30px]`}
            src="/icon/arrow.svg"
            alt="arrow"
          />

          <p>проверить</p>
        </button>
      </form>
    </section>
  );
}
