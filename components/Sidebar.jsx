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
import Model from "./Model";

const Sidebar = () => {
  const [username, setUsername] = useState("Samuel");

  const displayProfile = () => {
    const userProfile = document.querySelector(".userProfile");
    const textToSpeech = document.querySelector(".tts");
    const questionNans = document.querySelector(".questionNans");
    const guidelines = document.querySelector(".guideline");
    userProfile.style.display = "flex";
    textToSpeech.style.display = "none";
    questionNans.style.display = "none";
    guidelines.style.display = "none";
  };

  const displayTTS = () => {
    const textToSpeech = document.querySelector(".tts");
    const userProfile = document.querySelector(".userProfile");
    const questionNans = document.querySelector(".questionNans");
    const guidelines = document.querySelector(".guideline");
    textToSpeech.style.display = "flex";
    userProfile.style.display = "none";
    questionNans.style.display = "none";
    guidelines.style.display = "none";
  };

  const displayQA = () => {
    const userProfile = document.querySelector(".userProfile");
    const textToSpeech = document.querySelector(".tts");
    const questionNans = document.querySelector(".questionNans");
    const guidelines = document.querySelector(".guideline");
    questionNans.style.display = "flex";
    textToSpeech.style.display = "none";
    userProfile.style.display = "none";
    guidelines.style.display = "none";
    questionAi();
  };

  const Guidelines = () => {
    const userProfile = document.querySelector(".userProfile");
    const textToSpeech = document.querySelector(".tts");
    const questionNans = document.querySelector(".questionNans");
    const guidelines = document.querySelector(".guideline");
    guidelines.style.display = "flex";
    questionNans.style.display = "none";
    textToSpeech.style.display = "none";
    userProfile.style.display = "none";
  };

  const questionAi = () => {
    const voiceModel = new SpeechSynthesisUtterance();

    voiceModel.text =
      "Please provide a comprehension passage or text you want to ask questions on as I can only answer questions based on the text you provide";

    voiceModel.lang = "en-US";
    voiceModel.voice = window.speechSynthesis.getVoices()[0];

    window.speechSynthesis.speak(voiceModel);
  };

  useEffect(() => {
    const voiceModel = new SpeechSynthesisUtterance();
    voiceModel.text = `Hello, Welcome to Reader's assistant, I'm Adam and I will be your Personal AI assistant.`;

    voiceModel.lang = "en-US";
    voiceModel.voice = window.speechSynthesis.getVoices()[0];

    window.speechSynthesis.speak(voiceModel);
  }, []);

  return (
    <div className="2xl:bg-[#3D3CC9] 2xl:w-[300px] 2xl:mt-[-200px] 2xl:pt-[300px] 2xl:fixed 2xl:bottom-0 2xl:top-0 2xl:z-10 hidden">
      <div className="2xl:text-white 2xl:mx-4 2xl:text-xl 2xl:flex 2xl:items-center 2xl:justify-between">
        Welcome, 
        <Model  />
      </div>
      <Button
        onClick={displayProfile}
        styles={
          "2xl:mx-3 2xl:bg-white 2xl:p-2 2xl:rounded 2xl:w-[280px] 2xl:text-[1.2em] 2xl:font-bold 2xl:tracking-wide 2xl:text-[#3D3CC9] 2xl:shadow-xl 2xl:flex 2xl:align-middle 2xl:mt-5"
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
        styles="2xl:mx-3 2xl:bg-white 2xl:p-2 2xl:rounded 2xl:w-[280px] 2xl:text-[1.2em] 2xl:font-bold 2xl:tracking-wide 2xl:text-[#3D3CC9] 2xl:shadow-xl 2xl:flex 2xl:align-middle 2xl:mt-4"
      >
        <FaInfoCircle className="2xl:mr-2 2xl:mt-1.5 2xl:text-[1.14em]" />
        <span className="2xl:pt-1 2xl:scale-y-110">Guidelines</span>
      </Button>

      <div className="2xl:absolute 2xl:bottom-[200px] 2xl:left-12">
        <Button styles={"2xl:w-[200px] 2xl:transition-all btn 2xl:text-white 2xl:rounded-2xl"}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
