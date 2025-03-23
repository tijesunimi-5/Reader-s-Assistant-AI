"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  FaArrowDown,
  FaGithubSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";
import gsap from "gsap";
import Link from "next/link";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  //for future reference to check signed in user and not signed in
  const [signedIn, setSignedIn] = useState(false);
  const checkSignedInUser = useCallback(() => {
    if (!signedIn) {
      router.push("/register/signup");
    } else {
      router.push("/main-page");
    }
  }, [signedIn, router]);

  useEffect(() => {
    gsap.to(".cover", {
      width: 0,
      duration: 4,
    });

    gsap.to(".small-txt", {
      opacity: 1,
      marginTop: "5px",
      delay: 2,
      duration: 2,
    });

    gsap.to(".arrow", {
      display: "block",
      delay: 4.5,
    });

    gsap.to(".tagImg", {
      opacity: 5,
      duration: 3,
    });
  }, []);

  return (
    <section className="w-full relative">
      <div
        className={`bg-[#3D3CC9] w-full h-screen flex justify-center items-center text-white `}
      >
        {/* <div className="round absolute top-20 left-10"></div> */}
        <div className="flex flex-col relative">
          <div className="tagline mt-[-180px] relative">
            <h1 className="big-txt text-6xl font-bold scale-y-150">
              Read Smarter, Not Harder
              <span className="cover bg-[#3D3CC9] right-0 absolute w-full h-full"></span>
            </h1>
            <p className="text-2xl small-txt scale-y-110 ml-1.5 mt-[-30px] opacity-0 font-[500]">
              With Reader's Assisstant
            </p>
          </div>
          <div className="absolute top-[-100px]">
            <img
              src="/images/Reading_book.png"
              className="w-[450px] ml-24 tagImg opacity-0"
            />
          </div>

          <div className="mt-48 absolute">
            <FaArrowDown className="text-2xl ml-[350px] arrow scale-y-125 hidden" />
          </div>

          <div className="icons flex flex-col justify-between h-[300px] text-3xl absolute left-[-350px] top-[-100px]">
            <FaTiktok className="cursor-pointer socials transition-all bg-transparent backdrop:blur-3xl shadow" />
            <FaGithubSquare className="cursor-pointer socials transition-all bg-transparent backdrop:blur-3xl shadow" />
            <FaLinkedin className="cursor-pointer socials transition-all bg-transparent backdrop:blur-3xl shadow" />
            <FaTwitterSquare className="cursor-pointer socials transition-all bg-transparent backdrop:blur-3xl shadow" />
          </div>
        </div>
      </div>

      <div className="relative  w-full flex flex-col justify-center bg-[#F5F5F5]">
        <div className="flex flex-col w-full relative">
          <h2 className="text-[#3D3CC9] text-3xl font-[700] underline mt-32 w-[500px] items-start ml-[50px] ">
            Unlock Smarter Reading With Reader's Assisstant
          </h2>
          <p className="info text-[1.6em] w-[850px] mx-10 mt-5 font-[500]">
            Take your reading skills to the next level with Reader's Assistant,
            your personalized reading companion. Our innovative tool analyzes
            your text or material and transforms it into an engaging audiobook,
            allowing you to:
          </p>
          <ul className="mx-14 text-[1.57em] list-disc ">
            <li>
              <b>Listen and learn</b> on-the-go, anytime, anywhere.
            </li>
            <li>
              <b>Improve comprehension</b> by experiencing your material in a
              new way.
            </li>
            <li>
              <b>Save time</b> by multitasking while listening to your
              audiobook.
            </li>
          </ul>

          {/* <span className="mx-10 mt-10 font-bold text-2xl w-[800px]">
            Transform your text into sound. Stay ahead with AI that reads, so
            you can focus on what matters.
          </span> */}

          <img
            src="/images/learning_step.png"
            alt="learning image"
            className="w-[500px] absolute right-20 top-32"
          />
        </div>

        <div className="relative h-[80vh] mt-18">
          <img
            src="/images/research_paper.png"
            className="2xl:w-[500px] 2xl:absolute 2xl:top-28 2xl:left-6"
          />
          <div className="2xl:ml-[780px]">
            <h2 className="text-[#3D3CC9] text-3xl font-[700] underline mt-32 ml-[-120px]">
              Get Answers at Your Fingertips
            </h2>

            <p className="info2 text-[1.6em] w-[850px] mt-5 font-[500] ml-[-120px]">
              Reader's Assistant also helps you grasp difficult concepts by
              providing:
            </p>
            <ul className="ml-[-100px] text-[1.57em] list-disc ">
              <li>
                <b>Instant answers</b> to questions based on your provided text
                or material
              </li>
              <li>
                <b>Clear explanations</b> to help you understand complex ideas
              </li>
            </ul>

            <p className="text-[1.5em] mt-20">
              See more info in our{" "}
              <Link href={"/"} className="underline font-semibold">
                Guidelines
              </Link>
            </p>
          </div>
        </div>

        <div className="start mt-10 text-[#3D3CC9] text-3xl font-[700] underline mb-40">
          <h1 className="text-center">Get Started</h1>

          <div className="flex">
            <Card
              styles={
                "w-[300px] h-[445px] ml-[400px] flex flex-col mt-10 cursor-pointer cardBlur"
              }
              onclick={checkSignedInUser}
            >
              <img src="/images/book_fly.png" className="w-[400px]" />
              <h1 className="text-white mx-3 mt-1 text-center">
                Audio Assisstant
              </h1>
              <p className="text-[18px] ml-3 mb-5 pt-2 text-white">
                Convert your material to audio
              </p>
            </Card>

            <Card
              styles={
                "w-[300px] ml-20 flex flex-col mt-10 cursor-pointer cardBlur"
              }
              onclick={checkSignedInUser}
            >
              <img
                src="/images/ques.png"
                className="w-[400px]"
                alt="Question"
              />
              <h1 className="text-white mx-3 text-center">
                Question and Answer
              </h1>
              <p className="text-[18px] ml-3 mb-5 pt-2 text-white decoration-0">
                Ask questions based on text you provide
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
