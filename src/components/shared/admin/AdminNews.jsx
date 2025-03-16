import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEquipmentPopup,
  changeItemId,
  changeShowAddNewItemPopup,
  deleteNews,
  getAllNews,
} from "../../../utils/slice/userSlice";
import { Plus } from "lucide-react";

export default function AdminNews() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { news, itemId } = useSelector(({ user }) => user);

  const changeNews = (id) => {
    dispatch(changeItemId(id));
    dispatch(changeEquipmentPopup(true));
  };

  const handlerDeleteNews = async (id) => {
    await dispatch(deleteNews(id));
    dispatch(changeItemId(null));
    fetchData();
  };

  const addNewItem = () => {
    dispatch(changeShowAddNewItemPopup(true));
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      await dispatch(getAllNews());
    } catch (error) {
      console.error(`Failed to fetch ${category}:`, error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [itemId]);
  return (
    <div className="relative pb-5">
      <span className="hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-9">
        <Title
          text={"Все новости"}
          className="inline-block text-xl font-normal mb-4 md:mb-0"
        />
        <button
          onClick={() => addNewItem()}
          className="p-2 flex items-center gap-2 md:gap-4 rounded hover:bg-gray-50"
        >
          <span>{`Добавить новость`}</span>
          <Plus className="w-5 md:w-6" />
        </button>
      </div>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <div className="flex justify-center lg:justify-center">
          <div className="max-h-[550px] overflow-y-auto overflow-x-hidden grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 pr-5">
            {news.map(({ id, name, image, date, title }) => (
              <article
                key={id}
                className="flex flex-col justify-between w-full sm:w-[200px] h-[380px] border border-gray-100 p-4 mb-5"
              >
                <div>
                  <img
                    className="w-full h-[120px] object-cover"
                    src={image}
                    alt={name}
                  />
                  <h2 className="text-gray-400 text-sm uppercase font-normal my-2 overflow-hidden">
                    {title}
                  </h2>
                  <p className="text-[13px] text-gray-300">{date}</p>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <Button
                    onClick={() => changeNews(id)}
                    text={"Изменить"}
                    className="w-full py-2 hover:bg-gray-450 text-center"
                  />
                  <Button
                    onClick={() => handlerDeleteNews(id)}
                    text={"Удалить"}
                    className="w-full py-2 bg-gray-300 hover:bg-gray-500 text-center"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
