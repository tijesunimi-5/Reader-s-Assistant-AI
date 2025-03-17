"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleHomeclick = () => {
    const homelink = document.querySelector(".homelink");
    const analylink = document.querySelector(".analylink");
    const profilelink = document.querySelector(".profilelink");

    homelink.classList.add("underlineb");
    analylink.classList.remove("underlineb");
    profilelink.classList.remove("underlineb");
  };

  const handleAnalyClick = () => {
    const homelink = document.querySelector(".homelink");
    const analylink = document.querySelector(".analylink");
    const profilelink = document.querySelector(".profilelink");

    homelink.classList.remove("underlineb");
    analylink.classList.add("underlineb");
    profilelink.classList.remove("underlineb");
  };

  const handleProfileClick = () => {
    const homelink = document.querySelector(".homelink");
    const analylink = document.querySelector(".analylink");
    const profilelink = document.querySelector(".profilelink");

    homelink.classList.remove("underlineb");
    analylink.classList.remove("underlineb");
    profilelink.classList.add("underlineb");
  };

  return (
    <header className="flex justify-between mt-5 mx-2 px-5 py-2 fixed right-0 left-0 bg-[#3D3CC9] items-center rounded text-white shadow z-50">
      <h1 className="logo font-[800] scale-y-150 tracking-wide text-xl">
        Reader's Assisstant AI
      </h1>

      <div className="blur w-full ml-[-20px] h-10 top-[-39px] absolute bg-transparent"></div>

      <ul className="flex justify-between items-center flex-row w-[300px]">
        <Link href={"/"}>
          <li className="text-[1.2em] font-[600] cursor-pointer relative ">
            Home{" "}
            <span
              className="absolute border-b-2 border-white w-0 bottom-0 left-0 transition-all homelink h-6"
              onClick={handleHomeclick}
            ></span>
          </li>
        </Link>
        <Link href={"/"}>
          <li className="text-[1.2em] font-[600] cursor-pointer relative ">
            Text analysis{" "}
            <span
              className="absolute border-b-2 border-white w-0 bottom-0 left-0 transition-all analylink h-6"
              onClick={handleAnalyClick}
            ></span>
          </li>
        </Link>
        <Link href={"/"}>
          <li className="text-[1.2em] font-[600] cursor-pointer relative ">
            Q/A{" "}
            <span
              className="absolute border-b-2 border-white w-0 bottom-0 left-0 transition-all profilelink h-6"
              onClick={handleProfileClick}
            ></span>
          </li>
        </Link>
      </ul>

      <Button
        styles={"bg-[#6ca7b2]"}
        onClick={() => router.push("/register/signup")}
      >
        Get started
      </Button>
    </header>
  );
};

export default Header;
