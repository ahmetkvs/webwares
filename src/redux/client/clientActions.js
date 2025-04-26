import { toast } from "react-toastify";
import api from "../../services/api";
import fetchRolesService from "../../services/fetchRolesService";
import { formatLogin } from "../../utils/formatObject";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const roles = await fetchRolesService();
      dispatch(setRoles(roles));
    } catch (error) {
      console.error("Error fetching roles: ", error);
    }
  };
};

export const loginUser = (credentials, history, fromPath) => {
  return async (dispatch) => {
    try {
      const formattedCredentials = formatLogin(credentials);
      const response = await api.post("/login", formattedCredentials);
      const { token, name, email, role_id } = response.data;

      dispatch(setUser({ token, name, email, role_id }));

      if (credentials.remember) {
        localStorage.setItem("token", token);
      }
      toast.success("Login successful!");

      history.push(fromPath || "/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed! Please check your credentials");
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");

    delete api.defaults.headers.common["Authorization"];

    dispatch(setUser({}));

    toast.success("Logged out successfully!");
  };
};
