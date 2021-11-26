import React, { useEffect } from "react";
import { TypeState, TypeBuyingPageProps as Props } from "../tools/interfaces";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";
import ProductList from "./ProductList";
import { ContainerCenter } from "./styledComponents";

const BuyingPage = (props: Props) => {
  const { products, fetchProducts } = props;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ContainerCenter>
      <h4>Choose your items</h4>
      <ProductList products={products} />
    </ContainerCenter>
  );
};

const mapStateToProps = (state: TypeState) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { fetchProducts })(BuyingPage);
