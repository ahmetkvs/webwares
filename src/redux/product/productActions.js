import api from "../../services/api";
import fetchCategoriesService from "../../services/fetchCategoriesService";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const categories = await fetchCategoriesService();
      dispatch(setCategories(categories));
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };
};

export const fetchProducts = ({
  category,
  sort,
  filter,
  limit = 12,
  offset = 0,
} = {}) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));
      dispatch(setLimit(limit));
      dispatch(setOffset(offset));

      let query = "";

      if (category) {
        query += `category=${category}&`;
      }
      if (filter) {
        query += `filter=${filter}&`;
      }
      if (sort) {
        query += `sort=${sort}&`;
      }
      query += `limit=${limit}&offset=${offset}&`;

      if (query[query.length - 1] === "&") {
        query = query.slice(0, -1);
      }

      const response = await api.get(`/products${query ? `?${query}` : ""}`);
      const { products, total } = response.data;

      dispatch(setProductList(products));
      dispatch(setTotal(total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching products: ", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};
