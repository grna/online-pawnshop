import React from "react";
import SellingForm from "../components/SellingForm";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions/productsActions";
import PropTypes from "prop-types";

const SellingContainer = ({ addProduct }) => {
  return <SellingForm addProduct={addProduct} />;
};

SellingContainer.propTypes = {
  addProduct: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { addProduct })(SellingContainer);
