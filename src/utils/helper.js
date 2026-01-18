export const calculateDiscountedAmount = (price, discoutPercent) => {
  const priceToDiscount = price * (discoutPercent / 100);
  return price - priceToDiscount;
};
