import axios from "axios";
import { baseUrl } from "../appConfig.js";
import { getTokenLocalStorage } from "../localstorage/index.js";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const setupInterceptors = (logout, history) => {
  api.interceptors.request.use(function (config) {
    let xToken = getTokenLocalStorage();
    if (xToken) {
      config.headers.Authorization = xToken;
    }
    return config;
  });

  api.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response?.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      let xApiError = error?.response?.data;
      if (xApiError?.status === 401) {
        logout();

        console.log("Token expirado");
      }
      if (xApiError?.status === 403) {
        toast.error("Usuario nao tem permissao");
        history.push('/veiculos');
      }
      return Promise.reject(xApiError);
    }
  );
};

export default api;
export { setupInterceptors };
