"use client"
import React from "react";

const page = ({ params }) => {
  console.log(params.id);
  return (
    <div>
      <h1 className="text-4xl text-center text-white mt-2">
        Product Component
      </h1>
      <p className="text-center text-2xl">Product is </p>
    </div>
  );
};

export default page;
