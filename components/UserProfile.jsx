"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Card from "./Card";
import Button from "./Button";

const UserProfile = () => {
  const [username, setUsername] = useState("Tijesunimi");
  const [userEmail, setUserEmail] = useState("tijesunimiidowu16@gmail.com");
  return (
    <div className="userProfile ml-[310px] h-full mb-10 w-full flex flex-col">
      <div className="flex justify-items-center relative">
        <div className="profile-picture w-[150px] h-[150px] rounded-full bg-[#3D3CC9] border-0 border-white flex justify-center items-center ml-[50px] mt-10">
          <FaUser className="text-8xl text-white" />
        </div>
        <div className="relative">
          <h1 className="mt-[85px] ml-9 font-bold text-3xl">{username}</h1>
          <p className="ml-9 text-xl mt-7 hover:underline transition-all">
            {userEmail}
          </p>
        </div>
        <hr className="w-[990px] ml-[100px] mt-2 border border-[#3D3CC9] absolute bottom-[-10px]" />
      </div>

      <div className="w-[990px] mt-10 text-[1.3em] font-[500] ml-16">
        Thank you for choosing this platform, Hope you enjoyed the services it
        provides.
        <p className="pt-5">
          As the page doesn't provide more details about you, we planned to keep
          our user's details discrete, So we won't ask you for any details that
          are personal (like your password and any other sensitive data).
        </p>
        <div>
          <h1 className="text-center text-[#3D3CC9] font-bold text-3xl mt-3">
            Feedback
          </h1>
          <p>
            We would love to know your feedback on this! Please drop your
            reviews, and insight (share with others how this has helped you)
          </p>
        </div>
        <Card styles={"p-4 ml-22 mt-14"}>
          <textarea
            name="review"
            id="review"
            rows={5}
            cols={2}
            placeholder="Let's us know your thought on this..."
            className="border-[#ccc] border p-2 placeholder:italic outline-0"
          ></textarea>

          <div className="text-center">
            <Button styles={"rounded-2xl text-center mt-10 w-[200px]"}>
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
