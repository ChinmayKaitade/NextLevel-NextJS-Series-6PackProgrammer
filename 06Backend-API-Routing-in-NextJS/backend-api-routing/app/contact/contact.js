"use client";

import React from "react";

const Contact = ({ children, value }) => {
  return (
    <div>
      <h1 className="text-4xl text-center text-white mt-2">
        Contact Component
      </h1>

      {children}

      <h3 className="text-3xl text-center text-white mt-2">{value}</h3>
    </div>
  );
};

export default Contact;
