"use client"

import React from "react";
import * as yup from "yup";
import InputField from "../../../utils/components/common/inputfield";



const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required(),
});

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
];

const Form = () => {
  const onSubmit = (data: unknown) => {
    console.log( data);
  };

  return <InputField fields={fields} validationSchema={validationSchema} onSubmit={onSubmit} />;
};

export default Form;
