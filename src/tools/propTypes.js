import PropTypes from "prop-types";

export const ProductType = PropTypes.shape({
  _id: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
});
