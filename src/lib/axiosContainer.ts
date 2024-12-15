import axios from "axios";
const axiosContainer = axios.create({
  withCredentials: true,
  headers: { authorization: "Bearer" },
});

axiosContainer.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosContainer;
