const formatPrice = (price) => {
  if (typeof price !== "number" || isNaN(price)) {
    return "$--.--";
  }
  return `$${price.toFixed(2)}`;
};

export default formatPrice;
