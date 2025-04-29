export const SET_CART = "SET_CART";
export const SET_FAVORITES = "SET_FAVORITES";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";

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
