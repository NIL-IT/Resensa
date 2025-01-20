import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
import axios from "axios";
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
const url = `http://89.23.116.157:8002`;
export const getAllNews = createAsyncThunk("news/getNews", async (thunkApi) => {
  try {
    const res = await axios.get(`${url}/news/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkApi.rejectWithValue(err);
  }
});
export const createNews = createAsyncThunk(
  "news/createNews",
  async (thunkApi, payload) => {
    try {
      const res = await axios.post(`${url}/news/`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const updateNews = createAsyncThunk(
  "news/updateNews",
  async (thunkApi, payload) => {
    try {
      const res = await axios.put(`${url}/news/${payload.id}`, payload.body);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (thunkApi, payload) => {
    try {
      console.log(payload);
      const res = await axios.delete(`${url}/news/${payload}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const getAllEquipment = createAsyncThunk(
  "Equipment/getAllEquipment",
  async (thunkApi) => {
    try {
      const res = await axios.get(`${url}/equipments/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const createEquipment = createAsyncThunk(
  "Equipment/createEquipment",
  async (thunkApi, payload) => {
    try {
      const res = await axios.post(`${url}/equipments/`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const updateEquipment = createAsyncThunk(
  "Equipment/updateEquipment",
  async (thunkApi, payload) => {
    try {
      const res = await axios.put(
        `${url}/equipments/${payload.id}`,
        payload.body
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const deleteEquipment = createAsyncThunk(
  "Equipment/deleteEquipment",
  async (thunkApi, payload) => {
    try {
      console.log(payload);
      const res = await axios.delete(`${url}/equipments/${payload}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const getAllSolutions = createAsyncThunk(
  "Solutions/getAllSolutions",
  async (thunkApi) => {
    try {
      const res = await axios.get(`${url}/solutions/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const createSolutions = createAsyncThunk(
  "Solutions/createSolutions",
  async (thunkApi, payload) => {
    try {
      const res = await axios.post(`${url}solutions/`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const updateSolutions = createAsyncThunk(
  "Solutions/updateSolutions",
  async (thunkApi, payload) => {
    try {
      const res = await axios.put(
        `${url}/solutions/${payload.id}`,
        payload.body
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const deleteSolutions = createAsyncThunk(
  "Solutions/deleteSolutions",
  async (thunkApi, payload) => {
    try {
      console.log(payload);
      const res = await axios.delete(`${url}/solutions/${payload}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const getAllOrders = createAsyncThunk(
  "Orders/getAllOrders",
  async (thunkApi) => {
    try {
      const res = await axios.get(`${url}/orders/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const createOrders = createAsyncThunk(
  "Orders/createOrders",
  async (thunkApi, payload) => {
    try {
      const res = await axios.post(`${url}orders/`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const updateOrders = createAsyncThunk(
  "Orders/updateOrders",
  async (thunkApi, payload) => {
    try {
      const res = await axios.put(`${url}/orders/${payload.id}`, payload.body);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const deleteOrders = createAsyncThunk(
  "orders/deleteOrders",
  async (thunkApi, payload) => {
    try {
      console.log(payload);
      const res = await axios.delete(`${url}/orders/${payload}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    news: [],
    equipment: [],
    solutions: [],
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
    addNewItemPopup: false,
    newsPopup: false,
    searchPopup: false,
    experience: 22,
    guarantee: 3,
  },
  reducers: {
    changeNumberForMainBanner: (state, { payload }) => {
      const { experience, guarantee } = payload;
      state.experience = experience;
      state.guarantee = guarantee;
    },
    changeShowAddNewItemPopup: (state, { payload }) => {
      state.addNewItemPopup = payload;
    },
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
    changeShowNewsPopup: (state, { payload }) => {
      state.newsPopup = payload;
    },
    changeShowSearchPopup: (state, { payload }) => {
      state.searchPopup = payload;
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
    addNewItemToData: (state, { payload }) => {
      if (payload.category === "news") {
        const isFind = state.data.news.items.some(
          ({ id }) => id === payload.item.id
        );
        if (!isFind && payload.item.id) {
          state.data.news.items.push(payload.item);
        }
      } else if (payload.category === "equipment") {
        const isFind = state.data.equipment.items.some(
          ({ id }) => id === payload.item.id
        );
        if (!isFind && payload.item.id) {
          state.data.equipment.items.push(payload.item);
        }
      } else if (payload.category === "solutions") {
        const isFind = state.data.solutions.items.some(
          ({ id }) => id === payload.item.id
        );
        if (!isFind && payload.item.id) {
          state.data.solutions.items.push(payload.item);
        }
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
  extraReducers: (builder) => {
    builder.addCase(getAllNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(updateNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(createNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(getAllEquipment.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(deleteEquipment.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(updateEquipment.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(createEquipment.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(getAllSolutions.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(deleteSolutions.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(updateSolutions.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(createSolutions.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(deleteOrders.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(updateOrders.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(createOrders.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});
export const {
  changeNumberForMainBanner,
  changeShowSearchPopup,
  changeShowNewsPopup,
  addNewItemToData,
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
  changeShowAddNewItemPopup,
} = userSlice.actions;
export default userSlice.reducer;
