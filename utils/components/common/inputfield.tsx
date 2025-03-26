// import { useForm } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  className: string;
  inputClass: string;
  placeholder: string;
  value: string;
  onchange: undefined;
  error: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  className,
  inputClass,
  placeholder,
  value,
  onchange,
  error,
}) => {
  return (
    <div className=" container m-5 ">
      {label && (
        <label className={`${className} block   h6 mb-1`} htmlFor={id}>
          {label}
        </label>
      )}

      <br />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        className={`${inputClass} w-full  p-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 text-danger">{error}</p>
      )}



    </div>
  );
};

export default InputField;
