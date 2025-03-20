import { jsx } from "react/jsx-runtime";
import { lazy, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import pkg from "react-helmet-async";
import "clsx";
const apiLogin = axios.create({
  baseURL: "https://new.recensa.ru/api"
  // Adjust this based on your API URL
});
apiLogin.interceptors.request.use((config) => {
  const token2 = Cookies.get("access_token");
  if (token2) {
    config.headers.Authorization = `Bearer ${token2}`;
  }
  return config;
});
apiLogin.interceptors.response.use(
  (response) => response,
  (error) => {
    var _a;
    if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
      Cookies.remove("access_token");
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);
const url = `https://new.recensa.ru/api`;
const api = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json"
  }
});
const getAllNews = createAsyncThunk(
  "news/getNews",
  async (_, thunkApi) => {
    var _a;
    try {
      const res = await api.get("/news/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const createNews = createAsyncThunk(
  "news/createNews",
  async (payload, thunkApi) => {
    var _a, _b, _c;
    try {
      if (!payload.title || !payload.text || !payload.news_photo) {
        throw new Error(
          "Отсутствуют обязательные поля: заголовок, текст и изображение"
        );
      }
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("text", payload.text);
      formData.append("news_photo", payload.news_photo);
      formData.append("page_description", payload.page_description);
      formData.append("page_title", payload.page_title);
      formData.append("page_keywords", payload.page_keywords);
      formData.append("hidden_seo_text", payload.hidden_seo_text);
      const res = await api.post("/news/", formData);
      return res.data;
    } catch (err) {
      console.error("Upload error:", err);
      return thunkApi.rejectWithValue({
        message: ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message || "Ошибка при создании новости",
        status: (_c = err.response) == null ? void 0 : _c.status
      });
    }
  }
);
const updateNews = createAsyncThunk(
  "news/updateNews",
  async ({ id, data }, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("text", data.text);
      if (data.news_photo !== void 0) {
        formData.append("news_photo", data.news_photo);
      }
      formData.append("page_description", data.page_description);
      formData.append("page_title", data.page_title);
      formData.append("page_keywords", data.page_keywords);
      formData.append("hidden_seo_text", data.hidden_seo_text);
      const res = await api.post(`/news/${id}`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (id, thunkApi) => {
    var _a;
    try {
      const res = await api.delete(`/news/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const getAllEquipment = createAsyncThunk(
  "Equipment/getAllEquipment",
  async (_, thunkApi) => {
    var _a;
    try {
      const res = await api.get("/equipments/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const getEquipmentById = createAsyncThunk(
  "getEquipmentById/getEquipmentById",
  async (id, thunkApi) => {
    var _a;
    try {
      const res = await api.get(`/equipments/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const createEquipment = createAsyncThunk(
  "Equipment/createEquipment",
  async (data, thunkApi) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
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
      formData.append("image_banner_alt", data.image_banner_alt);
      formData.append("image_card_alt", data.image_card_alt);
      formData.append("page_description", data.page_description);
      formData.append("page_title", data.page_title);
      formData.append("page_keywords", data.page_keywords);
      formData.append("extra_description", data.extra_description);
      formData.append("hidden_seo_text", data.hidden_seo_text);
      const res = await api.post("/equipments/", formData);
      return res.data;
    } catch (err) {
      console.error("Equipment creation error:", {
        error: err,
        response: (_a = err.response) == null ? void 0 : _a.data,
        status: (_b = err.response) == null ? void 0 : _b.status,
        statusText: (_c = err.response) == null ? void 0 : _c.statusText,
        headers: (_d = err.response) == null ? void 0 : _d.headers
      });
      return thunkApi.rejectWithValue({
        message: ((_f = (_e = err.response) == null ? void 0 : _e.data) == null ? void 0 : _f.message) || err.message || "Ошибка при создании оборудования",
        status: (_g = err.response) == null ? void 0 : _g.status,
        details: (_h = err.response) == null ? void 0 : _h.data
      });
    }
  }
);
const updateEquipment = createAsyncThunk(
  "Equipment/updateEquipment",
  async ({ id, data }, thunkApi) => {
    var _a;
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
    formData.append("image_banner_alt", data.image_banner_alt);
    formData.append("image_card_alt", data.image_card_alt);
    formData.append("page_description", data.page_description);
    formData.append("page_title", data.page_title);
    formData.append("page_keywords", data.page_keywords);
    formData.append("extra_description", data.extra_description);
    formData.append("hidden_seo_text", data.hidden_seo_text);
    try {
      const res = await api.put(`/equipments/${id}`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const deleteEquipment = createAsyncThunk(
  "Equipment/deleteEquipment",
  async (id, thunkApi) => {
    var _a;
    try {
      const res = await api.delete(`/equipments/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const getAllSolutions = createAsyncThunk(
  "Solutions/getAllSolutions",
  async (_, thunkApi) => {
    var _a;
    try {
      const res = await api.get("/solutions/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const getSolutionsById = createAsyncThunk(
  "getSolutionsById/getSolutionsById",
  async (id, thunkApi) => {
    var _a;
    try {
      const res = await api.get(`/solutions/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const createSolutions = createAsyncThunk(
  "Solutions/createSolutions",
  async (data, thunkApi) => {
    var _a, _b, _c;
    try {
      console.log(data);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("image_banner", data.image_banner);
      formData.append("image_card", data.image_card);
      formData.append("sub_header", data.sub_header);
      formData.append("header", data.header);
      formData.append("image_banner_alt", data.image_banner_alt);
      formData.append("image_card_alt", data.image_card_alt);
      formData.append("page_description", data.page_description);
      formData.append("page_title", data.page_title);
      formData.append("page_keywords", data.page_keywords);
      formData.append("extra_description", data.extra_description);
      formData.append("hidden_seo_text", data.hidden_seo_text);
      const res = await api.post("/solutions/", formData);
      return res.data;
    } catch (err) {
      console.error("Solution creation error:", err);
      return thunkApi.rejectWithValue({
        message: ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message || "Ошибка при создании решения",
        status: (_c = err.response) == null ? void 0 : _c.status
      });
    }
  }
);
const updateSolutions = createAsyncThunk(
  "Solutions/updateSolutions",
  async ({ id, data }, thunkApi) => {
    var _a;
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
    formData.append("image_banner_alt", data.image_banner_alt);
    formData.append("image_card_alt", data.image_card_alt);
    formData.append("page_description", data.page_description);
    formData.append("page_title", data.page_title);
    formData.append("page_keywords", data.page_keywords);
    formData.append("extra_description", data.extra_description);
    formData.append("hidden_seo_text", data.hidden_seo_text);
    console.log(data);
    try {
      const res = await api.put(`/solutions/${id}`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const deleteSolutions = createAsyncThunk(
  "Solutions/deleteSolutions",
  async (id, thunkApi) => {
    var _a;
    try {
      const res = await api.delete(`/solutions/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const getAllOrders = createAsyncThunk(
  "Orders/getAllOrders",
  async (_, thunkApi) => {
    var _a;
    try {
      const res = await api.get("/orders/");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const createOrders = createAsyncThunk(
  "Orders/createOrders",
  async (data, thunkApi) => {
    var _a;
    try {
      const res = await api.post("/orders/", data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
createAsyncThunk(
  "Orders/updateOrders",
  async ({ id, data }, thunkApi) => {
    var _a;
    try {
      const res = await api.patch(`/orders/${id}/`, data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
createAsyncThunk(
  "patchOrders/patchOrders",
  async ({ id, state }, thunkApi) => {
    var _a;
    try {
      const res = await api.patch(
        `/orders/${id}/state?new_state=${state.toString()}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const deleteOrders = createAsyncThunk(
  "orders/deleteOrders",
  async (id, thunkApi) => {
    var _a;
    try {
      const res = await api.delete(`/orders/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const getBanner = createAsyncThunk(
  "banner/getBanner",
  async (_, thunkApi) => {
    var _a;
    try {
      const res = await api.get(`/banner/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const updateBanner = createAsyncThunk(
  "banner/updateBanner",
  async (payload, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("first_value_string", payload.first_value_string);
      formData.append("first_value", payload.first_value);
      formData.append("second_value_string", payload.second_value_string);
      formData.append("second_value", payload.second_value);
      const res = await api.put(`/banner/`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const getCompany = createAsyncThunk(
  "Company/getCompany",
  async (_, thunkApi) => {
    var _a;
    try {
      const res = await api.get(`/company/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const updateCompany = createAsyncThunk(
  "Company/updateCompany",
  async (payload, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("about_main_screen", payload.about_main_screen);
      formData.append("about_unique_screen", payload.about_unique_screen);
      formData.append("about_page_title", payload.about_page_title);
      formData.append("about_page_description", payload.about_page_description);
      formData.append("about_hidden_seo_text", payload.about_hidden_seo_text);
      formData.append("about_page_keywords", payload.about_page_keywords);
      const res = await api.put(`/company/`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const updateHomeSeo = createAsyncThunk(
  "HomeSeo/updateHomeSeo",
  async (payload, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("main_page_title", payload.main_page_title);
      formData.append("main_page_description", payload.main_page_description);
      formData.append("main_hidden_seo_text", payload.main_hidden_seo_text);
      formData.append("main_page_keywords", payload.main_page_keywords);
      const res = await api.put(`/company/`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const updateContactsSeo = createAsyncThunk(
  "contacts/updateContactsSeo",
  async (payload, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("contacts_page_title", payload.contacts_page_title);
      formData.append(
        "contacts_page_description",
        payload.contacts_page_description
      );
      formData.append(
        "contacts_hidden_seo_text",
        payload.contacts_hidden_seo_text
      );
      formData.append("contacts_page_keywords", payload.contacts_page_keywords);
      const res = await api.put(`/company/`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const updateEquipmentSeo = createAsyncThunk(
  "Equipment/updateEquipmentSeo",
  async (payload, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("equipment_page_title", payload.equipment_page_title);
      formData.append(
        "equipment_page_description",
        payload.equipment_page_description
      );
      formData.append(
        "equipment_hidden_seo_text",
        payload.equipment_hidden_seo_text
      );
      formData.append(
        "equipment_page_keywords",
        payload.equipment_page_keywords
      );
      const res = await api.put(`/company/`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const updateSolutionSeo = createAsyncThunk(
  "Solution/updateSolutionSeo",
  async (payload, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("solution_page_title", payload.solution_page_title);
      formData.append(
        "solution_page_description",
        payload.solution_page_description
      );
      formData.append(
        "solution_hidden_seo_text",
        payload.solution_hidden_seo_text
      );
      formData.append("solution_page_keywords", payload.solution_page_keywords);
      const res = await api.put(`/company/`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const authPost = createAsyncThunk(
  "user/authPost",
  async (credentials, { rejectWithValue }) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("username", credentials.username);
      formData.append("password", credentials.password);
      const response = await apiLogin.post("/auth/token", formData);
      return response.data;
    } catch (error) {
      if (((_a = error.response) == null ? void 0 : _a.status) === 422) {
        return rejectWithValue({
          message: "Неверное имя пользователя или пароль"
        });
      }
      return rejectWithValue({
        message: "Ошибка сервера. Попробуйте позже."
      });
    }
  }
);
const importOrdersExcel = createAsyncThunk(
  "importOrdersExcel/importOrdersExcel",
  async (file, thunkApi) => {
    var _a;
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post("/orders/import/excel", formData);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
    }
  }
);
const exportOrdersExcel = async (exportFile = false) => {
  fetch("https://new.recensa.ru/api/orders/export/excel", {
    method: "GET"
  }).then((response) => {
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
  }).then((blob) => {
    if (exportFile) {
      const url2 = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url2;
      link.download = "example.xlsx";
      link.click();
      window.URL.revokeObjectURL(url2);
    }
  });
};
const submitOrder = createAsyncThunk(
  "submitOrder/submitOrder",
  async (data, thunkApi) => {
    var _a;
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
      return thunkApi.rejectWithValue(((_a = err.response) == null ? void 0 : _a.data) || err.message);
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
    company: [],
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
    calcPopup: false
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllNews.fulfilled, (state, action) => {
      state.news = action.payload;
    }).addCase(getAllEquipment.fulfilled, (state, action) => {
      const seriesOrder = [
        "СЕРИЯ RCN",
        "СЕРИЯ RCLEAN",
        "СЕРИЯ RPOOL",
        "СЕРИЯ RCNICE",
        "СЕРИЯ RCROOF",
        "СЕРИЯ RECO",
        "СЕРИЯ RCDUCT",
        "СИСТЕМЫ RCONTROL",
        "СЕРИЯ RCOMP",
        "ХОЛОДИЛЬНОЕ ОБОРУДОВАНИЕ",
        "СМЕСИТЕЛЬНЫЕ УЗЛЫ"
      ];
      function sortByCustomOrder(arr, orderArray) {
        return arr.sort((a, b) => {
          const indexA = orderArray.indexOf(a.name);
          const indexB = orderArray.indexOf(b.name);
          if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
          }
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;
          return 0;
        });
      }
      const sortedData = sortByCustomOrder([...action.payload], seriesOrder);
      state.equipment = sortedData;
    }).addCase(authPost.pending, (state) => {
      state.error = null;
    }).addCase(authPost.fulfilled, (state) => {
      state.error = null;
    }).addCase(authPost.rejected, (state, action) => {
      var _a;
      state.error = ((_a = action.payload) == null ? void 0 : _a.message) || "Ошибка авторизации";
    }).addCase(importOrdersExcel.fulfilled, (state, action) => {
      state.excel = action.payload;
    }).addCase(getAllSolutions.fulfilled, (state, action) => {
      state.solutions = action.payload;
    }).addCase(getAllOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    }).addCase(getBanner.fulfilled, (state, action) => {
      state.banner = action.payload;
    }).addCase(getEquipmentById.fulfilled, (state, action) => {
      state.equipmentById = action.payload;
    }).addCase(getSolutionsById.fulfilled, (state, action) => {
      state.solutionsById = action.payload;
    }).addCase(getCompany.fulfilled, (state, action) => {
      state.company = action.payload;
    });
  }
});
const {
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
  changeShowAddNewItemPopup
} = userSlice.actions;
const userSlice$1 = userSlice.reducer;
configureStore({
  reducer: {
    user: userSlice$1
  }
});
lazy(() => import("./assets/Home-CxuWUBtp.js"));
lazy(() => import("./assets/NotFound-BgsE9Uif.js"));
lazy(() => import("./assets/Equipment-DrRQbmea.js"));
lazy(() => import("./assets/AboutCompany-sld29VYG.js"));
lazy(() => import("./assets/Admin-Fmqr9mzv.js"));
lazy(() => import("./assets/ProductItem-fGmYd_AH.js"));
lazy(() => import("./assets/LoginForm-BfRsUc_P.js"));
lazy(() => import("./assets/Contacts-CK7wTRoC.js"));
lazy(() => import("./assets/NewsPage-CVbCASVv.js"));
lazy(() => import("./assets/Popup-Cw_pOdq6.js"));
lazy(() => import("./assets/StatusPopup-DSa_711T.js"));
lazy(
  () => import("./assets/AddOrderPopup-WRofZoia.js")
);
lazy(
  () => import("./assets/ChangeEquipmentPopup-0eD3cVcy.js")
);
lazy(() => import("./assets/AddNewItem-bUF4f5S4.js"));
lazy(() => import("./assets/SearchPopup-WvAiRzyL.js"));
const { HelmetProvider } = pkg;
function render(url2) {
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx("div", { children: "HI" }) })
  );
  return {
    html,
    head: helmetContext.helmet ? `
      ${helmetContext.helmet.title.toString()}
      ${helmetContext.helmet.meta.toString()}
      ${helmetContext.helmet.link.toString()}
    ` : ""
  };
}
export {
  updateBanner as A,
  deleteNews as B,
  getCompany as C,
  updateCompany as D,
  updateHomeSeo as E,
  updateContactsSeo as F,
  updateEquipmentSeo as G,
  updateSolutionSeo as H,
  exportOrdersExcel as I,
  changeOrderNumber as J,
  changeRoutingToOrders as K,
  getEquipmentById as L,
  changeSolutionsId as M,
  getSolutionsById as N,
  changeEquipmentId as O,
  authPost as P,
  changeItemId as a,
  changeShowStatus as b,
  changeShowPopup as c,
  changeAddOrderPopup as d,
  createOrders as e,
  changeEquipmentPopup as f,
  getAllOrders as g,
  updateSolutions as h,
  updateNews as i,
  changeShowAddNewItemPopup as j,
  createNews as k,
  getAllNews as l,
  createEquipment as m,
  getAllEquipment as n,
  createSolutions as o,
  getAllSolutions as p,
  changeShowSearchPopup as q,
  changeStatusOrderPopup as r,
  render,
  submitOrder as s,
  deleteOrders as t,
  updateEquipment as u,
  changeIsAdmin as v,
  deleteEquipment as w,
  deleteSolutions as x,
  importOrdersExcel as y,
  getBanner as z
};
