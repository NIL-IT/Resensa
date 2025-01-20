import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAddOrderPopup,
  changeData,
  changeEquipmentId,
  changeEquipmentPopup,
  changeNewsId,
  changeShowAddNewItemPopup,
} from "../../../utils/slice/userSlice";

import { Plus } from "lucide-react";

export default function AdminCategoryList({ title, category }) {
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);
  const { data, news } = useSelector(({ user }) => user);
  const [dataCategory, setDataCategory] = useState(
    category === "news" ? news : data[category]
  );

  const changeEquipment = (id) => {
    if (category !== "news") {
      dispatch(changeEquipmentId(id));
    }
    dispatch(changeNewsId(id));
    dispatch(changeEquipmentPopup(true));
  };
  useEffect(() => {
    if (news.length > 0) isLoading(false);
  }, [news]);
  console.log(news);
  console.log(dataCategory);
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
  const addNewItem = () => {
    dispatch(changeShowAddNewItemPopup(true));
  };
  return (
    <div className="relative pb-5">
      <span className="w-[1px] h-[100%] absolute bg-gray-400 top-0 left-[-39px]" />
      <div className="flex-center justify-between mb-9">
        <Title text={title} className="inline-block text-xl font-normal " />
        <button
          onClick={() => addNewItem()}
          className=" p-2 flex-center gap-4 mr-12 rounded hover:bg-gray-50"
        >
          <span>{`Добавить ${
            category === "equipment"
              ? "оборудование"
              : category !== "news"
              ? "решение"
              : "новость"
          }`}</span>
          <Plus className="w-6" />
        </button>
      </div>
      {!isLoading ? (
        <div className="max-h-[440px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {dataCategory.map(
            ({ id, name, description, image, text, date, title }) => (
              <div
                key={id}
                className=" flex flex-col justify-between w-[200px] h-[360px] border border-gray-100 p-4 mb-5"
              >
                {category !== "news" ? (
                  <>
                    <div>
                      <img className="w-full" src={image} alt={name} />
                      <h2 className="text-gray-400 text-sm uppercase font-normal my-2">
                        {name}
                      </h2>

                      <p className=" text-[13px] text-gray-300">
                        {description}
                      </p>
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
                        {title}
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
      ) : (
        <div>dsada</div>
      )}
    </div>
  );
}
