import axios from "axios";
import Cookies from "js-cookie";

const apiLogin = axios.create({
  baseURL: "https://new.recensa.ru", // Adjust this based on your API URL
});

// Add request interceptor to add token to protected requests
apiLogin.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle token expiration
apiLogin.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove("access_token");
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);

export default apiLogin;
