import React from "react";
import { FormFieldWrapper, ErrorWrapper } from "./styledComponents";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const SellingForm = () => {
  interface Values {
    title: string;
    quantity: number;
    desiredPrice: number;
  }

  const onFormSubmit = (values: Values) => {
    toast.success("Thank you.");
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
        </Form>
      )}
    </Formik>
  );
};

export default SellingForm;
