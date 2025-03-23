"use client";
import React, { useEffect } from "react";
import { FaVolumeUp } from "react-icons/fa";

const Model = ({ name }) => {
  return (
    <div className="top-[0px] right-0 text-white model">
      <FaVolumeUp className="cursor-pointer" />
    </div>
  );
};

export default Model;
