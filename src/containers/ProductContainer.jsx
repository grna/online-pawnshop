import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";
import ProductList from "../components/ProductList";
import { addToCart } from "../redux/actions/cartActions";
import { ProductType } from "../tools/propTypes";
import PropTypes from "prop-types";

const ProductContainer = ({ products, fetchProducts, addToCart }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="fl-col-cent">
      <h4>Choose your items</h4>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(ProductType),
  fetchProducts: PropTypes.func,
  addToCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(
  ProductContainer
);
