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
  // ... other orders
];

const authFormLocalStorage =
  localStorage.getItem(`auth`) !== null ? localStorage.getItem(`auth`) : false;

const url = `http://89.23.116.157:8002`;

// Create axios instance with default config
const api = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
  },
});

// Add trailing slash to URLs that don't have one
api.interceptors.request.use((config) => {
  if (config.url && !config.url.endsWith("/")) {
    config.url += "/";
  }
  return config;
});

// Handle multipart/form-data requests
const createFormDataRequest = (data, type) => {
  const formData = new FormData();

  // Add required fields based on type
  switch (type) {
    case "news":
      if (!data.title) formData.append("title", "Временный заголовок");
      if (!data.text) formData.append("text", "Временный текст");
      break;
    case "equipment":
    case "solution":
      if (!data.name) formData.append("name", "Временное название");
      if (!data.description)
        formData.append("description", "Временное описание");
      break;
  }

  // Add all provided data
  Object.keys(data).forEach((key) => {
    if (data[key] instanceof File) {
      formData.append(key, data[key], data[key].name);
    } else if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });

  return formData;
};

export const getAllNews = createAsyncThunk(
  "news/getNews",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/news/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const createNews = createAsyncThunk(
  "news/createNews",
  async (data, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "news");
      const res = await api.post("/news/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateNews = createAsyncThunk(
  "news/updateNews",
  async ({ id, data }, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "news");
      const res = await api.put(`/news/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (id, thunkApi) => {
    try {
      const res = await api.delete(`/news/${id}/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getAllEquipment = createAsyncThunk(
  "Equipment/getAllEquipment",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/equipments/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const createEquipment = createAsyncThunk(
  "Equipment/createEquipment",
  async (data, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "equipment");
      const res = await api.post("/equipments/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateEquipment = createAsyncThunk(
  "Equipment/updateEquipment",
  async ({ id, data }, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "equipment");
      const res = await api.put(`/equipments/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteEquipment = createAsyncThunk(
  "Equipment/deleteEquipment",
  async (id, thunkApi) => {
    try {
      const res = await api.delete(`/equipments/${id}/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getAllSolutions = createAsyncThunk(
  "Solutions/getAllSolutions",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/solutions/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const createSolutions = createAsyncThunk(
  "Solutions/createSolutions",
  async (data, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "solution");
      const res = await api.post("/solutions/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateSolutions = createAsyncThunk(
  "Solutions/updateSolutions",
  async ({ id, data }, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "solution");
      const res = await api.put(`/solutions/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteSolutions = createAsyncThunk(
  "Solutions/deleteSolutions",
  async (id, thunkApi) => {
    try {
      const res = await api.delete(`/solutions/${id}/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getAllOrders = createAsyncThunk(
  "Orders/getAllOrders",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/orders/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const createOrders = createAsyncThunk(
  "Orders/createOrders",
  async (data, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "order");
      const res = await api.post("/orders/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateOrders = createAsyncThunk(
  "Orders/updateOrders",
  async ({ id, data }, thunkApi) => {
    try {
      const formData = createFormDataRequest(data, "order");
      const res = await api.put(`/orders/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteOrders = createAsyncThunk(
  "orders/deleteOrders",
  async (id, thunkApi) => {
    try {
      const res = await api.delete(`/orders/${id}/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    news: [],
    equipment: [],
    solutions: [],
    orders: [],
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
    builder
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(updateNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(getAllEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      .addCase(deleteEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      .addCase(updateEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      .addCase(createEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      .addCase(getAllSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      .addCase(deleteSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      .addCase(updateSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      .addCase(createSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(deleteOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(updateOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(createOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
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
