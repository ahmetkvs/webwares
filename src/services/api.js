import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  timeout: 1000,
});

export default api;
