import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
const orders = [
  {
    id: "25426",
    date: "12.12.2024",
    client: "Kevin",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25425",
    date: "12.12.2024",
    client: "Komsai",
    status: "cancelled",
    amount: "200.00 ₽",
  },
  {
    id: "25424",
    date: "12.12.2024",
    client: "Nikhi",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25423",
    date: "12.12.2024",
    client: "Shivam",
    status: "cancelled",
    amount: "200.00 ₽",
  },
  {
    id: "25422",
    date: "12.12.2024",
    client: "Shubhi",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25420",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25419",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25418",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25417",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
  {
    id: "25416",
    date: "12.12.2024",
    client: "Yogesh",
    status: "delivered",
    amount: "200.00 ₽",
  },
];
const authFormLocalStorage =
  localStorage.getItem(`auth`) !== null ? localStorage.getItem(`auth`) : false;
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: data,
    isAdmin: true,
    isAuth: authFormLocalStorage,
    isPopup: false,
    status: false,
    orderNum: null,
    addOrderPopup: false,
    ordersData: orders,
    equipmentPopup: false,
    equipmentId: null,
    newsId: null,
  },
  reducers: {
    changeShowPopup: (state, { payload }) => {
      state.isPopup = payload;
    },
    changeShowStatus: (state, { payload }) => {
      state.status = payload;
    },
    changeOrderNumber: (state, { payload }) => {
      state.orderNum = payload;
    },
    changeAddOrderPopup: (state, { payload }) => {
      state.addOrderPopup = payload;
    },
    changeOrdersList: (state, { payload }) => {
      state.ordersData = payload;
    },
    changeEquipmentPopup: (state, { payload }) => {
      state.equipmentPopup = payload;
    },
    changeEquipmentId: (state, { payload }) => {
      state.equipmentId = payload;
    },
    changeNewsId: (state, { payload }) => {
      state.newsId = payload;
    },
    addItemOrder: (state, { payload }) => {
      let isFind = state.ordersData.some(({ id }) => id === payload.id);
      if (!isFind && payload.id) {
        state.ordersData.push(payload);
      }
    },
    changeIsAuth: (state, { payload }) => {
      state.isAuth = payload;
      localStorage.setItem(`auth`, payload);
    },
    changeData: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {},
});
export const {
  changeNewsId,
  changeData,
  changeEquipmentId,
  changeIsAuth,
  changeEquipmentPopup,
  addItemOrder,
  changeOrdersList,
  changeAddOrderPopup,
  changeShowPopup,
  changeShowStatus,
  changeOrderNumber,
} = userSlice.actions;
export default userSlice.reducer;
