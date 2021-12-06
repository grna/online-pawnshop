export const formatPrice = (price) => "€" + price.toFixed(2) + " ";

export const populateSelectOptions = (quantity) => {
  const options = [];
  for (let i = 1; i < quantity + 1; i++) {
    options.push(
      <option key={"optionId_" + i} value={i}>
        {i}
      </option>
    );
  }
  return options;
};

const rollTheDice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const checkOfferedPrice = (offeredPrice, productPrice) => {
  const acceptablePrice = productPrice * 0.9;

  if (offeredPrice < acceptablePrice) {
    return false;
  }

  if (offeredPrice < productPrice && rollTheDice(1, 2) === 1) {
    return false;
  }

  return true;
};

export const calcNewPrice = (min, max, price) => {
  return parseFloat((price * (Math.random() * (max - min) + min)).toFixed(2));
};
