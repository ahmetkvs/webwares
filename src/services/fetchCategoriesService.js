import api from "./api";

const fetchCategoriesService = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export default fetchCategoriesService;
