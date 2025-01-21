import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
import axios from "axios";
import { fromHalfFloat } from "three/src/extras/DataUtils.js";

// Utility function to convert base64 to blob
// const base64ToBlob = (base64String) => {
//   try {
//     // Extract MIME type and base64 data
//     const [header, base64Data] = base64String.split(",");
//     const mimeType = header.match(/data:(.*?);/)?.[1] || "image/jpeg";

//     const byteCharacters = atob(base64Data);
//     const byteArrays = [];

//     for (let i = 0; i < byteCharacters.length; i++) {
//       byteArrays.push(byteCharacters.charCodeAt(i));
//     }

//     return new Blob([new Uint8Array(byteArrays)], { type: mimeType });
//   } catch (error) {
//     console.error("Error converting base64 to blob:", error);
//     throw new Error("Ошибка при обработке изображения");
//   }
// };

// Create axios instance with default config
const url = `https://nilit1.ru/api`;
const api = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
  },
});

// Add response interceptor to handle errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", {
//       status: error.response?.status,
//       data: error.response?.data,
//       config: error.config,
//     });
//     return Promise.reject(error);
//   }
// );

// Add request interceptor to handle Content-Type
// api.interceptors.request.use((config) => {
//   // Don't set Content-Type for FormData, let the browser set it automatically with the boundary
//   if (config.data instanceof FormData) {
//     delete config.headers["Content-Type"];
//   } else {
//     config.headers["Content-Type"] = "application/json";
//   }
//   return config;
// });

// Add trailing slash to URLs that don't have one
// api.interceptors.request.use((config) => {
//   if (config.url && !config.url.endsWith("/")) {
//     config.url += "/";
//   }
//   return config;
// });

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
      // const blob = base64ToBlob(payload.news_photo);
      // formData.append("news_photo", blob, "image.jpg");
      console.log("отправляемая дата:", {
        title: formData.get("title"),
        text: formData.get("text"),
        news_photo: formData.get("news_photo"),
      });

      const res = await api.post("/news", {
        title: formData.get("title"),
        text: formData.get("text"),
        news_photo: formData.get("news_photo"),
      });
      // const res = await api.post("/news/", {
      //   title: payload.title,
      //   text: payload.text,
      //   news_photo: payload.news_photo,
      // });
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
      const formData = createFormDataRequest(data, "news");
      const res = await api.put(`/news/${id}/`, formData);
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

      // Convert base64 to blob using utility function
      const blob = base64ToBlob(data.equipment_photo);
      formData.append("equipment_photo", blob, "image.jpg");

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
    try {
      const formData = createFormDataRequest(data, "equipment");
      const res = await api.put(`/equipments/${id}/`, formData);
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
      // Validate required fields
      if (!data.name || !data.description || !data.solution_photo) {
        throw new Error(
          "Отсутствуют обязательные поля: название, описание и изображение"
        );
      }

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);

      // Convert base64 to blob using utility function
      const blob = base64ToBlob(data.solution_photo);
      formData.append("solution_photo", blob, "image.jpg");

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
    try {
      const formData = createFormDataRequest(data, "solution");
      const res = await api.put(`/solutions/${id}/`, formData);
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
      console.log(data);
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
      const formData = createFormDataRequest(data, "order");
      const res = await api.put(`/orders/${id}/`, formData);
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
    equipmentId: null,
    newsId: null,
    addNewItemPopup: false,
    newsPopup: false,
    searchPopup: false,
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
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(updateNews.fulfilled, (state, action) => {
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

      .addCase(getAllSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      .addCase(deleteSolutions.fulfilled, (state, action) => {
        state.solutions = action.payload;
      })
      .addCase(updateSolutions.fulfilled, (state, action) => {
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
      });
  },
});

export const {
  changeRoutingToOrders,
  changeIsAdmin,
  changeNumberForMainBanner,
  changeShowSearchPopup,
  changeShowNewsPopup,
  addNewItemToData,
  changeNewsId,
  changeData,
  changeEquipmentId,

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
