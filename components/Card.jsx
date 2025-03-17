"use client";
import React from "react";

const Card = ({ children, styles, onclick }) => {
  return (
    <div>
      <div
        className={`shadow-xl bg-[#5555d0] rounded-2xl text-white flex flex-col overflow-hidden transition-all ${styles}`}
        onClick={onclick}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
