import axios from "axios";
const axiosContainer = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/api/v1/',
  headers: { authorization: "Bearer" },
});

axiosContainer.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosContainer;
