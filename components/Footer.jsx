"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="2xl:bg-[#3D3CC9] 2xl:flex border-t border-white 2xl:text-white 2xl:bottom-0 2xl:h-48 pt-7 z-50 footer">
      <div className="z-40">
        <h1 className=" font-[800] scale-y-150 tracking-wide 2xl:text-xl mx-5 footerh">
          Reader's Assisstant AI
        </h1>
        <p className="mx-5 2xl:text-[1.2em] 2xl:w-[550px] mt-4">
          Transform your text into sound. Stay ahead with AI that reads, so you
          can focus on what matters.
        </p>
      </div>
      <div className="2xl:flex 2xl:flex-col 2xl:justify-between 2xl:h-[120px] 2xl:text-[1.2em] mt-7 footerl relative">
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
      <div className="2xl:flex 2xl:flex-col 2xl:justify-between 2xl:h-[120px] 2xl:text-[1.2em] 2xl:mt-7 2xl:ml-28 footerl2">
        {/* <Link href={"/"} className="2xl:underline">
          Account Settings
        </Link> */}
        <Link href={"/"} className="2xl:underline">
          Feedback
        </Link>
        <Link href={"/"} className="2xl:underline">
          Developer Profile
        </Link>
      </div>
      <form className="2xl:mt-7 2xl:ml-28 footerform">
        <div className="2xl:flex f1">
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
