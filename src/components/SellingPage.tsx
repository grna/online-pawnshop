import React from "react";
import SellingForm from "./SellingForm";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions/productsActions";
import { SellingFormValues, TypeState } from "../tools/interfaces";

const SellingPage = (props: {
  addProduct: (formValues: SellingFormValues) => void;
}) => {
  const { addProduct } = props;
  return (
    <div className="fl-col-cent">
      <h4>What are you selling?</h4>
      <SellingForm addProduct={addProduct} />
    </div>
  );
};

const mapStateToProps = (state: TypeState) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { addProduct })(SellingPage);
