import React from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  changeData,
  changeEquipmentId,
  changeEquipmentPopup,
  changeNewsId,
} from "../../../utils/slice/userSlice";

export default function AdminCategoryList({ title, category }) {
  const dispatch = useDispatch();
  const { data } = useSelector(({ user }) => user);

  const changeEquipment = (id) => {
    if (category !== "news") {
      dispatch(changeEquipmentId(id));
    }
    dispatch(changeNewsId(id));
    dispatch(changeEquipmentPopup(true));
  };

  const deleteEquipment = (id) => {
    const newData = { ...data };
    if (category !== "news") {
      for (const category in newData) {
        const categoryData = newData[category];

        const updatedItems = categoryData.items.filter(
          (item) => item.id !== id
        );

        if (
          JSON.stringify(updatedItems) !== JSON.stringify(categoryData.items)
        ) {
          newData[category] = {
            ...categoryData,
            items: updatedItems,
          };
        }
      }
    } else {
      const categoryData = newData["news"];
      const updatedItems = categoryData.items.filter((item) => item.id !== id);
      if (JSON.stringify(updatedItems) !== JSON.stringify(categoryData.items)) {
        newData.news = {
          ...categoryData,
          items: updatedItems,
        };
      }
    }

    dispatch(changeData(newData));
  };

  return (
    <div className="relative pb-5">
      <span className="w-[1px] h-[100%] absolute bg-gray-400 top-0 left-[-39px]" />
      <Title
        text={title}
        className="inline-block text-xl font-normal mb-[50px] "
      />

      <div className="max-h-[440px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data[category].items.map(
          ({ id, name, description, img, text, date }) => (
            <div
              key={id}
              className=" flex flex-col justify-between w-[200px] h-[400px] border border-gray-100 p-4 mb-5"
            >
              {category !== "news" ? (
                <>
                  <div>
                    <img className="w-full" src={img} alt={name} />
                    <h2 className="text-gray-400 text-sm uppercase font-normal my-2">
                      {name}
                    </h2>

                    <p className=" text-[13px] text-gray-300">{description}</p>
                  </div>
                  <div className="flex-center flex-col justify-center gap-2">
                    <Button
                      onClick={() => changeEquipment(id)}
                      text={"Изменить"}
                      className="w-[100%] py-2 hover:bg-gray-450 text-center"
                    />
                    <Button
                      onClick={() => deleteEquipment(id)}
                      text={"Удалить"}
                      className="w-[100%] py-2 bg-gray-300 hover:bg-gray-500 text-center"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <img className="w-full h-[120px]" src={img} alt={name} />
                    <h2 className="text-gray-400  text-sm uppercase font-normal my-2 overflow-hidden">
                      {text}
                    </h2>
                    <p className=" text-[13px] text-gray-300">{date}</p>
                  </div>
                  <div className="flex-center flex-col justify-center gap-2">
                    <Button
                      onClick={() => changeEquipment(id)}
                      text={"Изменить"}
                      className="w-[100%] py-2 hover:bg-gray-450 text-center"
                    />
                    <Button
                      onClick={() => deleteEquipment(id)}
                      text={"Удалить"}
                      className="w-[100%] py-2 bg-gray-300 hover:bg-gray-500 text-center"
                    />
                  </div>
                </>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
