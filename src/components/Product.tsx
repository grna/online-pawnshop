import React from "react";
import { TypeProduct } from "../tools/interfaces";
import {
  ButtonLarge,
  ProductWrapper,
  FormFieldWrapper,
  ErrorWrapper,
} from "./styledComponents";
import { formatPrice, populateSelectOptions } from "../tools/helperFunctions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface TypeBuyingForm {
  quantity: number;
  offeredPrice: number;
}

const BuyingFormErrorSchema = Yup.object().shape({
  quantity: Yup.number().required("Required!"),
  offeredPrice: Yup.number().required("Required"),
});

const Product = (props: { product: TypeProduct }) => {
  const { product } = props;

  const onFormSubmit = (values: TypeBuyingForm) => {};

  return (
    <ProductWrapper>
      <h5>{product.title}</h5>
      <p>
        <strong>{`Stock: `}</strong>
        {product.quantity}
        <strong>{` Price: `}</strong>
        {formatPrice(product.price)}
      </p>
      <Formik
        initialValues={{
          quantity: product.quantity,
          offeredPrice: product.price,
        }}
        validationSchema={BuyingFormErrorSchema}
        onSubmit={(values) => onFormSubmit(values)}>
        {({ errors, touched }) => (
          <Form>
            <FormFieldWrapper>
              <label htmlFor="quantity">{`Quantity: `}</label>
              <Field name="quantity" as="select" value={1}>
                {populateSelectOptions(product.quantity)}
              </Field>
              {touched.quantity && errors.quantity && (
                <ErrorWrapper>
                  <div>{errors.quantity}</div>
                </ErrorWrapper>
              )}
            </FormFieldWrapper>
            <FormFieldWrapper>
              <label htmlFor="offeredPrice">Your price:</label>
              <Field name="offeredPrice" />
              {touched.offeredPrice && errors.offeredPrice && (
                <ErrorWrapper>
                  <div>{errors.offeredPrice}</div>
                </ErrorWrapper>
              )}
            </FormFieldWrapper>
          </Form>
        )}
      </Formik>
      <ButtonLarge>To Cart</ButtonLarge>
    </ProductWrapper>
  );
};

export default Product;
