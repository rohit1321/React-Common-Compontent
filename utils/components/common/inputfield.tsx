import React from "react";
import {
  SubmitHandler,
  useForm,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Student = {
  name: string;
  label: string;
  type: string;
};

interface InputFieldProps {
  fields: Student[];
  validationSchema: yup.ObjectSchema<FieldValues, yup.AnyObject, unknown, "">;
  onSubmit: SubmitHandler<Record<string, unknown>>;
}

const InputField: React.FC<InputFieldProps> = ({
  fields,
  validationSchema,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Record<string, unknown>>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="p-4 border rounded-lg">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-bold mb-2">{field.label}</label>
          <br />
          <input
            type={field.type}
            {...register(field.name)}
            className="border p-2 w-full rounded"
          />
          {errors[field.name] && (
            <p className="text-danger my-2">
              {(errors as FieldErrors<Record<string, unknown>>)[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <button
        type="button"
        className="text-white px-3 p-1 rounded btn btn-primary "
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        Submit
      </button>
    </div>
  );
};

export default InputField;
