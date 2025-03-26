"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars, FaMinus, FaTimes } from "react-icons/fa";

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

  const toggleMobileBar = () => {
    const mobileBar = document.querySelector(".mobilebar");
    console.log(mobileBar)
    const bar = document.querySelector(".bar");
    const minus = document.querySelector(".minus");
    //this displays the mobilesidebar
    if (!mobileBar.classList.contains("active")) {
      mobileBar.style.marginLeft = "0px";
      mobileBar.classList.add("active");
      bar.classList.add("hidden");
      minus.classList.remove("hidden");
      return;
    }

    //this hides the mobilesidebar
    if (mobileBar.classList.contains("active")) {
      const bar = document.querySelector(".bar");
      const minus = document.querySelector(".minus");
      mobileBar.style.marginLeft = "-300px";
      mobileBar.classList.remove("active");
      minus.classList.add("hidden");
      bar.classList.remove("hidden");
      return;
    }
  };

  return (
    <header className="flex justify-between mt-5 mx-2 px-5 py-2 fixed right-0 left-0 bg-[#3D3CC9] items-center rounded text-white shadow z-50 header">
      <h1 className="logo font-[800] scale-y-150 tracking-wide text-xl">
        <Link href={"/"}>Reader's Assisstant AI</Link>
      </h1>

      <div className="blur w-full ml-[-20px] h-10 top-[-39px] absolute bg-transparent"></div>

      <ul className="2xl:flex 2xl:justify-between 2xl:items-center 2xl:flex-row 2xl:w-[300px] nav hidden">
        <Link href={"/"}>
          <li className="2xl:text-[1.2em] 2xl:font-[600] 2xl:cursor-pointer 2xl:relative ">
            Home{" "}
            <span
              className="2xl:absolute 2xl:border-b-2 2xl:border-white 2xl:w-0 2xl:bottom-0 2xl:left-0 2xl:transition-all homelink 2xl:h-6"
              onClick={handleHomeclick}
            ></span>
          </li>
        </Link>
        <Link href={"/Reader-assisstant.ai"}>
          <li className="2xl:text-[1.2em] 2xl:font-[600] 2xl:cursor-pointer 2xl:relative ">
            Text to Speech{" "}
            <span
              className="2xl:absolute 2xl:border-b-2 2xl:border-white 2xl:w-0 2xl:bottom-0 2xl:left-0 2xl:transition-all analylink 2xl:h-6"
              onClick={handleAnalyClick}
            ></span>
          </li>
        </Link>
        <Link href={"/"}>
          <li className="2xl:text-[1.2em] 2xl:font-[600] 2xl:cursor-pointer 2xl:relative ">
            Q/A{" "}
            <span
              className="2xl:absolute 2xl:border-b-2 2xl:border-white 2xl:w-0 2xl:bottom-0 2xl:left-0 2xl:transition-all profilelink 2xl:h-6"
              onClick={handleProfileClick}
            ></span>
          </li>
        </Link>
      </ul>

      <Button
        styles={"2xl:bg-[#6ca7b2] 2xl:rounded-2xl navBtn hidden 2xl:flex"}
        onClick={() => router.push("/register/signup")}
      >
        Get started
      </Button>
      <div className="flex justify-center items-center 2xl:hidden">
        <FaBars
          className="2xl:hidden bar text-[26px]"
          onClick={toggleMobileBar}
        />
        <FaTimes
          className="2xl:hidden minus hidden text-[26px]"
          onClick={toggleMobileBar}
        />
      </div>
    </header>
  );
};

export default Header;
