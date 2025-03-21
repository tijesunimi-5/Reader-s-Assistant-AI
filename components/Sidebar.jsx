"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  FaInfoCircle,
  FaQuestion,
  FaQuestionCircle,
  FaUser,
  FaVolumeUp,
} from "react-icons/fa";
import Button from "./Button";
import gsap from "gsap";

const Sidebar = () => {
  const [username, setUsername] = useState("Tijesunimi");
  // useEffect(() => {
  //   gsap.to(".btn", {
  //     display: "none",
  //     scrollTrigger: {
  //       trigger: ".footer",
  //       start: "top 20%",
  //       end: "bottom 5%",
  //       markers: true,
  //     },
  //   });
  // });

  const displayProfile = () => {
    const userProfile = document.querySelector(".userProfile");
    const textToSpeech = document.querySelector(".tts");
    textToSpeech.style.display = "none";
    userProfile.style.display = "flex";
    console.log("working");
  };

  const displayTTS = () => {
    const textToSpeech = document.querySelector(".tts");
    const userProfile = document.querySelector(".userProfile");
    userProfile.style.display = "none";
    textToSpeech.style.display = "flex";
    console.log("working");
  };

  const displayQA = () => {
    console.log("Question and answer");
  };

  const Guidelines = () => {
    console.log("Guidelines");
  };

  return (
    <div className="bg-[#3D3CC9] w-[300px] mt-[-200px] pt-[300px] fixed bottom-0 top-0 z-10">
      <div className="text-white mx-4 text-xl">Welcome, {username}</div>
      <Button
        onClick={displayProfile}
        styles={
          "mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-5"
        }
      >
        <FaUser className="mr-2 mt-1 text-[1.12em]" />
        <span className="pt-1 scale-y-110">Profile</span>
      </Button>

      <Button
        onClick={displayTTS}
        styles={
          "mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-4 text-[#3D3CC9] "
        }
      >
        <FaVolumeUp className="mr-2 mt-1.5 text-[1.13em]" />
        <span className="pt-1 scale-y-110">Text-to-Audio</span>
      </Button>

      <Button
        onClick={displayQA}
        styles="mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-4"
      >
        <FaQuestionCircle className="mr-2 mt-1.5 text-[1.12em]" />
        <span className="pt-1 scale-y-110">Question and Answer</span>
      </Button>

      <Button
        onClick={Guidelines}
        styles="mx-3 bg-white p-2 rounded w-[280px] text-[1.2em] font-bold tracking-wide text-[#3D3CC9] shadow-xl flex align-middle mt-4"
      >
        <FaInfoCircle className="mr-2 mt-1.5 text-[1.14em]" />
        <span className="pt-1 scale-y-110">Guidelines</span>
      </Button>

      <div className="absolute bottom-[200px] left-12">
        <Button styles={"w-[200px] transition-all btn text-white rounded-2xl"}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
