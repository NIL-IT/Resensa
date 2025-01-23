import React from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEquipmentPopup,
  changeItemId,
  changeShowAddNewItemPopup,
  deleteNews,
} from "../../../utils/slice/userSlice";
import { Plus } from "lucide-react";

export default function AdminNews() {
  const dispatch = useDispatch();
  const { news } = useSelector(({ user }) => user);
  console.log(news);
  const changeNews = (id) => {
    dispatch(changeItemId(id));
    dispatch(changeEquipmentPopup(true));
  };

  const handlerDeleteNews = (id) => {
    dispatch(deleteNews(id));
    dispatch(changeItemId(null));
  };

  const addNewItem = () => {
    dispatch(changeShowAddNewItemPopup(true));
  };  
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
      {news.length > 0 ? (
        <div className="max-h-[440px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {news.map(({ id, name, image, date, title }) => (
            <div
              key={id}
              className="flex flex-col justify-between w-full sm:w-[200px] h-[360px] border border-gray-100 p-4 mb-5"
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
            </div>
          ))}
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
}
