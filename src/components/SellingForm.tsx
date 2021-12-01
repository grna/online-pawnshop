import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { formatPrice, calcNewPrice } from "../tools/helperFunctions";
import { useNavigate } from "react-router-dom";
import { SellingFormValues as Values } from "../tools/interfaces";

const SellingForm = (props: { addProduct: (formValues: Values) => void }) => {
  const { addProduct } = props;
  const navigate = useNavigate();
  const [counterOffer, setCounterOffer] = useState(0);
  const [acceptOffer, setAcceptOffer] = useState(false);

  const onFormSubmit = (values: Values) => {
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
    title: Yup.string().required("Required.").max(50, "Max 50 characters."),
    quantity: Yup.number().required("Required.").min(1, "At least one."),
    desiredPrice: Yup.number().required("Required."),
  });

  const initialValues = {
    title: "",
    quantity: 1,
    desiredPrice: 0,
  };

  return (
    <div>
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
                <div>
                  <div>{errors.title}</div>
                </div>
              )}
            </div>
            <div className="mg-1rm">
              <label htmlFor="quantity">
                <strong>{`Quantity: `}</strong>
              </label>
              <Field name="quantity" />
              {touched.quantity && errors.quantity && (
                <div>
                  <div>{errors.quantity}</div>
                </div>
              )}
            </div>
            <div className="mg-1rm">
              <label htmlFor="desiredPrice">
                <strong>{`Desired price: `}</strong>
              </label>
              <Field name="desiredPrice" />
              {touched.desiredPrice && errors.desiredPrice && (
                <div>
                  <div>{errors.desiredPrice}</div>
                </div>
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

export default SellingForm;
