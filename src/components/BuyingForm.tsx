import React from "react";
import {
  ButtonLarge,
  FormFieldWrapper,
  ErrorWrapper,
} from "./styledComponents";
import { populateSelectOptions } from "../tools/helperFunctions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TypeProduct } from "../tools/interfaces";
import { toast } from "react-toastify";
import { checkOfferedPrice } from "../tools/helperFunctions";

interface Values {
  quantity: number;
  offeredPrice: number;
}

const BuyingFormErrorSchema = Yup.object().shape({
  quantity: Yup.number().required("Required!"),
  offeredPrice: Yup.number().required("Required!"),
});

const BuyingForm = (props: {
  product: TypeProduct;
  addToCart: (cartItem: TypeProduct) => void;
}) => {
  const { product, addToCart } = props;

  const onFormSubmit = (values: Values) => {
    if (!checkOfferedPrice(values.offeredPrice, product.price)) {
      toast.error("Offered price is too low.");
      return;
    }

    toast.success("Deal! Item(s) were added to the cart.");

    const cartItem = {
      _id: product._id,
      title: product.title,
      quantity: values.quantity,
      price: values.offeredPrice,
    };
    addToCart(cartItem);
  };

  return (
    <Formik
      initialValues={{
        quantity: 1,
        offeredPrice: product.price,
      }}
      validationSchema={BuyingFormErrorSchema}
      onSubmit={(values) => onFormSubmit(values)}>
      {({ errors, touched }) => (
        <Form>
          <FormFieldWrapper>
            <label htmlFor="offeredPrice">
              <strong>Your price:</strong>
            </label>
            <Field name="offeredPrice" />
            {touched.offeredPrice && errors.offeredPrice && (
              <ErrorWrapper>
                <div>{errors.offeredPrice}</div>
              </ErrorWrapper>
            )}
          </FormFieldWrapper>
          <FormFieldWrapper>
            <label htmlFor="quantity">
              <strong>{`Quantity: `}</strong>
            </label>
            <Field name="quantity" as="select">
              {populateSelectOptions(product.quantity)}
            </Field>
            {touched.quantity && errors.quantity && (
              <ErrorWrapper>
                <div>{errors.quantity}</div>
              </ErrorWrapper>
            )}
          </FormFieldWrapper>
          <ButtonLarge>To Cart</ButtonLarge>
        </Form>
      )}
    </Formik>
  );
};

export default BuyingForm;
