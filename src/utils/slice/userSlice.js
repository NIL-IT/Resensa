import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiLogin from "../api";
import Cookies from "js-cookie";
// Create axios instance with default config
const url = `https://new.recensa.ru`;
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
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("text", data.text);
      if (data.news_photo !== undefined) {
        formData.append("news_photo", data.news_photo);
      }
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
export const getEquipmentById = createAsyncThunk(
  "getEquipmentById/getEquipmentById",
  async (id, thunkApi) => {
    try {
      const res = await api.get(`/equipments/${id}`);
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
      const minParamNum = Number(data.min_param);
      const maxParamNum = Number(data.max_param);

      if (isNaN(minParamNum) || isNaN(maxParamNum)) {
        throw new Error("Параметры должны быть числами");
      }

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("sub_header", data.sub_header);
      formData.append("header", data.header);

      formData.append("image_banner", data.image_banner);
      formData.append("image_card", data.image_card);

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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (data.image_banner) {
      formData.append("image_banner", data.image_banner);
    }
    if (data.image_card) {
      formData.append("image_card", data.image_card);
    }
    formData.append("header", data.header);
    formData.append("sub_header", data.sub_header);
    formData.append("min_param", data.min_param);
    formData.append("max_param", data.max_param);

    try {
      const res = await api.put(`/equipments/${id}`, formData);
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
export const getSolutionsById = createAsyncThunk(
  "getSolutionsById/getSolutionsById",
  async (id, thunkApi) => {
    try {
      const res = await api.get(`/solutions/${id}`);
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
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("image_banner", data.image_banner);
      formData.append("image_card", data.image_card);
      formData.append("sub_header", data.sub_header);
      formData.append("header", data.header);

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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);

    if (data.image_banner) {
      formData.append("image_banner", data.image_banner);
    }
    if (data.image_card) {
      formData.append("image_card", data.image_card);
    }
    formData.append("header", data.header);
    formData.append("sub_header", data.sub_header);

    try {
      const res = await api.put(`/solutions/${id}`, formData);
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
      const res = await api.patch(`/orders/${id}/`, data);
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
      const res = await api.patch(
        `/orders/${id}/state?new_state=${state.toString()}`
      );
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
      const formData = new FormData();
      formData.append("first_value_string", payload.first_value_string);
      formData.append("first_value", Number(payload.first_value));
      formData.append("second_value_string", payload.second_value_string);
      formData.append("second_value", Number(payload.second_value));
      const res = await api.put(`/banner/`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const authPost = createAsyncThunk(
  "user/authPost",
  async (credentials, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("username", credentials.username);
      formData.append("password", credentials.password);
      const response = await apiLogin.post("/auth/token", formData);
      return response.data;
    } catch (error) {
      if (error.response?.status === 422) {
        return rejectWithValue({
          message: "Неверное имя пользователя или пароль",
        });
      }
      return rejectWithValue({
        message: "Ошибка сервера. Попробуйте позже.",
      });
    }
  }
);
export const importOrdersExcel = createAsyncThunk(
  "importOrdersExcel/importOrdersExcel",
  async (file, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post("/orders/import/excel", formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const exportOrdersExcel = async (exportFile = false) => {
  fetch("https://nilit1.ru/api/orders/export/excel", {
    method: "GET",
  })
    .then((response) => {
      if (exportFile) {
        if (!response.ok) {
          throw new Error("Ошибка при получении файла");
        }
        return response.blob();
      } else {
        const excelBuffer = response.arrayBuffer();
        const data = parseExcelToCSVArray(Buffer.from(excelBuffer));
        return data;
      }
    })

    .then((blob) => {
      if (exportFile) {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "example.xlsx";
        link.click();
        window.URL.revokeObjectURL(url);
      }
    });
};
export const submitOrder = createAsyncThunk(
  "submitOrder/submitOrder",
  async (data, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("company_name", data.company_name);
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("product_name", data.product_name);

      const res = await api.post("/orders/submit-order/", formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);
const token = Cookies.get("access_token");
const userSlice = createSlice({
  name: "user",
  initialState: {
    news: [],
    banner: null,
    equipment: [],
    solutions: [],
    equipmentById: null,
    solutionsById: null,
    routingToOrders: false,
    orders: [],
    isAdmin: token ? true : false,
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
    token: null,
    isAuthenticated: false,
    error: null,
    excel: null,
    exportExcel: null,
    result: null,
    calcPopup: false,
  },
  reducers: {
    changeCalcPopup: (state, { payload }) => {
      state.calcPopup = payload;
    },
    changeResult: (state, { payload }) => {
      state.result = payload;
    },
    changeEquipmentId: (state, { payload }) => {
      state.equipmentById = payload;
    },
    changeSolutionsId: (state, { payload }) => {
      state.solutionsById = payload;
    },
    changeRoutingToOrders: (state, { payload }) => {
      state.routingToOrders = payload;
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
    changeIsAdmin: (state, { payload }) => {
      state.isAdmin = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })

      .addCase(getAllEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      .addCase(authPost.pending, (state) => {
        state.error = null;
      })
      .addCase(authPost.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(authPost.rejected, (state, action) => {
        state.error = action.payload?.message || "Ошибка авторизации";
      })
      .addCase(importOrdersExcel.fulfilled, (state, action) => {
        state.excel = action.payload;
      })
      .addCase(getAllSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner = action.payload;
      })
      .addCase(getEquipmentById.fulfilled, (state, action) => {
        state.equipmentById = action.payload;
      })
      .addCase(getSolutionsById.fulfilled, (state, action) => {
        state.solutionsById = action.payload;
      });
  },
});

export const {
  changeCalcPopup,
  changeEquipmentId,
  changeSolutionsId,
  changeStatusOrderPopup,
  changeRoutingToOrders,
  changeIsAdmin,
  changeNumberForMainBanner,
  changeShowSearchPopup,
  changeShowNewsPopup,
  changeItemId,
  changeResult,
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
