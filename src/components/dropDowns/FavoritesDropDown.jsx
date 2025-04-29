import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../redux/shoppingCart/shoppingCartActions";
import { X } from "lucide-react";

function FavoritesDropdown({ onClose }) {
  const favorites = useSelector((state) => state.shoppingCart.favorites);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
      {favorites.length === 0 ? (
        <div className="px-4 py-2 text-gray-600">No favorites yet.</div>
      ) : (
        <ul>
          {favorites.map((item) => (
            <li
              key={item.product.id}
              className="px-4 py-2 flex items-center justify-between hover:bg-gray-100"
            >
              <Link
                to={item.url}
                onClick={onClose}
                className="flex items-center gap-2"
              >
                {item.product.images && item.product.images[0]?.url ? (
                  <img
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    No Image
                  </div>
                )}
                <span className="text-sm">{item.product.name}</span>
              </Link>
              <button
                onClick={() => handleRemove(item.product.id)}
                className="text-gray-500 hover:text-red-600"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesDropdown;
