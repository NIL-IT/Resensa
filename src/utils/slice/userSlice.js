import { createSlice } from "@reduxjs/toolkit";
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
const userSlice = createSlice({
  name: "user",
  initialState: {
    isAdmin: true,
    isAuth: false,
    isPopup: false,
    status: false,
    orderNum: null,
    addOrderPopup: false,
    ordersData: orders,
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
    addItemOrder: (state, { payload }) => {
      let isFind = state.ordersData.some(({ id }) => id === payload.id);
      if (!isFind && payload.id) {
        state.ordersData.push(payload);
      }
    },
    changeIsAuth: (state, { payload }) => {
      state.isAuth = !state.isAuth;
    },
  },
  extraReducers: (builder) => {},
});
export const {
  changeIsAuth,
  addItemOrder,
  changeOrdersList,
  changeAddOrderPopup,
  changeShowPopup,
  changeShowStatus,
  changeOrderNumber,
} = userSlice.actions;
export default userSlice.reducer;
