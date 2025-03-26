"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MyForm = ({ fields }) => {
  const validationSchema = yup.object().shape(
    fields.reduce((schema, field) => {
      let rule = yup.string().required(`${field.label} is required`);
      if (field.type === "email") rule = rule.email("Invalid email address");
      if (field.type === "password") rule = rule.min(6, "Password must be at least 6 characters");
      return { ...schema, [field.name]: rule };
    }, {})
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => console.log("Form Submitted", data);

  return (
    <div className="m-5">
        <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}:</label>
          <input type={field.type} {...register(field.name)} />
          {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name].message}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default MyForm; // Make sure there is a default export
