import React, { useState, useEffect } from "react";
import SearchInput from "../../ui/SearchInput";
import { changeShowSearchPopup } from "../../../utils/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import useLatinFormat from "../../../utils/hooks/useLatinFormat";

export default function SearchPopup() {
  const { equipment, solutions } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const [combinedData, setCombinedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setCombinedData([...equipment, ...solutions]);
  }, [equipment, solutions]);

  const [searchData, setSearchData] = useState([...equipment, ...solutions]);

  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredData = combinedData.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
    );
    setSearchData(filteredData);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    dispatch(changeShowSearchPopup(false));
  };

  return (
    <section className="h-[80%] min-w-[80%] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div
        className="bg-white pt-2 xs:pt-3 sm:pt-4 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8
       rounded-lg min-w-[100%]
        overflow-y-scroll relative max-h-[100%] min-h-[100%]
         pb-6 xs:pb-7 sm:pb-8 md:pb-9 lg:pb-10"
      >
        <div
          itemScope
          itemType="https://schema.org/WebSite"
          className="sticky z-50 flex-center top-[-20px] left-0 bg-white h-[60px]
           xs:h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px]"
        >
          <meta itemProp="url" content="https://recensa.nilit1.ru/" />
          <SearchInput
            handleSearch={handleSearch}
            handleClose={handleClose}
            placeholder={"Введите запрос для поиска"}
            closeIcon={true}
            iconLeft={true}
            className={"border-0 border-b border-b-gray-200 gap-4"}
          />
        </div>
        <div className="mt-2 xs:mt-3 sm:mt-4 flex justify-center ">
          {searchData.length > 0 ? (
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-5">
              {searchData.map(
                ({ image_card, name, description, id, max_param }, i) => (
                  <Link
                    onClick={() => handleClose()}
                    to={
                      max_param
                        ? `/equipment/${useLatinFormat(name)}`
                        : `/solutions/${useLatinFormat(name)}`
                    }
                    key={i}
                    className="flex flex-col justify-between w-full xs:w-[180px] sm:w-[190px] md:w-[195px] lg:w-[200px] border border-gray-100 p-2 xs:p-3 sm:p-4"
                  >
                    <div>
                      <img
                        className="w-full h-[120px] xs:h-[130px] sm:h-[140px] md:h-[150px] lg:h-[160px] object-cover"
                        src={image_card || "/placeholder.svg"}
                        alt={name}
                        title={`Продукт ${name}`}
                      />
                      <h2 className="text-gray-400 text-xs xs:text-sm uppercase font-normal my-1 xs:my-1.5 sm:my-2">
                        {name}
                      </h2>
                      <div
                        className="text-[11px] xs:text-[12px] sm:text-[13px] text-gray-300 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                    <Button
                      noLink={true}
                      text={"Оставить заявку"}
                      className="w-full py-2 xs:py-3 sm:py-4 px-[8px] xs:px-[10px] sm:px-[8px] hover:bg-gray-450 mt-2 xs:mt-3 sm:mt-4 text-sm xs:text-xs"
                    />
                  </Link>
                )
              )}
            </div>
          ) : (
            <div className="w-full h-[60vh] flex-center justify-center ">
              <p className="text-gray-400 text-center">
                По вашему запросу ничего не найдено
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
