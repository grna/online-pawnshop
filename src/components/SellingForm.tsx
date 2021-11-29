import React, { useState } from "react";
import {
  FormFieldWrapper,
  ErrorWrapper,
  ButtonLarge,
} from "./styledComponents";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { formatPrice, makePriceOffer } from "../tools/helperFunctions";
import { useNavigate } from "react-router-dom";

const SellingForm = () => {
  const navigate = useNavigate();

  interface Values {
    title: string;
    quantity: number;
    desiredPrice: number;
    counterOffer: number;
  }

  const [counterOffer, setCounterOffer] = useState(0);
  const [acceptOffer, setAcceptOffer] = useState(false);

  const onFormSubmit = (values: Values) => {
    if (counterOffer > 0 && acceptOffer) {
      toast.success("Item successfully sold.");
      navigate("/");
      return;
    }
    if (counterOffer > 0 && !acceptOffer) {
      navigate("/");
      return;
    }

    const cf = parseFloat(makePriceOffer(values.desiredPrice).toFixed(2));
    setCounterOffer(cf);
    toast.success(`Our offer is: ${formatPrice(cf)}. Do you accept?`);
  };

  const SellingFormValidationSchema = Yup.object().shape({
    title: Yup.string().required("Required.").max(50, "Max 50 characters."),
    quantity: Yup.number().required("Required.").min(1, "At least one."),
    desiredPrice: Yup.number().required("Required."),
    counterOffer: Yup.number(),
  });

  const initialValues = {
    title: "",
    quantity: 1,
    desiredPrice: 0,
    counterOffer: counterOffer,
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
              <FormFieldWrapper>
                <label htmlFor="counterOffer">
                  <strong>{`Our offer is: `}</strong>
                </label>
                <Field
                  name="counterOffer"
                  disabled={true}
                  value={counterOffer}
                />
                {touched.desiredPrice && errors.desiredPrice && (
                  <ErrorWrapper>
                    <div>{errors.counterOffer}</div>
                  </ErrorWrapper>
                )}
              </FormFieldWrapper>
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
