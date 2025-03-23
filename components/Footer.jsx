"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="2xl:bg-[#3D3CC9] 2xl:flex 2xl:border-t 2xl:border-white 2xl:text-white 2xl:bottom-0 2xl:h-48 2xl:pt-7 2xl:z-50 footer">
      <div className="2xl:z-40">
        <h1 className=" 2xl:font-[800] 2xl:scale-y-150 2xl:tracking-wide 2xl:text-xl 2xl:mx-5">
          Reader's Assisstant AI
        </h1>
        <p className="2xl:mx-5 2xl:text-[1.2em] 2xl:w-[550px] 2xl:mt-4">
          Transform your text into sound. Stay ahead with AI that reads, so you
          can focus on what matters.
        </p>
      </div>
      <div className="2xl:flex 2xl:flex-col 2xl:justify-between 2xl:h-[120px] 2xl:text-[1.2em] 2xl:mt-7">
        <Link href={"/"} className="2xl:underline">
          Guidelines
        </Link>
        <Link href={"/"} className="2xl:underline">
          Analyze Text
        </Link>
        <Link href={"/"} className="2xl:underline">
          Text-to-Audio
        </Link>
      </div>
      <div className="2xl:flex 2xl:flex-col 2xl:justify-between 2xl:h-[120px] 2xl:text-[1.2em] 2xl:mt-7 2xl:ml-28">
        <Link href={"/"} className="2xl:underline">
          Account Settings
        </Link>
        <Link href={"/"} className="2xl:underline">
          Feedback
        </Link>
        <Link href={"/"} className="2xl:underline">
          Developer Profile
        </Link>
      </div>
      <form className="2xl:mt-7 2xl:ml-28">
        <div className="2xl:flex">
          <input type="checkbox" className="2xl:border 2xl:border-white 2xl:rounded 2xl:w-4" />
          <p className="2xl:ml-2 2xl:text-[1.1em]">Was this helpful to you?</p>
        </div>

        <div className="flex">
          <input type="checkbox" className="2xl:border 2xl:border-white 2xl:rounded 2xl:w-4" />
          <p className="2xl:ml-2 2xl:text-[1.1em]">Did you enjoy it?</p>
        </div>

       
      </form>
    </footer>
  );
};

export default Footer;
