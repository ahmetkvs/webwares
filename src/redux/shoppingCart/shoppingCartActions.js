import api from "../../services/api";

export const SET_CART = "SET_CART";
export const SET_FAVORITES = "SET_FAVORITES";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";
export const SET_CART_ITEM_CHECKED = "SET_CART_ITEM_CHECKED";

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const removeFromFavorites = (productId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: productId,
});

export const updateCartItemCount = (productId, count) => ({
  type: UPDATE_CART_ITEM_COUNT,
  payload: { productId, count },
});

export const setCartItemChecked = (productId, isChecked) => ({
  type: SET_CART_ITEM_CHECKED,
  payload: { productId, isChecked },
});

export const fetchAddresses = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await api.get("/user/address", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      dispatch(setAddress(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addAddress = (addressData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await api.post("/user/address", addressData, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Address Added:", response.data);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Error adding address: ", error);
    }
  };
};

export const updateAddress = (addressId, addressData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await api.put("/user/address", addressData, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Address Updated:", response.data);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error(`Error updating address with ID ${addressId}: `, error);
    }
  };
};

export const deleteAddress = (addressId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      await api.delete(`/user/address/${addressId}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(`Address with ID ${addressId} deleted.`);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error(`Error deleting address with ID ${addressId}: `, error);
    }
  };
};

export const fetchCards = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
      }
      const response = await api.get("/user/card", {
        headers: {
          Authorization: token,
        },
      });
      console.log("Fetched Cards: ", response.data);
      dispatch(setPayment(response.data));
    } catch (error) {
      console.error("Error fetching cards: ", error);
    }
  };
};

export const addCard = (cardData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await api.post("/user/card", cardData, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Card Added:", response.data);
      dispatch(fetchCards());
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };
};

export const updateCard = (cardId, cardData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await api.put(
        "/user/card",
        { id: cardId, ...cardData },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Card Updated:", response.data);
      dispatch(fetchCards());
    } catch (error) {
      console.error(`Error updating card with ID ${cardId}:`, error);
    }
  };
};

export const deleteCard = (cardId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      await api.delete(`/user/card/${cardId}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(`Card with ID ${cardId} deleted.`);
      dispatch(fetchCards());
    } catch (error) {
      console.error(`Error deleting card with ID ${cardId}:`, error);
    }
  };
};
