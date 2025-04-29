import {
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITES,
  SET_ADDRESS,
  SET_CART,
  SET_FAVORITES,
  SET_PAYMENT,
  UPDATE_CART_ITEM_COUNT,
} from "./shoppingCartActions";
import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
} from "../../utils/localStorage";

const persistedCartState = loadStateFromLocalStorage("cart");
const persistedFavoritesState = loadStateFromLocalStorage("favorites");

const initialState = {
  cart: persistedCartState || [],
  favorites: persistedFavoritesState || [],
  payment: [],
  address: [],
};

function shoppingCartReducer(state = initialState, action) {
  let updatedCart;
  let updatedFavorites;

  switch (action.type) {
    case SET_CART: {
      const productToAdd = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === productToAdd.id
      );

      if (existingItemIndex >= 0) {
        updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          { count: 1, checked: true, product: productToAdd },
        ];
      }
      saveStateToLocalStorage("cart", updatedCart);
      return { ...state, cart: updatedCart };
    }
    case UPDATE_CART_ITEM_COUNT: {
      const { productId, count } = action.payload;
      updatedCart = state.cart.map((item) =>
        item.product.id === productId
          ? { ...item, count: parseInt(count, 10) }
          : item
      );
      saveStateToLocalStorage("cart", updatedCart);
      return { ...state, cart: updatedCart };
    }
    case SET_FAVORITES: {
      const { product: productToFavorite, url: productUrl } = action.payload;
      const isAlreadyFavorite = state.favorites.some(
        (fav) => fav.product.id === productToFavorite.id
      );

      if (!isAlreadyFavorite) {
        updatedFavorites = [
          ...state.favorites,
          { product: productToFavorite, url: productUrl },
        ];
        saveStateToLocalStorage("favorites", updatedFavorites);
        return { ...state, favorites: updatedFavorites };
      }
      return state;
    }
    case "SET_CART_ITEM_CHECKED": {
      const { productId, isChecked } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, checked: isChecked } : item
      );
      saveStateToLocalStorage("cart", updatedCart);
      return { ...state, cart: updatedCart };
    }
    case REMOVE_FROM_CART: {
      const productIdToRemove = action.payload;
      updatedCart = state.cart.filter(
        (item) => item.product.id !== productIdToRemove
      );
      saveStateToLocalStorage("cart", updatedCart);
      return { ...state, cart: updatedCart };
    }
    case REMOVE_FROM_FAVORITES: {
      const productIdToRemove = action.payload;
      updatedFavorites = state.favorites.filter(
        (item) => item.product.id !== productIdToRemove
      );
      saveStateToLocalStorage("favorites", updatedFavorites);
      return { ...state, favorites: updatedFavorites };
    }
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
}

export default shoppingCartReducer;
