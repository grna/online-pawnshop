import React, { useEffect } from "react";
import { TypeState, TypeBuyingPageProps as Props } from "../tools/interfaces";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";
import ProductList from "./ProductList";
import { addToCart } from "../redux/actions/cartActions";

const BuyingPage = (props: Props) => {
  const { products, fetchProducts, addToCart } = props;

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

const mapStateToProps = (state: TypeState) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(
  BuyingPage
);
