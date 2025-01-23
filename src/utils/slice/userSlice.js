import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
import axios from "axios";

// Create axios instance with default config
const url = `https://nilit1.ru/api`;
const api = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
  },
});

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
  async (payload, thunkApi) => {
    try {
      // Validate required fields
      if (!payload.title || !payload.text || !payload.news_photo) {
        throw new Error(
          "Отсутствуют обязательные поля: заголовок, текст и изображение"
        );
      }
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("text", payload.text);
      formData.append("news_photo", payload.news_photo);
      const res = await api.post("/news/", formData);

      return res.data;
    } catch (err) {
      console.error("Upload error:", err);
      return thunkApi.rejectWithValue({
        message:
          err.response?.data?.message ||
          err.message ||
          "Ошибка при создании новости",
        status: err.response?.status,
      });
    }
  }
);

export const updateNews = createAsyncThunk(
  "news/updateNews",
  async ({ id, data }, thunkApi) => {
    try {
      console.log("Отправляемые данные в запросе:", data, id);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("text", data.text);
      formData.append("news_photo", data.news_photo);
      const res = await api.post(`/news/${id}`, formData);
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
      const res = await api.delete(`/news/${id}`);
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
      // Validate required fields
      if (
        !data.name ||
        !data.description ||
        !data.equipment_photo ||
        !data.min_param ||
        !data.max_param
      ) {
        throw new Error(
          "Отсутствуют обязательные поля: название, описание, фото, минимальный и максимальный параметры"
        );
      }

      // Ensure min_param and max_param are valid integers
      const minParamNum = Number(data.min_param);
      const maxParamNum = Number(data.max_param);

      if (isNaN(minParamNum) || isNaN(maxParamNum)) {
        throw new Error("Параметры должны быть числами");
      }

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);

      // // Convert base64 to blob using utility function
      // const blob = base64ToBlob(data.equipment_photo);
      // formData.append("equipment_photo", blob, "image.jpg");
      formData.append("equipment_photo", data.equipment_photo);

      formData.append("equipment_photo", data.equipment_photo);

      formData.append("min_param", minParamNum);
      formData.append("max_param", maxParamNum);

      const res = await api.post("/equipments/", formData);
      return res.data;
    } catch (err) {
      console.error("Equipment creation error:", {
        error: err,
        response: err.response?.data,
        status: err.response?.status,
        statusText: err.response?.statusText,
        headers: err.response?.headers,
      });
      return thunkApi.rejectWithValue({
        message:
          err.response?.data?.message ||
          err.message ||
          "Ошибка при создании оборудования",
        status: err.response?.status,
        details: err.response?.data,
      });
    }
  }
);

export const updateEquipment = createAsyncThunk(
  "Equipment/updateEquipment",
  async ({ id, data }, thunkApi) => {
    console.log("Отправляемые данные в запросе:", data, id);
    try {
      const res = await api.put(`/equipments/${id}`, data);
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
      const res = await api.delete(`/equipments/${id}`);
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
      // Validate required fields
      if (!data.name || !data.description || !data.solution_photo) {
        throw new Error(
          "Отсутствуют обязательные поля: название, описание и изображение"
        );
      }

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("solution_photo", data.solution_photo);

      formData.append("solution_photo", data.solution_photo);

      const res = await api.post("/solutions/", formData);
      return res.data;
    } catch (err) {
      console.error("Solution creation error:", err);
      return thunkApi.rejectWithValue({
        message:
          err.response?.data?.message ||
          err.message ||
          "Ошибка при создании решения",
        status: err.response?.status,
      });
    }
  }
);

export const updateSolutions = createAsyncThunk(
  "Solutions/updateSolutions",
  async ({ id, data }, thunkApi) => {
    console.log("Отправляемые данные в запросе:", data, id);
    try {
      const res = await api.put(`/solutions/${id}`, data);
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
      const res = await api.delete(`/solutions/${id}`);
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
      const res = await api.post("/orders/", data);
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
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("number", data.number);
      formData.append("date", data.date);
      formData.append("client_name", data.client_name);
      formData.append("state", data.state);
      formData.append("order_amount", data.order_amount);
      // const formData = createFormDataRequest(data, "order");
      const res = await api.put(`/orders/${id}`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const patchOrders = createAsyncThunk(
  "patchOrders/patchOrders",
  async ({ id, state }, thunkApi) => {
    try {
      const res = await api.patch(`/orders/${id}`, state);
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
      const res = await api.delete(`/orders/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getBanner = createAsyncThunk(
  "banner/getBanner",
  async (_, thunkApi) => {
    try {
      const res = await api.get(`/banner/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const updateBanner = createAsyncThunk(
  "banner/updateBanner",
  async (payload, thunkApi) => {
    try {
      // const formData = new FormData();
      // formData.append("name", data.name);
      // formData.append("number", data.number);
      // formData.append("date", data.date);
      // formData.append("client_name", data.client_name);
      // formData.append("state", data.state);
      // formData.append("order_amount", data.order_amount);
      // const formData = createFormDataRequest(data, "order");
      const res = await api.put(`/banner`, formData);
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
    banner: null,
    equipment: [],
    solutions: [],
    routingToOrders: false,
    orders: [],
    data: data,
    isAdmin: false,
    isPopup: false,
    status: false,
    orderNum: null,
    addOrderPopup: false,
    ordersData: [],
    equipmentPopup: false,
    itemId: null,
    addNewItemPopup: false,
    newsPopup: false,
    searchPopup: false,
    statusOrderPopup: false,
    experience: 22,
    guarantee: 3,
  },
  reducers: {
    changeRoutingToOrders: (state, { payload }) => {
      state.routingToOrders = payload;
    },
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
    changeStatusOrderPopup: (state, { payload }) => {
      state.statusOrderPopup = payload;
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
    changeItemId: (state, { payload }) => {
      state.itemId = payload;
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
    changeIsAdmin: (state, { payload }) => {
      state.isAdmin = payload;
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
      // .addCase(deleteNews.fulfilled, (state, action) => {
      //   state.news = action.payload;
      // })
      // .addCase(updateNews.fulfilled, (state, action) => {
      //   state.news = action.payload;
      // })

      .addCase(getAllEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      // .addCase(deleteEquipment.fulfilled, (state, action) => {
      //   state.equipment = action.payload;
      // })
      // .addCase(updateEquipment.fulfilled, (state, action) => {
      //   state.equipment = action.payload;
      // })

      .addCase(getAllSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      // .addCase(deleteSolutions.fulfilled, (state, action) => {
      //   state.solutions = action.payload;
      // })
      // .addCase(updateSolutions.fulfilled, (state, action) => {
      //   state.solutions = action.payload;
      // })

      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      // .addCase(deleteOrders.fulfilled, (state, action) => {
      //   state.orders = action.payload;
      // })
      // .addCase(updateOrders.fulfilled, (state, action) => {
      //   state.orders = action.payload;
      // })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner = action.payload;
      });
  },
});

export const {
  changeStatusOrderPopup,
  changeRoutingToOrders,
  changeIsAdmin,
  changeNumberForMainBanner,
  changeShowSearchPopup,
  changeShowNewsPopup,
  addNewItemToData,
  changeData,
  changeItemId,

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
