import React, { useEffect } from "react";
import { TypeState, TypeBuyingPageProps as Props } from "../tools/interfaces";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";

const BuyingPage = (props: Props) => {
  const { products, fetchProducts } = props;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h4>Choose your items</h4>
      {products.map((product) => (
        <div>
          <h5>{product.title}</h5>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: TypeState) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { fetchProducts })(BuyingPage);
