"use client";
import React, { useState } from "react";
import Card from "./Card";
import {
  FaInfoCircle,
  FaQuestion,
  FaQuestionCircle,
  FaUser,
  FaVolumeUp,
} from "react-icons/fa";
import Button from "./Button";

const Sidebar = () => {
  const [username, setUsername] = useState("Tijesunimi");
  return (
    <div className="bg-[#3D3CC9] w-[300px] mt-[-200px] pt-[300px] fixed bottom-0 top-0">
      <div className="text-white mx-4 text-xl">Welcome, {username}</div>
      <div className="mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-5">
        <FaUser className="mr-2 mt-1 text-[1.12em]" />
        <span className="pt-1 scale-y-110">Profile</span>
      </div>

      <div className="mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-4">
        <FaVolumeUp className="mr-2 mt-1.5 text-[1.13em]" />
        <span className="pt-1 scale-y-110">Text-to-Audio</span>
      </div>

      <div className="mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-4">
        <FaQuestionCircle className="mr-2 mt-1.5 text-[1.12em]" />
        <span className="pt-1 scale-y-110">Question and Answer</span>
      </div>

      <div className="mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-4">
        <FaInfoCircle className="mr-2 mt-1.5 text-[1.14em]" />
        <span className="pt-1 scale-y-110">Guidelines</span>
      </div>

      <div className="absolute bottom-[50px] left-12">
        <Button styles={"w-[200px] transition-all btn"}>Log Out</Button>
      </div>
    </div>
  );
};

export default Sidebar;
