import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, lazy, useRef, Suspense, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useDispatch, useSelector, Provider } from "react-redux";
import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import pkg from "react-helmet-async";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Link, useNavigate, Routes, Route, useLocation } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
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
const patchOrders = createAsyncThunk(
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
const store = configureStore({
  reducer: {
    user: userSlice$1
  }
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Button({
  text,
  className = "",
  icon = false,
  onClick = null,
  white = false,
  href = "",
  iconWidth,
  type = "button",
  noLink = false,
  target = null
}) {
  return noLink ? /* @__PURE__ */ jsx(
    "button",
    {
      to: href,
      className: cn(
        "bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all text-center",
        className
      ),
      onClick,
      children: text
    }
  ) : !icon ? /* @__PURE__ */ jsx(
    Link,
    {
      to: href,
      className: cn(
        "bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all text-center",
        className
      ),
      onClick,
      children: text
    }
  ) : /* @__PURE__ */ jsx(Link, { to: href, target, children: /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      className: cn(
        "group bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase flex-center gap-5",
        className
      ),
      onClick,
      children: [
        white ? /* @__PURE__ */ jsx(
          "img",
          {
            className: `group-hover:translate-x-1 transition-all ${iconWidth ? iconWidth : ""}`,
            src: "/icon/arrow_right.svg",
            alt: "arrow"
          }
        ) : /* @__PURE__ */ jsx(
          "img",
          {
            className: `group-hover:translate-x-1 transition-all ${iconWidth ? iconWidth : ""}`,
            src: "/icon/arrow.svg",
            alt: "arrow"
          }
        ),
        /* @__PURE__ */ jsx("p", { children: text })
      ]
    }
  ) });
}
const BurgerButton = ({ list, handleClickLink, isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(0);
  useEffect(() => {
    setPageWidth(document.body.scrollWidth);
  }, []);
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickLinkBurger = (i, path) => {
    setIsOpen(false);
    handleClickLink(i, path);
    handleChangeShowPopup(false);
  };
  return /* @__PURE__ */ jsxs("section", { className: "md:hidden ", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: `flex absolute  top-[20px] flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[80] ${isAdmin ? `right-5` : "right-10"}`,
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `block w-6 h-0.5 bg-gray-400 transform transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `block w-6 h-0.5 bg-gray-400 ${isOpen ? "opacity-0" : ""}`
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `block w-6 h-0.5 bg-gray-400 transform transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("aside", { className: "pt-10 fixed top-0 left-0 w-[100vw] bg-white shadow-lg p-4 z-50", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col  gap-4", children: [
      /* @__PURE__ */ jsx("nav", { className: "mt-2", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 text-sm", children: list.map(({ name, path }, i) => /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => handleClickLinkBurger(i, path),
          className: "text-gray-400 hover:text-gray-300 cursor-pointer text-xl",
          children: /* @__PURE__ */ jsx(Link, { to: path, children: name })
        },
        i
      )) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-gray-400 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-gray-400 text-sm", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "mailto:office@recensa.ru",
              className: "hover:text-gray-600",
              children: "office@recensa.ru"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "tel:+73832092088",
              className: "hover:text-gray-600",
              children: "+7 383 209 20 88"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-3 mb-3", children: [
          /* @__PURE__ */ jsx("a", { target: "_blank", href: "#", className: "hover:opacity-80", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/icon/telegram.svg",
              alt: "telegram",
              className: "w-8"
            }
          ) }),
          /* @__PURE__ */ jsx("a", { target: "_blank", href: "#", className: "hover:opacity-80", children: /* @__PURE__ */ jsx("img", { src: "/icon/wa.svg", alt: "whatsapp", className: "w-8" }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => dispatch(changeShowSearchPopup(true)),
              className: "hover:opacity-80",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/icon/search_btn.svg",
                  alt: "search",
                  className: "w-8"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => handleChangeShowPopup(true),
            text: "заказать звонок",
            className: "w-full hover:bg-gray-450 text-sm"
          }
        )
      ] })
    ] }) })
  ] });
};
const cyrillicToLatin = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
  А: "A",
  Б: "B",
  В: "V",
  Г: "G",
  Д: "D",
  Е: "E",
  Ё: "E",
  Ж: "Zh",
  З: "Z",
  И: "I",
  Й: "Y",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "Kh",
  Ц: "Ts",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Shch",
  Ъ: "",
  Ы: "Y",
  Ь: "",
  Э: "E",
  Ю: "Yu",
  Я: "Ya"
};
function useLatinFormat(text) {
  return text.split("").map((char) => cyrillicToLatin[char] || char).join("").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
function Header() {
  var _a;
  const dispatch = useDispatch();
  useNavigate();
  const { isAdmin, equipment, solutions } = useSelector(({ user }) => user);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navList = [
    { name: "Главная", path: "/" },
    { name: "Оборудование", path: "/equipment", dropdownItems: equipment },
    { name: "Решения", path: "/solutions", dropdownItems: solutions },
    { name: "О компании", path: "/about" },
    {
      name: "Заказы",
      path: `${isAdmin ? `/admin/1` : `/equipment/${useLatinFormat((_a = equipment[0]) == null ? void 0 : _a.name)}`}`
    },
    { name: "Контакты", path: "/contact" }
  ];
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickLink = (i, path) => {
    if (!isAdmin && +i === 4) {
      dispatch(changeRoutingToOrders(true));
      dispatch(changeEquipmentId(equipment[0]));
      dispatch(changeSolutionsId(null));
    }
    if (!isAdmin) {
      if (i === 4) {
        dispatch(changeRoutingToOrders(true));
      } else {
        dispatch(changeRoutingToOrders(false));
      }
    }
  };
  const handleClickItem = async (id, name) => {
    if (name === "Оборудование") {
      await dispatch(getEquipmentById(id));
      dispatch(changeSolutionsId(null));
    } else {
      await dispatch(getSolutionsById(id));
      dispatch(changeEquipmentId(null));
    }
    dispatch(changeItemId(id));
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `container sticky md:static top-0 left-0 bg-white z-[60]  min-w-[100vw] lg:min-w-[auto] pt-6 lg:pt-8 ${isAdmin && "flex justify-between"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `pl-8 sm:pl-10 md:pl-14 lg:pl-0 flex justify-between items-center border-b border-gray-400 pb-6 ${isAdmin && "border-none"}`,
            children: [
              /* @__PURE__ */ jsx(Link, { to: "/", target: isAdmin ? "_blank" : "_self", className: "mb-0", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-[200px] sm:w-[230px] lg:w-[313px]",
                  src: "/icon/logo.svg",
                  alt: "logo",
                  title: "Перейти на главную страницу"
                }
              ) }),
              /* @__PURE__ */ jsx(
                BurgerButton,
                {
                  isAdmin,
                  list: navList,
                  handleClickLink
                }
              ),
              !isAdmin && /* @__PURE__ */ jsxs("div", { className: "hidden pr-10 lg:pr-0 md:flex flex-col items-center lg:items-center gap-4 lg:gap-6 2xl:flex-row 2xl:items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      target: "_blank",
                      href: "mailto:office@recensa.ru",
                      className: "hover:text-gray-600 ",
                      children: "office@recensa.ru"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      target: "_blank",
                      href: "tel:+73832092088",
                      className: "hover:text-gray-600",
                      children: "+7 383 209 20 88"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-normal  md:justify-between lg:justify-normal w-full lg:w-[auto] flex-col sm:flex-row items-center gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("a", { target: "_blank", href: "#", className: "hover:opacity-80", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/icon/telegram.svg",
                        alt: "telegram",
                        title: "Телеграмм",
                        className: "w-8 "
                      }
                    ) }),
                    /* @__PURE__ */ jsx("a", { target: "_blank", href: "#", className: "hover:opacity-80", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/icon/wa.svg",
                        alt: "whatsapp",
                        title: "Ватсап",
                        className: "w-8 "
                      }
                    ) }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => dispatch(changeShowSearchPopup(true)),
                        className: "hover:opacity-80",
                        children: /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "/icon/search_btn.svg",
                            alt: "search",
                            title: "Поиск",
                            className: "w-8 "
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => handleChangeShowPopup(true),
                      text: "заказать звонок",
                      className: "w-full sm:w-auto md:px-2 md:text-xs lg:py-[9px] lg:px-[20px] xl:px-[30px] hover:bg-gray-450 lg:text-sm",
                      noLink: true
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx("aside", { children: /* @__PURE__ */ jsx(
          "nav",
          {
            itemScope: true,
            itemType: "http://schema.org/SiteNavigationElement",
            className: "mt-6 hidden md:block",
            children: /* @__PURE__ */ jsx(
              "menu",
              {
                itemProp: "about",
                itemScope: true,
                itemType: "http://schema.org/ItemList",
                className: "flex flex-wrap justify-center xs:gap-x-4 lg:gap-x-8 gap-y-2 text-sm sm:text-base",
                children: navList.map(({ name, path, dropdownItems }, i) => /* @__PURE__ */ jsxs(
                  "li",
                  {
                    itemProp: "itemListElement",
                    itemScope: "",
                    itemType: "http://schema.org/ItemList",
                    className: `relative text-gray-400 hover:text-gray-300 cursor-pointer pb-4 ${isAdmin && i === 4 && "hidden"}`,
                    onMouseEnter: () => setHoveredIndex(i),
                    onMouseLeave: () => setHoveredIndex(null),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                        isAdmin ? /* @__PURE__ */ jsx(
                          Link,
                          {
                            onClick: () => handleClickLink(i),
                            target: "_blank",
                            to: path,
                            itemProp: "url",
                            children: name
                          }
                        ) : /* @__PURE__ */ jsx(
                          Link,
                          {
                            onClick: () => handleClickLink(i),
                            itemProp: "url",
                            to: path,
                            children: name
                          }
                        ),
                        dropdownItems && dropdownItems.length > 0 && /* @__PURE__ */ jsx(Fragment, { children: hoveredIndex === i ? /* @__PURE__ */ jsx(ChevronUp, { width: 20 }) : /* @__PURE__ */ jsx(ChevronDown, { width: 20 }) })
                      ] }),
                      dropdownItems && dropdownItems.length > 0 && /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `absolute left-0 top-[30px] w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20  ${hoveredIndex === i ? "block" : "hidden"}`,
                          children: dropdownItems.map((item, index) => /* @__PURE__ */ jsx(
                            Link,
                            {
                              to: `${path}/${useLatinFormat(item.name)}`,
                              className: "block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-600",
                              onClick: () => handleClickItem(item.id, name),
                              children: item.name
                            },
                            index
                          ))
                        }
                      ),
                      /* @__PURE__ */ jsx("meta", { itemProp: "name", content: name })
                    ]
                  },
                  i
                ))
              }
            )
          }
        ) })
      ]
    }
  );
}
const ROUTES = {
  HOME: "/",
  EQUIPMENT: "/equipment",
  SOLUTIONS: "/solutions",
  ABOUT: "/about",
  CONTACT: "/contact",
  ADMIN: "/admin/:id",
  EQUIPMENT_PRODUCT: "/equipment/:id",
  SOLUTIONS_PRODUCT: "/solutions/:id",
  NEWS: "/news/:name",
  AUTH: "/auth"
};
const Home = lazy(() => import("./assets/Home-CbHIzxW-.js"));
const NotFound = lazy(() => import("./assets/NotFound-BytFK6Zq.js"));
const Equipment = lazy(() => import("./assets/Equipment-DOZTefee.js"));
const AboutCompany = lazy(() => import("./assets/AboutCompany-BJXrudqB.js"));
const Admin = lazy(() => import("./assets/Admin-bymlltxo.js"));
const ProductItem = lazy(() => import("./assets/ProductItem-DR7vFTW0.js"));
const LoginForm = lazy(() => import("./assets/LoginForm-Hic2uBcY.js"));
const Contacts = lazy(() => import("./assets/Contacts-Btq5to1b.js"));
const NewsPage = lazy(() => import("./assets/NewsPage-DDCnI1co.js"));
function AppRoutes({
  company,
  equipment,
  solutions,
  banner,
  news
}) {
  const { isAdmin } = useSelector(({ user }) => user);
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: ROUTES.AUTH, element: /* @__PURE__ */ jsx(LoginForm, {}) }),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: ROUTES.HOME,
        element: /* @__PURE__ */ jsx(
          Home,
          {
            equipment,
            solutions,
            banner,
            news,
            company
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: ROUTES.EQUIPMENT,
        element: /* @__PURE__ */ jsx(
          Equipment,
          {
            company: {
              hidden_seo_text: company.equipment_hidden_seo_text,
              page_title: company.equipment_page_title,
              page_description: company.equipment_page_description,
              page_keywords: company.equipment_page_keywords,
              url: "https://new.recensa.ru/equipment"
            },
            title: "Оборудование",
            text: `Recensa предлагает широкий ассортимент вентиляционного оборудования 
              для коммерческих, промышленных и жилых объектов. В линейке представлены 
              установки общего и специализированного назначения, системы вентиляции, 
              осушения, кондиционирования и автоматизации. Каждая серия разработана с 
              учетом энергоэффективности, надежности и удобства эксплуатации. 

`,
            data: equipment,
            bannerImg: "/img/newbanner.png",
            placeholderSrc: "/img/newbanner_compress.png"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: ROUTES.SOLUTIONS,
        element: /* @__PURE__ */ jsx(
          Equipment,
          {
            company: {
              hidden_seo_text: company.solution_hidden_seo_text,
              page_title: company.solution_page_title,
              page_description: company.solution_page_description,
              page_keywords: company.solution_page_keywords,
              url: "https://new.recensa.ru/solutions"
            },
            title: "Решения",
            text: `Recensa разрабатывает и поставляет климатические системы для объектов
               с особыми требованиями. Наши технологии помогают создать комфортный и безопасный 
               климат в любых условиях. Мы предлагаем комплексные системы для
               вентиляции, осушения, охлаждения и 
               автоматизации, адаптированное под 
               конкретные задачи бизнеса и инфраструктуры.
`,
            data: solutions,
            bannerImg: "/img/newsol_banner.png",
            placeholderSrc: "/img/newsol_banner_compress.png"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: ROUTES.EQUIPMENT_PRODUCT,
        element: /* @__PURE__ */ jsx(ProductItem, { list: equipment })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: ROUTES.SOLUTIONS_PRODUCT,
        element: /* @__PURE__ */ jsx(ProductItem, { list: solutions })
      }
    ),
    /* @__PURE__ */ jsx(Route, { path: ROUTES.ABOUT, element: /* @__PURE__ */ jsx(AboutCompany, { company }) }),
    isAdmin && /* @__PURE__ */ jsx(Route, { path: ROUTES.ADMIN, element: /* @__PURE__ */ jsx(Admin, {}) }),
    /* @__PURE__ */ jsx(Route, { path: ROUTES.CONTACT, element: /* @__PURE__ */ jsx(Contacts, { company }) }),
    /* @__PURE__ */ jsx(Route, { path: ROUTES.NEWS, element: /* @__PURE__ */ jsx(NewsPage, { news }) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] });
}
function Widget() {
  const dispatch = useDispatch();
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: () => dispatch(changeShowPopup(true)),
      className: "fixed bottom-8 right-8 cursor-pointer z-50",
      children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "max-w-[50px] max-h-[50px] animateWidget",
          src: "/icon/widget.svg",
          alt: "Позвони нам",
          title: "Нажмите, чтобы заказать звонок"
        }
      )
    }
  );
}
function Select({
  handleSelectChange,
  options: options2,
  className,
  border,
  placeholder
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(placeholder);
  useEffect(() => {
    handleSelectChange(selected);
  }, [selected]);
  return /* @__PURE__ */ jsxs("div", { className: `relative w-[115px] text-gray-400 mt-[13px] ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: `w-full flex items-center justify-between px-3 py-2 border border-gray-400 ${border ? "border-none" : ""}`,
        children: [
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `${border ? "text-gray-400 font-normal text-sm md:text-base" : ""}`,
              children: selected
            }
          ),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute w-full mt-1 border border-gray-200  bg-white shadow-lg `,
        children: /* @__PURE__ */ jsx("ul", { className: "py-1", children: options2.map((option) => /* @__PURE__ */ jsx(
          "li",
          {
            className: "px-3 py-1.5 hover:bg-gray-100 cursor-pointer",
            onClick: () => {
              setSelected(option.value);
              setIsOpen(false);
            },
            children: option.label
          },
          option.value
        )) })
      }
    )
  ] });
}
const options = [
  { label: "Доставлен", value: "Доставлен" },
  { label: "Отменен", value: "Отменен" },
  { label: "Оплачен", value: "Оплачен" }
];
function ChangeStatusPopup() {
  const dispatch = useDispatch();
  const { itemId, orders } = useSelector(({ user }) => user);
  const [selectedOrder, setSelectedOrder] = useState(
    orders.filter((item) => item.id === itemId)
  );
  const numberOfOrders = selectedOrder[0].number;
  const [formData, setFormData] = useState(selectedOrder[0].state);
  const handleSelectChange = (value) => {
    setFormData(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedOrder) {
        await dispatch(
          patchOrders({
            id: itemId,
            state: formData
          })
        );
        setFormData("");
        dispatch(changeItemId(null));
        dispatch(changeStatusOrderPopup(false));
      } else {
        alert("Заказ с указанным номером не найден среди выбранных.");
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
      alert(
        "Не удалось изменить статус заказа. Пожалуйста, попробуйте еще раз."
      );
    }
  };
  const handleClose = () => {
    dispatch(changeItemId(null));
    dispatch(changeStatusOrderPopup(false));
  };
  return /* @__PURE__ */ jsx("section", { className: "fixed inset-0 flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 bg-black bg-opacity-50", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] \r\n      xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] \r\n      md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] \r\n      lg:max-w-[500px] xl:max-w-[663px] relative",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleClose(),
            className: "absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsxs("h2", { className: "text-center text-base xs:text-base sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-10", children: [
          "Изменить статус заказа № ",
          numberOfOrders || "Номер не найден"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-[12px] xs:space-y-[14px] sm:space-y-[20px] md:space-y-[24px] lg:space-y-[40px]", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]", children: /* @__PURE__ */ jsx(
            Select,
            {
              handleSelectChange,
              options,
              placeholder: "Выберите новый статус",
              border: true,
              className: "w-full p-2 bg-gray-75 rounded focus:outline-none focus:ring-2 font-normal text-base text-gray-400 placeholder:text-gray-150"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleSubmit,
              className: "w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white uppercase rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",
              children: "Сохранить"
            }
          )
        ] })
      ]
    }
  ) });
}
function Title({ text, className = "", itemProp, ref }) {
  return /* @__PURE__ */ jsx(
    "h2",
    {
      ...itemProp ? { itemProp } : {},
      ...ref ? { ref } : {},
      itemProp,
      className: cn("text-[48px] text-gray-400 uppercase", className),
      children: text
    }
  );
}
function EquipmentType() {
  const ref = useRef(null);
  const { result, equipment } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  document.body.style.overflow = "hidden";
  function findItemWithLowestMinParam(array, targetNumber) {
    if (!(array == null ? void 0 : array.length) || typeof targetNumber !== "number" || isNaN(targetNumber)) {
      return null;
    }
    try {
      const filteredItems = array.filter((item) => {
        const min = Number(item.min_param);
        const max = Number(item.max_param);
        if (isNaN(min) || isNaN(max) || min === void 0 || max === void 0) {
          return false;
        }
        return targetNumber >= min && targetNumber <= max;
      });
      if (!filteredItems.length) {
        return null;
      }
      if (filteredItems.length === 1) {
        return filteredItems[0].id;
      }
      const sortedItems = [...filteredItems].sort((a, b) => {
        const minA = Number(a.min_param);
        const minB = Number(b.min_param);
        return minA - minB;
      });
      return sortedItems[0].id;
    } catch (error) {
      console.error("Error in findItemWithLowestMinParam:", error);
      return null;
    }
  }
  const [activeIndex, setIndex] = useState(
    findItemWithLowestMinParam(equipment, result)
  );
  useEffect(() => {
    if (findItemWithLowestMinParam(equipment, result)) {
      setIndex(findItemWithLowestMinParam(equipment, result));
    } else {
      setIndex(equipment[0].id);
    }
  }, [result, equipment]);
  const handleClick = (id) => setIndex(activeIndex === id ? null : id);
  const findImage = () => {
    if (!activeIndex) return "/img/placeholder.svg";
    const img = equipment.find(({ id }) => id === activeIndex);
    return img ? img : null;
  };
  const handleClickButton = async (id) => {
    await dispatch(getEquipmentById(id));
    dispatch(changeRoutingToOrders(false));
    dispatch(changeItemId(id));
    dispatch(changeCalcPopup(false));
    dispatch(changeShowPopup(true));
  };
  const handleClose = () => {
    dispatch(changeCalcPopup(false));
  };
  return /* @__PURE__ */ jsx("section", { className: "min-h-[90%] min-w-[90%] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll scrollbar-hide", children: /* @__PURE__ */ jsxs("div", { className: " bg-white pt-2 xs:pt-3 sm:pt-4  rounded-lg min-w-[100%] min-h-[90vh]  relative  ", children: [
    /* @__PURE__ */ jsx("div", { className: "sticky z-50 flex-center top-0 left-0 bg-white ", children: /* @__PURE__ */ jsx("div", { className: "w-full  ", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => handleClose(),
        className: " text-xl absolute top-2 right-4 text-gray-500  hover:text-gray-700",
        children: "✕"
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: " h-full mt-14 md:mt-0 flex-center justify-center w-full \r\n   px-4 mb-10 lg:mb-20",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-full max-w-[300px] xs:max-w-[400px] \r\n        sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] \r\n        xl:max-w-[1200px] 2xl:max-w-[1300px]  pt-0 \r\n         md:pt-16 lg:pt-18 xl:pt-10 xl:pb-10",
            children: [
              /* @__PURE__ */ jsx(
                Title,
                {
                  text: "оборудование",
                  className: " pt-0 xs:pt-5 inline-block border-b border-gray-400 text-lg xs:text-xl sm:text-2xl font-normal"
                }
              ),
              /* @__PURE__ */ jsx(
                Title,
                {
                  text: "ВЫБЕРИТЕ ТИП ОБОРУДОВАНИЯ",
                  className: "pt-6 xs:pt-7 sm:pt-8 md:pt-9 lg:pt-10 text-4xl leading-[40px] lg:text-[48px] lg:leading-[61px]"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "w-full md:w-[500px] lg:w-[600px] xl:w-[735px] text-gray-900 text-base xs:text-lg sm:text-xl pb-[20px] xs:pb-[25px] sm:pb-[30px] md:pb-[35px] lg:pb-[40px] pt-4 xs:pt-5 sm:pt-6", children: "Предварительные выводы неутешительны: сплочённость команды профессионалов обеспечивает широкому кругу (специалистов) участие в формировании поставленных обществом задач. Безусловно." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col  xl:items-start xl:flex-row xl:justify-between w-full gap-8 lg:gap-10", children: [
                /* @__PURE__ */ jsx("div", { className: ` transition-all duration-500 relative `, children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `space-y-1 pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-0 xl:pb-20 h-[500px]  xl:h-[600px]`,
                    children: equipment.map(
                      ({ name, description, min_param, max_param, id }) => /* @__PURE__ */ jsxs(
                        "div",
                        {
                          ref,
                          onClick: () => handleClick(id),
                          className: "flex flex-col w-full xs:w-[320px] sm:w-[350px] md:w-[375px] lg:w-[500px] xl:w-[320px] 2xl:w-[400px]\r\n                       hover:bg-gray-50 cursor-pointer ",
                          children: [
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: `flex justify-between items-center px-1 py-2 ${activeIndex === id ? "bg-gray-50" : ""}`,
                                children: [
                                  /* @__PURE__ */ jsx(
                                    "p",
                                    {
                                      className: `text-gray-900 text-base xs:text-lg sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl uppercase`,
                                      children: name
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "img",
                                    {
                                      className: `w-[14px] transition-all duration-300 ${activeIndex !== id ? "-rotate-90" : "rotate-0"}`,
                                      src: "/icon/small_arrow.svg",
                                      alt: ""
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: `transition-all overflow-hidden duration-300 ease-in-out bg-gray-50 rounded px-4
                        ${activeIndex === id ? "max-h-[500px] opacity-100 py-4 mb-2 translate-y-0" : "max-h-0 opacity-0 py-0 -translate-y-2"}`,
                                children: [
                                  /* @__PURE__ */ jsx("p", { className: `text-gray-700 mb-2 `, children: description }),
                                  /* @__PURE__ */ jsxs("p", { className: `text-gray-700 mb-2 `, children: [
                                    "Минимальный параметр: ",
                                    min_param,
                                    " М³/ч"
                                  ] }),
                                  /* @__PURE__ */ jsxs("p", { className: `text-gray-700 mb-2 `, children: [
                                    "Максимальный параметр: ",
                                    max_param,
                                    " М³/ч"
                                  ] })
                                ]
                              }
                            )
                          ]
                        },
                        id
                      )
                    )
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                  /* @__PURE__ */ jsx("div", { className: " h-[300px] lg:h-[400px] flex-center justify-center ", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: findImage().image_card || equipment[0].image_card || "/img/placeholder.svg",
                      alt: "оборудование",
                      className: "w-full \r\n                max-w-[300px] lg:max-w-[400px] xl:max-w-[550px] \r\n                2xl:max-w-[570px] max-h-[337px] object-contain"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "w-[742px] border-t border-gray-400 pt-2 xs:pt-3 \r\n              sm:pt-4 mt-[30px] xs:mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[25px] \r\n              flex-col 2xl:flex-row  items-center 2xl:flex-center  xl:gap-4 gap-4  lg:justify-between  \r\n              max-w-[320px] sm:max-w-[350px] lg:max-w-[600px] xl:max-w-[530px] 2xl:max-w-[680px] 3xl:max-w-[742px] mb-10 xl:mb-0 ",
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-row xl:w-[100%]  2xl:w-[55%] justify-between mb-5 2xl:mb-0", children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
                            /* @__PURE__ */ jsx("p", { className: "text-left text-base xs:text-lg sm:text-xl uppercase", children: findImage().name || equipment[0].name }),
                            /* @__PURE__ */ jsx("p", { className: "text-left text-sm xs:text-base xl:max-w-[400px] 2xl:max-w-[200px] 3xl:max-w-auto uppercase", children: findImage().sub_header || equipment[0].sub_header })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                            /* @__PURE__ */ jsxs("p", { className: "text-base xs:text-lg sm:text-xl lg:text-base 2xl:text-xl", children: [
                              "от ",
                              findImage().min_param || equipment[0].min_param,
                              " ",
                              "м3/ч"
                            ] }),
                            /* @__PURE__ */ jsxs("p", { className: "text-sm xs:text-base", children: [
                              "до ",
                              findImage().max_param || equipment[0].max_param,
                              " ",
                              "м3/ч"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            onClick: () => handleClickButton(findImage().id),
                            icon: true,
                            text: "оформить заказ",
                            iconWidth: "w-[20px] xs:w-[25px] sm:w-[30px]",
                            className: "text-sm py-4   lg:pr-6 lg:pl-4 2xl:pr-8 2xl:pl-5 lg:text-sm  2xl:text-base"
                          }
                        )
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] }) });
}
const Popup = lazy(() => import("./assets/Popup-x_DfzfTT.js"));
const StatusPopup = lazy(() => import("./assets/StatusPopup-DvrIQe62.js"));
const AddOrderPopup = lazy(
  () => import("./assets/AddOrderPopup-BlGZA30i.js")
);
const ChangeEquipmentPopup = lazy(
  () => import("./assets/ChangeEquipmentPopup-Bw54RW1B.js")
);
const AddNewItem = lazy(() => import("./assets/AddNewItem--WElxn-u.js"));
const SearchPopup = lazy(() => import("./assets/SearchPopup-OEXq5UjI.js"));
function App() {
  const { pathname } = useLocation();
  const isLoginForm = pathname === "/auth" || pathname === "/auth/";
  const {
    isPopup,
    status,
    addOrderPopup,
    equipmentPopup,
    addNewItemPopup,
    searchPopup,
    statusOrderPopup,
    equipment,
    solutions,
    banner,
    news,
    orders,
    calcPopup,
    company
  } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const isActivePopup = isPopup || status || addOrderPopup || equipmentPopup || addNewItemPopup || searchPopup || statusOrderPopup || calcPopup;
  const [loading, setLoading] = useState(true);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    if (!equipment.length || !news.length || !solutions.length) {
      const fetchData = async () => {
        setLoading(true);
        try {
          await dispatch(getAllNews());
          await dispatch(getAllEquipment());
          await dispatch(getAllSolutions());
          await dispatch(getBanner());
          await dispatch(getCompany());
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [dispatch, equipment.length, news.length, solutions.length]);
  return !loading ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    !isLoginForm && /* @__PURE__ */ jsx(Widget, {}),
    /* @__PURE__ */ jsxs("div", { className: `${isActivePopup && "blur-md bg-gray-200"}`, children: [
      !isLoginForm && /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(
        Suspense,
        {
          fallback: /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center  ", children: /* @__PURE__ */ jsx("div", { className: "loader" }) }),
          children: /* @__PURE__ */ jsx(
            AppRoutes,
            {
              equipment,
              solutions,
              company,
              banner,
              news,
              orders
            }
          )
        }
      )
    ] }),
    isPopup && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(Popup, {}) }),
    status && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(StatusPopup, { orders }) }),
    addOrderPopup && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(AddOrderPopup, {}) }),
    equipmentPopup && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(ChangeEquipmentPopup, {}) }),
    addNewItemPopup && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(AddNewItem, {}) }),
    searchPopup && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(SearchPopup, {}) }),
    statusOrderPopup && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(ChangeStatusPopup, {}) }),
    calcPopup && /* @__PURE__ */ jsx(Suspense, { fallback: "...Загрузка", children: /* @__PURE__ */ jsx(EquipmentType, {}) })
  ] }) : /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0  z-50 bg-white min-w-[100vw] min-h-[100vh] flex-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "loader" }) });
}
const { HelmetProvider } = pkg;
function render(url2) {
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(StaticRouter, { location: url2, children: /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(App, {}) }) }) }) })
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
  importOrdersExcel as A,
  Button as B,
  getBanner as C,
  updateBanner as D,
  deleteNews as E,
  getCompany as F,
  updateCompany as G,
  updateHomeSeo as H,
  updateContactsSeo as I,
  updateEquipmentSeo as J,
  updateSolutionSeo as K,
  exportOrdersExcel as L,
  changeOrderNumber as M,
  changeRoutingToOrders as N,
  getEquipmentById as O,
  changeSolutionsId as P,
  getSolutionsById as Q,
  ROUTES as R,
  Select as S,
  Title as T,
  changeEquipmentId as U,
  authPost as V,
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
  cn as r,
  render,
  submitOrder as s,
  useLatinFormat as t,
  updateEquipment as u,
  changeStatusOrderPopup as v,
  deleteOrders as w,
  changeIsAdmin as x,
  deleteEquipment as y,
  deleteSolutions as z
};
