// "use client";

// // import { useState } from "react";
// import InputField from "../../../utils/components/common/Inputfield";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// // import InputField from "../../../utils/components/common/inputfield";

// export default function Form() {
//     //   const [feed, setfeed] = useState();

//     const schema = yup.object({
//         email: yup.string().required(),
//         name: yup.string().required('Name is requied.')
//         //   age: yup.number().positive().integer().required(),
//     }).required();

//     const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
//         resolver: yupResolver(schema)
//     });

//     console.log(watch('email'), "emal")
//     //@ts-ignore
//     const onsubmit = (data: any) => {
//         console.log(data, "ddta")
//     }

//     console.log(errors, "err")

//     return (
//         <>
//             {/* <InputField label="Name" placeholder="Enter your name" type="text" id="name" error="" 
//             // onchange={(e)=> setfeed(e?.target?.value)} 
//             // value={feed}
//             /> */}
//             <InputField
//                 rest={register("email")}
//                 label="Email"
//                 placeholder="Enter your email"
//                 type="email"
//                 id="email"
//                 error={errors.email?.message}
//                 className={""}
//                 inputClass={""}
//                 value={watch('email')}
//                 onchange={(e) => {
//                     setValue('email', e?.target?.value, { shouldValidate: true })
//                 }}
//             />
//             <InputField
//                 rest={register("name")}
//                 label="Email"
//                 placeholder="Enter your email"
//                 type="text"
//                 id="email"
//                 error={errors.name?.message}
//                 className={""}
//                 inputClass={""}
//                 value={watch('namee')}
//                 onchange={(e) => {
//                     setValue('name', e?.target?.value, { shouldValidate: true })
//                 }}
//             />
//             <button onClick={handleSubmit(onsubmit)}>Submit</button>
//             {/* <InputField label="Date of Birth" type="date" id="dob" error="" /> */}
//         </>
//     );
// }



// // Compnent

// // import { useForm } from "react-hook-form";

// // import { register } from "module";

// interface InputFieldProps {
//   label: string;
//   type: string;
//   id: string;
//   className: string;
//   inputClass: string;
//   placeholder: string;
//   value: string;
//   onchange: undefined;
//   error: string;
//   rest :unknown;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   label,
//   type,
//   id,
//   className,
//   inputClass,
//   placeholder,
//   value,
//   onchange,
//   error,
//   ...rest
// }) => {
//   return (
//     <div className=" container m-5 ">
//       {label && (
//         <label className={`${className} block   h6 mb-1`} htmlFor={id}>
//           {label}
//         </label>
//       )}

//       <br />
//       <input
//         type={type}
//         id={id}
//         placeholder={placeholder}
//         value={value}
//         onChange={onchange}
//         className={`${inputClass} w-full  p-2 border rounded ${
//           error ? "border-red-500" : "border-gray-300"
//         }`}
//         {...rest}
//       />
//       {error && (
//         <p className="text-red-500 text-xs mt-1 text-danger">{error}</p>
//       )}



//     </div>
//   );
// };

// export default InputField;
