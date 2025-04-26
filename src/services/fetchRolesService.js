import api from "./api";

const fetchRolesService = async () => {
  const response = await api.get("/roles");
  return response.data;
};

export default fetchRolesService;
