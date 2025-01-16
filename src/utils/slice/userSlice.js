import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isPopup: false,
    status: false,
    orderNum: null,
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
  },
  extraReducers: (builder) => {},
});
export const { changeShowPopup, changeShowStatus, changeOrderNumber } =
  userSlice.actions;
export default userSlice.reducer;
