export const formatPrice = (price: number) => "€" + price.toFixed(2) + " ";

export const populateSelectOptions = (quantity: number) => {
  const options = [];
  for (let i = 1; i < quantity + 1; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return options;
};
