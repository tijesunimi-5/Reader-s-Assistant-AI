"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3D3CC9] flex border-t border-white text-white bottom-0 h-48 pt-7 z-50 footer">
      <div className="z-40">
        <h1 className=" font-[800] scale-y-150 tracking-wide text-xl mx-5">
          Reader's Assisstant AI
        </h1>
        <p className="mx-5 text-[1.2em] w-[550px] mt-4">
          Transform your text into sound. Stay ahead with AI that reads, so you
          can focus on what matters.
        </p>
      </div>
      <div className="flex flex-col justify-between h-[120px] text-[1.2em] mt-7">
        <Link href={"/"} className="underline">
          Guidelines
        </Link>
        <Link href={"/"} className="underline">
          Analyze Text
        </Link>
        <Link href={"/"} className="underline">
          Text-to-Audio
        </Link>
      </div>
      <div className="flex flex-col justify-between h-[120px] text-[1.2em] mt-7 ml-28">
        <Link href={"/"} className="underline">
          Account Settings
        </Link>
        <Link href={"/"} className="underline">
          Feedback
        </Link>
        <Link href={"/"} className="underline">
          Developer Profile
        </Link>
      </div>
      <form className="mt-7 ml-28">
        <div className="flex">
          <input type="checkbox" className="border border-white rounded w-4" />
          <p className="ml-2 text-[1.1em]">Was this helpful to you?</p>
        </div>

        <div className="flex">
          <input type="checkbox" className="border border-white rounded w-4" />
          <p className="ml-2 text-[1.1em]">Did you enjoy it?</p>
        </div>

       
      </form>
    </footer>
  );
};

export default Footer;
