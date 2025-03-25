"use client";

import { useState } from "react";
import InputField from "../../../utils/components/common/inputfield";



export default function Form() {
    const [feed,setfeed] = useState();

    return (
        <>
            <InputField label="Name" placeholder="Enter your name" type="text" id="name" error="" 
            onchange={(e)=> setfeed(e?.target?.value)} 
            value={feed}
            />
            <InputField label="Email" placeholder="Enter your email" type="email" id="email" error="   " />
            <InputField label="Date of Birth" type="date" id="dob" error="" />            
        </>
    )
}