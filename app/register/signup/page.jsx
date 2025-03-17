"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const page = () => {
  const [eye, setEye] = useState("text-white");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="h-[95vh] bg-[#F5F5F5] flex flex-col pt-[100px]">
      <h1 className="text-[#3D3CC9] text-center underline text-3xl font-bold">
        Sign Up
      </h1>
      <p className="text-center text-xl text-[#51517a] ">
        Make reading effortless. Let AI read for you, so you can learn on the
        move and get more done.
      </p>

      <Card styles={`w-[500px] justify-center p-5 ml-[500px] mt-5 text-white`}>
        <div className="inputbox" onClick={() => setEye("text-white")}>
          <input required="required" type="text" />
          <span>First Name</span>
          <i></i>
        </div>

        <div className="inputbox mt-5" onClick={() => setEye("text-white")}>
          <input required="required" type="text" />
          <span>Last Name</span>
          <i></i>
        </div>

        <div className="inputbox mt-5" onClick={() => setEye("text-white")}>
          <input required="required" type="email" />
          <span>Email</span>
          <i></i>
        </div>

        <div className="inputbox relative mt-5 z-40">
          <input
            required="required"
            type={showPassword ? "text" : "password"}
            onClick={() => setEye("text-[#3D3CC9]")}
          />
          <span>Password</span>
          <i></i>
          {showPassword ? (
            <FaEye
              onClick={() => setShowPassword(false)}
              className={`absolute top-5 text-[1.4em] right-5 ${eye} z-50 cursor-pointer`}
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className={`absolute top-5 text-[1.4em] right-5 ${eye} z-50 cursor-pointer`}
            />
          )}
        </div>

        <div className="mt-5 ml-[180px]">
          <Button
            styles={"w-[100px] bg-[#3D3CC9]"}
            onClick={() => {
              setEye("text-white");
              router.push("/register/login");
            }}
          >
            Sign up
          </Button>
        </div>

        <div className="mt-6">
          <p className="cursor-pointer">
            {" "}
            <FaGoogle
              className="bg-[#3D3CC9] p-1 text-[30px] rounded shadow ml-[215px] "
              onClick={() => setEye("text-white")}
            />
          </p>
          <p className="mt-2 text-center ml-5 tracking-wider">
            You have an account already?{" "}
            <Link href={"/register/login"} className="underline cursor-pointer">
              Login!
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default page;
