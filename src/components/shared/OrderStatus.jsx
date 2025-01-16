import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
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
        className="w-[600px] flex-center justify-center gap-5"
      >
        <input
          placeholder="Номер заказа"
          onChange={handleChange}
          value={value}
          type="number"
          className="bg-white py-[18px] px-6 w-[370px] text-base font-normal"
          required
        />
        <Button
          type="submit"
          icon={true}
          text="проверить"
          iconWidth={"w-[30px]"}
          className="py-[15px] pl-5"
        />
      </form>
    </section>
  );
}
