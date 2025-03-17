"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const page = () => {
  //function to toggle blur if forgot password is clicked - reason is to keep the page, not redirecting to a new page
  const [blur, setBlur] = useState("");
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [eye, setEye] = useState("text-white");

  return (
    <div className="h-[90vh] bg-[#F5F5F5] flex flex-col pt-[100px]">
      <h1 className="text-[#3D3CC9] text-center underline text-3xl font-bold">
        Login
      </h1>
      <p className="text-center text-xl text-[#51517a] ">
        Make reading effortless. Let AI read for you, so you can learn on the
        move and get more done.
      </p>

      <Card
        styles={`w-[500px] justify-center p-5 ml-[500px] mt-5 text-white ${blur}`}
        onclick={() => {
          if (blur === "blur") {
            setBlur("");
            return;
          }
        }}
      >
        <div className="inputbox">
          <input
            required="required"
            type="email"
            onClick={() => setEye("text-white")}
          />
          <span>Email</span>
          <i></i>
        </div>

        <div className="inputbox mt-5">
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

        <span
          onClick={() => setBlur("blur")}
          className={`mt-3 w-[145px] text-[14px] underline tracking-wider  cursor-pointer`}
        >
          Forgot password?
        </span>

        <div className="mt-5 ml-[180px]">
          <Button
            styles={"w-[100px] bg-[#3D3CC9]"}
            onClick={() => {
              router.push("/Reader-assisstant.ai");
              setEye("text-white");
            }}
          >
            Login
          </Button>
        </div>

        <div className="mt-6">
          <p className="cursor-pointer">
            {" "}
            <FaGoogle className="bg-[#3D3CC9] p-1 text-[30px] rounded shadow ml-[215px] " />
          </p>
          <p className="mt-2 text-center ml-5 tracking-wider">
            You don't have an account?{" "}
            <Link
              href={"/register/signup"}
              className="underline cursor-pointer"
            >
              Sign up here!
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default page;
