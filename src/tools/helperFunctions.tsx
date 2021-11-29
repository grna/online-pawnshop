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

const rollTheDice = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const checkOfferedPrice = (
  offeredPrice: number,
  productPrice: number
) => {
  const acceptablePrice = productPrice * 0.9;

  if (offeredPrice < acceptablePrice) {
    return false;
  }

  if (offeredPrice < productPrice && rollTheDice(1, 2) === 1) {
    return false;
  }

  return true;
};

export const makePriceOffer = (desiredPrice: number) => {
  return desiredPrice * (Math.random() * (0.9 - 0.5) + 0.5);
};
