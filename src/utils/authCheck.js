import { setUser, logoutUser } from "../redux/client/clientActions";
import api from "../services/api";

export async function verifyToken(dispatch) {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  try {
    const response = await api.get("/verify");
    const user = response.data;
    console.log(response);
    console.log(user);

    if (user.token) {
      localStorage.setItem("token", user.token);
      api.defaults.headers.common["Authorization"] = user.token;
    }

    dispatch(setUser(user));
  } catch (error) {
    console.error("Token invalid, logging out.", error);

    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    dispatch(logoutUser());
  }
}
