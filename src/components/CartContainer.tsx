import React from "react";
import { connect } from "react-redux";
import { TypeProduct, TypeState } from "../tools/interfaces";
import Product from "./Product";
import { ProductListWrapper } from "./styledComponents";

const CartContainer = (props: { cartItems: TypeProduct[] }) => {
  const { cartItems } = props;

  if (cartItems.length === 0) {
    return <div>You have no cart items.</div>;
  }

  return (
    <ProductListWrapper>
      {cartItems.map((item) => (
        <Product key={item._id} children={null} product={item}></Product>
      ))}
    </ProductListWrapper>
  );
};

const mapStateToProps = (state: TypeState) => ({
  cartItems: state.fromCart.cartItems,
});

export default connect(mapStateToProps, {})(CartContainer);
