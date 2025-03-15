import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEquipmentPopup,
  changeItemId,
  changeShowAddNewItemPopup,
  getAllEquipment,
  getAllSolutions,
  deleteEquipment,
  deleteSolutions,
} from "../../../utils/slice/userSlice";
import { Plus } from "lucide-react";

export default function AdminCategoryList({ title, category }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { equipment, solutions, itemId } = useSelector(({ user }) => user);
  const dataCategory = category === "equipment" ? equipment : solutions;

  const changeEquipment = (id) => {
    dispatch(changeItemId(id));
    dispatch(changeEquipmentPopup(true));
  };

  const handleDelete = async (id) => {
    try {
      if (category === "equipment") {
        await dispatch(deleteEquipment(id)).unwrap();
        await dispatch(getAllEquipment());
      } else if (category === "solutions") {
        await dispatch(deleteSolutions(id)).unwrap();
        await dispatch(getAllSolutions());
      }
      dispatch(changeItemId(null));
    } catch (error) {
      console.error(`Failed to delete ${category}:`, error);
      alert(
        `Не удалось удалить ${
          category === "equipment" ? "оборудование" : "решение"
        }`
      );
    }
  };

  const addNewItem = () => {
    dispatch(changeShowAddNewItemPopup(true));
  };
  const fetchData = async () => {
    setLoading(true);
    await dispatch(getAllEquipment());
    await dispatch(getAllSolutions());

    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [category, itemId]);
  return (
    <div className="relative pb-5">
      <span className="hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 md:mb-9">
        <Title
          text={title}
          className="inline-block text-xl font-normal mb-4 md:mb-0 p-2 lg:p-0"
        />
        <button
          onClick={() => addNewItem()}
          className="p-2 flex items-center gap-2 md:gap-4 rounded hover:bg-gray-50"
        >
          <p>{`Добавить ${
            category === "equipment"
              ? "оборудование"
              : category !== "news"
              ? "решение"
              : "новость"
          }`}</p>
          <Plus className="w-5 md:w-6" />
        </button>
      </div>
      {loading ? (
        <div className="text-center text-gray-400 py-4">Загрузка...</div>
      ) : dataCategory.length > 0 ? (
        <div className="flex justify-center w-full">
          <div className="max-h-[440px] overflow-y-auto grid  grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {dataCategory.map(
              ({ id, name, description, image_card, date, title }) => (
                <article
                  key={id}
                  className="flex flex-col  justify-between w-full sm:w-[200px] h-[360px] border border-gray-100 p-4 "
                >
                  {category !== "news" ? (
                    <>
                      <div>
                        <img
                          className="w-full h-[120px] object-cover"
                          src={image_card || "/img/placeholder.svg"}
                          alt={name}
                        />
                        <h2 className="text-gray-400 text-sm uppercase font-normal my-2">
                          {name}
                        </h2>
                        <div
                          className="text-[13px] max-h-[80px] overflow-hidden text-gray-300"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <Button
                          onClick={() => changeEquipment(id)}
                          text={"Изменить"}
                          className="w-full py-2 hover:bg-gray-450 text-center"
                        />
                        <Button
                          onClick={() => handleDelete(id)}
                          text={"Удалить"}
                          className="w-full py-2 bg-gray-300 hover:bg-gray-500 text-center"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <img
                          className="w-full h-[120px] object-cover"
                          src={image || "/img/placeholder.svg"}
                          alt={name}
                        />
                        <h2 className="text-gray-400 text-sm uppercase font-normal my-2 overflow-hidden">
                          {title}
                        </h2>
                        <p className="text-[13px] text-gray-300">{date}</p>
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <Button
                          onClick={() => changeEquipment(id)}
                          text={"Изменить"}
                          className="w-full py-2 hover:bg-gray-450 text-center"
                        />
                        <Button
                          onClick={() => handleDelete(id)}
                          text={"Удалить"}
                          className="w-full py-2 bg-gray-300 hover:bg-gray-500 text-center"
                        />
                      </div>
                    </>
                  )}
                </article>
              )
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400 py-4">
          {category === "equipment" ? "Оборудования нет" : "Решений нет"}
        </p>
      )}
    </div>
  );
}
