import React, { useState } from "react";
import {
  FormFieldWrapper,
  ErrorWrapper,
  ButtonLarge,
} from "./styledComponents";
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
    setCounterOffer(calcNewPrice(0.5, 0.9, values.desiredPrice));
    toast.success(`Our offer is: ${formatPrice(cf)}. Do you accept?`);
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SellingFormValidationSchema}
        onSubmit={(values) => onFormSubmit(values)}>
        {({ errors, touched }) => (
          <Form>
            <FormFieldWrapper>
              <label htmlFor="title">
                <strong>{`Title: `}</strong>
              </label>
              <Field name="title" />
              {touched.title && errors.title && (
                <ErrorWrapper>
                  <div>{errors.title}</div>
                </ErrorWrapper>
              )}
            </FormFieldWrapper>
            <FormFieldWrapper>
              <label htmlFor="quantity">
                <strong>{`Quantity: `}</strong>
              </label>
              <Field name="quantity" />
              {touched.quantity && errors.quantity && (
                <ErrorWrapper>
                  <div>{errors.quantity}</div>
                </ErrorWrapper>
              )}
            </FormFieldWrapper>
            <FormFieldWrapper>
              <label htmlFor="desiredPrice">
                <strong>{`Desired price: `}</strong>
              </label>
              <Field name="desiredPrice" />
              {touched.desiredPrice && errors.desiredPrice && (
                <ErrorWrapper>
                  <div>{errors.desiredPrice}</div>
                </ErrorWrapper>
              )}
            </FormFieldWrapper>
            {counterOffer > 0 && (
              <div>
                <strong>{`Our offer is: `}</strong>
                <label>{formatPrice(counterOffer)}</label>
              </div>
            )}
            {counterOffer === 0 ? (
              <ButtonLarge>Make offer</ButtonLarge>
            ) : (
              <div>
                <ButtonLarge onClick={() => setAcceptOffer(true)}>
                  Accept
                </ButtonLarge>
                <ButtonLarge onClick={() => setAcceptOffer(false)}>
                  Decline
                </ButtonLarge>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SellingForm;
