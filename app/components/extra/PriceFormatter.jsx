export const PriceFormatter = (price) => {
  const formattedPrice = price
    ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
    .split(".")[0]
    .replaceAll(",", " ");

    return formattedPrice;
};
