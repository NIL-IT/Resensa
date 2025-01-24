import React, { useState } from "react";
import SearchInput from "../../ui/SearchInput";
import { changeShowSearchPopup } from "../../../utils/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

export default function SearchPopup() {
  const { equipment, solutions } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const combinedData = [...equipment, ...solutions];
  const [searchData, setSearchData] = useState(combinedData);

  const handleSearch = (value) => {
    setSearchData(
      combinedData.filter((item) =>
        item.name.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    console.log(searchData);
  };

  document.body.style.overflow = "hidden";
  const handleClose = () => {
    dispatch(changeShowSearchPopup(false));
    document.body.style.overflow = "auto";
  };
  return (
    <div className="min-h-[80vh] min-w-[48wh] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll">
      <div className="bg-white pt-2 xs:pt-3 sm:pt-4 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-full relative min-w-full min-h-full pb-6 xs:pb-7 sm:pb-8 md:pb-9 lg:pb-10">
        <div className="sticky z-50 flex-center top-0 left-0 bg-white h-[60px] xs:h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px]">
          <SearchInput
            handleSearch={handleSearch}
            handleClose={handleClose}
            closeIcon={true}
            iconLeft={true}
            className={"border-0 border-b border-b-gray-200  gap-4"}
          />
        </div>
        <div className="mt-2 xs:mt-3 sm:mt-4 flex justify-center">
          {searchData ? (
            <div className="overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5">
              {searchData.map(({ image, name, description, id }) => (
                <Link
                  onClick={() => handleClose()}
                  to={`/product/${id}`}
                  key={id}
                  className="flex flex-col justify-between w-full xs:w-[180px] sm:w-[190px] md:w-[195px] lg:w-[200px] border border-gray-100 p-2 xs:p-3 sm:p-4"
                >
                  <div>
                    <img
                      className="w-full h-[120px] xs:h-[130px] sm:h-[140px] md:h-[150px] lg:h-[160px] object-cover"
                      src={image}
                      alt={name}
                    />
                    <h2 className="text-gray-400 text-xs xs:text-sm uppercase font-normal my-1 xs:my-1.5 sm:my-2">
                      {name}
                    </h2>
                    <p className="text-[11px] xs:text-[12px] sm:text-[13px] text-gray-300 line-clamp-3">
                      {description}
                    </p>
                  </div>
                  <Button
                    noLink={true}
                    text={"Оставить заявку"}
                    className="w-full py-2 xs:py-3 sm:py-4 px-[8px] xs:px-[10px] sm:px-[8px]
                     hover:bg-gray-450 mt-2 xs:mt-3 sm:mt-4 text-sm xs:text-xs"
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div>По вашему запросу ничего не найдено</div>
          )}
        </div>
      </div>
    </div>
  );
}
