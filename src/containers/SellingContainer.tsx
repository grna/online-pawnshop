import React from "react";
import SellingForm from "../components/SellingForm";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions/productsActions";
import {
  TypeSellingContainerProps as Props,
  TypeState,
} from "../tools/interfaces";

const SellingContainer = ({ addProduct }: Props) => {
  return <SellingForm addProduct={addProduct} />;
};

const mapStateToProps = (state: TypeState) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { addProduct })(SellingContainer);
