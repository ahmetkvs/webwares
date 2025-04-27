import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  timeout: 1000,
});

const token = localStorage.getItem("token");

if (token) {
  api.defaults.headers.common["Authorization"] = token;
}

export default api;
