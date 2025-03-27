"use client";

import React from "react";

const Page = () => {
  const fields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "password", label: "Secure Password", type: "password" },
  ];

  return (
    <div>
      <MyForm fields={fields} />
    </div>
  );
};

export default Page;
