import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { formatPrice, calcNewPrice } from "../tools/helperFunctions";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SellingForm = ({ addProduct }) => {
  const navigate = useNavigate();
  const [counterOffer, setCounterOffer] = useState(0);
  const [acceptOffer, setAcceptOffer] = useState(false);

  const onFormSubmit = (values) => {
    if (counterOffer > 0 && acceptOffer) {
      const formValues = {
        ...values,
        counterOffer: parseFloat(counterOffer.toFixed(2)),
      };
      toast.success("Item successfully sold.");
      addProduct(formValues);
      navigate("/");
      return;
    }
    if (counterOffer > 0 && !acceptOffer) {
      navigate("/");
      return;
    }
    const co = calcNewPrice(0.5, 0.9, values.desiredPrice);
    setCounterOffer(co);
    toast.success(`Our offer is: ${formatPrice(co)}. Do you accept?`);
  };

  const SellingFormValidationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Required.")
      .min(3, "Min 3 characters.")
      .max(50, "Max 50 characters."),
    quantity: Yup.number()
      .required("Required.")
      .min(1, "At least one.")
      .typeError("Must be a number!"),
    desiredPrice: Yup.number()
      .typeError("Must be a number!")
      .min(1, "At least 1 euro.")
      .required("Required."),
  });

  const initialValues = {
    title: "",
    quantity: 1,
    desiredPrice: 0,
  };

  return (
    <div className="fl-col-cent">
      <h4>What are you selling?</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={SellingFormValidationSchema}
        onSubmit={(values) => onFormSubmit(values)}>
        {({ errors, touched }) => (
          <Form className="fl-col-cent">
            <div className="mg-1rm">
              <label htmlFor="title">
                <strong>{`Title: `}</strong>
              </label>
              <Field name="title" />
              {touched.title && errors.title && (
                <div className="error">{errors.title}</div>
              )}
            </div>
            <div className="mg-1rm">
              <label htmlFor="quantity">
                <strong>{`Quantity: `}</strong>
              </label>
              <Field name="quantity" />
              {touched.quantity && errors.quantity && (
                <div className="error">{errors.quantity}</div>
              )}
            </div>
            <div className="mg-1rm">
              <label htmlFor="desiredPrice">
                <strong>{`Desired price: `}</strong>
              </label>
              <Field name="desiredPrice" />
              {touched.desiredPrice && errors.desiredPrice && (
                <div className="error">{errors.desiredPrice}</div>
              )}
            </div>
            {counterOffer > 0 && (
              <div>
                <div className="mg-1rm">
                  <strong>{`Our offer is: `}</strong>
                </div>
                <label className="mg-1rm txt-cent">
                  {formatPrice(counterOffer)}
                </label>
              </div>
            )}
            {counterOffer === 0 ? (
              <button className="btn-prim">Make offer</button>
            ) : (
              <div>
                <button
                  className="btn-prim"
                  onClick={() => setAcceptOffer(true)}>
                  Accept
                </button>
                <button
                  className="btn-dang"
                  onClick={() => setAcceptOffer(false)}>
                  Decline
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

SellingForm.propTypes = {
  addProduct: PropTypes.func,
};

export default SellingForm;
