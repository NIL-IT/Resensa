import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isPopup: false,
  },
  reducers: {
    changeShowPopup: (state, { payload }) => {
      state.isPopup = payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { changeShowPopup } = userSlice.actions;
export default userSlice.reducer;
