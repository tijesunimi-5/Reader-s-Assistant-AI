"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const MobileBar = () => {
  const router = useRouter();
  const toggleMobileBar = () => {
    const mobileBar = document.querySelector(".mobilebar");
    const headerBar = document.querySelector(".bar");
    const headerMinus = document.querySelector(".minus");
    if (mobileBar.classList.contains("active")) {
      mobileBar.classList.remove("active");
      mobileBar.style.marginLeft = "-300px";
      headerBar.style.display = "flex";
      headerMinus.style.display = "none";
    }
  };

  return (
    <div className="2xl:hidden bg-[#3d3cc9] h-[100vh] w-[300px] fixed left-0 z-40 ml-[-300px] mobilebar transition-all duration-300">
      <div className="content pt-20 text-white">
        <p className="ml-5 mb-3">Welcome to Reader's assistant.</p>
        <Button
          styles={
            "bg-white border-[#3D3CC9] text-[#3D3CC9] font-bold ml-5 w-[250px] rounded text-[1.25em] text-start"
          }
          onClick={() => {
            router.push("/Reader-assisstant.ai/text-to-speech");
            toggleMobileBar();
          }}
        >
          Text-to-Speech
        </Button>

        <Button
          styles={
            "bg-white border-[#3D3CC9] text-[#3D3CC9] font-bold ml-5 w-[250px] rounded text-[1.25em] mt-5"
          }
          onClick={() => {
            router.push("/Reader-assisstant.ai/qna");
            toggleMobileBar();
          }}
        >
          Question and Answer
        </Button>

        <Button
          styles={
            "bg-white border-[#3D3CC9] text-[#3D3CC9] font-bold ml-5 w-[250px] rounded text-[1.25em] mt-5 text-start"
          }
          onClick={() => {
            router.push("/Reader-assisstant.ai/guideline");
            toggleMobileBar();
          }}
        >
          Guidelines
        </Button>

        <Button
          styles={
            "bg-white border-[#3D3CC9] text-[#3D3CC9] font-bold ml-12 w-[200px] rounded text-[1.25em] mt-52"
          }
          onClick={() => {
            router.push("/Reader-assisstant.ai");
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default MobileBar;
