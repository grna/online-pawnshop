import React from "react";
import { populateSelectOptions } from "../tools/helperFunctions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TypeProduct } from "../tools/interfaces";
import { toast } from "react-toastify";
import { checkOfferedPrice } from "../tools/helperFunctions";

const BuyingForm = (props: {
  product: TypeProduct;
  addToCart: (cartItem: TypeProduct) => void;
}) => {
  const { product, addToCart } = props;

  interface Values {
    quantity: number;
    offeredPrice: number;
  }

  const BuyingFormErrorSchema = Yup.object().shape({
    quantity: Yup.number().required("Required!"),
    offeredPrice: Yup.number().required("Required!"),
  });

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

  const initialValues = {
    quantity: 1,
    offeredPrice: product.price,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BuyingFormErrorSchema}
      onSubmit={(values) => onFormSubmit(values)}>
      {({ errors, touched }) => (
        <Form className="fl-col-cent">
          <div className="mg-1rm">
            <label htmlFor="offeredPrice">
              <strong>Your price:</strong>
            </label>
            <Field className="price-field" name="offeredPrice" />
            {touched.offeredPrice && errors.offeredPrice && (
              <div>
                <div>{errors.offeredPrice}</div>
              </div>
            )}
          </div>
          <div className="mg-1rm">
            <label htmlFor="quantity">
              <strong>{`Quantity: `}</strong>
            </label>
            <Field name="quantity" as="select">
              {populateSelectOptions(product.quantity)}
            </Field>
            {touched.quantity && errors.quantity && (
              <div>
                <div>{errors.quantity}</div>
              </div>
            )}
          </div>
          <button className="btn-prim" type="submit">
            To Cart
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BuyingForm;
