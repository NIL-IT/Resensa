import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeAddOrderPopup,
  changeItemId,
  changeStatusOrderPopup,
} from "../../utils/slice/userSlice";

export default function VerticalDote({
  list,
  deleteSelected,
  deleteAll,
  selectedOrders,
  changeOrders,
}) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const handleAction = (action) => {
    switch (action) {
      case "deleteSelected":
        deleteSelected();
        break;
      case "deleteAll":
        deleteAll();
        break;
      case "add":
        dispatch(changeAddOrderPopup(true));
        break;
      case "change":
        if (selectedOrders.length == 1) {
          dispatch(changeStatusOrderPopup(true));
          dispatch(changeItemId(selectedOrders[0]));
        } else {
          alert("Выберите один заказ для изменения статуса.");
        }

        break;
    }
    setActive(false);
  };

  return (
    <div className="relative">
      <button className="p-2" onClick={() => setActive(!active)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </button>
      {active && (
        <div className="absolute space-y-4 top-2 right-[30px] py-1 bg-white w-[250px] z-30 rounded-lg border">
          {list.map(({ name, icon, action }) => (
            <button
              key={name}
              className="flex-center justify-between gap-4 hover:bg-gray-50 p-2 w-full transition-all rounded"
              onClick={() => handleAction(action)}
            >
              <span>{name}</span>
              {icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
