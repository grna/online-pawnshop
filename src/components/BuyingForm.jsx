import React from "react";
import { populateSelectOptions } from "../tools/helperFunctions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { checkOfferedPrice } from "../tools/helperFunctions";
import PropTypes from "prop-types";
import { ProductType } from "../tools/propTypes";

const BuyingForm = ({ product, addToCart }) => {
  const BuyingFormErrorSchema = Yup.object().shape({
    quantity: Yup.string().required("Required!"),
    offeredPrice: Yup.number().required("Required!"),
  });

  const onFormSubmit = (values) => {
    if (!checkOfferedPrice(parseFloat(values.offeredPrice), product.price)) {
      toast.error("Offered price is too low.");
      return;
    }
    toast.success("Deal! Item(s) were added to the cart.");
    const cartItem = {
      _id: product._id,
      title: product.title,
      quantity: parseInt(values.quantity),
      price: parseFloat(values.offeredPrice),
    };
    addToCart(cartItem);
  };

  const initialValues = {
    quantity: "1",
    offeredPrice: `${product.price}`,
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
              <div className="error">{errors.offeredPrice}</div>
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
              <div className="error">{errors.quantity}</div>
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

BuyingForm.propTypes = {
  product: ProductType,
  addToCart: PropTypes.func,
};

export default BuyingForm;
