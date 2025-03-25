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
    router.push('/Reader-assisstant.ai')
  });

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

  // const screenWidth = window.innerWidth;
  // if (screenWidth >= 375) {
  //   useEffect(() => {
      
  //     gsap.to(".small-txt", {
  //       opacity: 1,
  //       marginTop: "18px",
  //       delay: 2,
  //       duration: 2,
  //     });
  //   })
  // }

  return (
    <section className="2xl:w-full 2xl:relative">
      <div
        className={`bg-[#3D3CC9] h-screen text-white flex justify-center 2xl:bg-[#3D3CC9] 2xl:w-full 2xl:h-screen 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-white mainPage`}
      >
        <div className="2xl:flex 2xl:flex-col relative">
          <div className="tagline 2xl:mt-[-220px] relative">
            <h1 className="2xl:big-txt 2xl:text-6xl 2xl:font-bold scale-y-150 hero-txt relative mt-32 2xl:mt-0 text-[28px] font-bold ml-[-3px]">
              Read Smarter, Not Harder
              <span className="cover bg-[#3D3CC9] right-0 absolute w-full h-full"></span>
            </h1>
            <p className="2xl:text-2xl small-txt scale-y-110 2xl:ml-1.5 mt-[-30px] opacity-0 font-[500] txt2 ml-[-3px]">
              With Reader's Assisstant
            </p>
          </div>
          <div className="2xl:absolute 2xl:top-[-120px] hero-img absolute bottom-20">
            <img
              src="/images/Reading_book.png"
              className="2xl:w-[480px] 2xl:ml-24 tagImg 2xl:opacity-0"
            />
          </div>

          <div className="2xl:mt-48 mt-[280px] absolute ">
            <FaArrowDown className="2xl:text-2xl 2xl:ml-[350px] arrow 2xl:scale-y-125 2xl:hidden absolute  ml-36" />
          </div>

          <div className="icons 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:h-[300px] 2xl:text-3xl 2xl:absolute 2xl:left-[-350px] 2xl:top-[-100px] social-div absolute bottom-10 flex justify-between w-[280px] left-7 text-3xl">
            <FaTiktok className="2xl:cursor-pointer socials 2xl:transition-all 2xl:bg-transparent 2xl:backdrop:blur-3xl 2xl:shadow" />
            <FaGithubSquare className="2xl:cursor-pointer socials 2xl:transition-all 2xl:bg-transparent 2xl:backdrop:blur-3xl 2xl:shadow" />
            <FaLinkedin className="2xl:cursor-pointer socials 2xl:transition-all 2xl:bg-transparent 2xl:backdrop:blur-3xl 2xl:shadow" />
            <FaTwitterSquare className="2xl:cursor-pointer socials 2xl:transition-all 2xl:bg-transparent 2xl:backdrop:blur-3xl 2xl:shadow" />
          </div>
        </div>
      </div>

      <div className="2xl:relative  2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:bg-[#F5F5F5] info-div">
        <div className="2xl:flex 2xl:flex-col 2xl:w-full 2xl:relative">
          <h2 className="text-[#3D3CC9] 2xl:text-3xl font-[700] underline 2xl:mt-32 2xl:w-[500px] 2xl:items-start 2xl:ml-[50px] info-head text-[23px] ml-2 mt-20">
            Unlock Smarter Reading With Reader's Assisstant
          </h2>
          <p className="info-txt 2xl:text-[1.6em] 2xl:w-[850px] 2xl:mx-10 2xl:mt-5 2xl:font-[500] mx-2 mt-2">
            Take your reading skills to the next level with Reader's Assistant,
            your personalized reading companion. Our innovative tool analyzes
            your text or material and transforms it into an engaging audiobook,
            allowing you to:
          </p>
          <ul className="2xl:mx-14 2xl:text-[1.57em] list-disc info-ul mx-6">
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

          <img
            src="/images/Learning_step.png"
            alt="learning image"
            className="mt-[-50px] 2xl:w-[500px] 2xl:absolute 2xl:right-20 2xl:top-32 info-img1"
          />
        </div>

        <div className="relative h-[80vh] 2xl:mt-18 info-div2">
          <img
            src="/images/research_paper.png"
            className="bottom-[-30px] w-[450px] 2xl:w-[500px] absolute 2xl:top-28 2xl:left-6 info-img2"
          />
          <div className="2xl:ml-[780px]">
            <h2 className="text-[#3D3CC9] 2xl:text-3xl font-[700] text-[23px] ml-2 underline 2xl:mt-32 2xl:ml-[-120px] info-head2">
              Get Answers at Your Fingertips
            </h2>

            <p className="info2 2xl:text-[1.6em] 2xl:w-[850px] 2xl:mt-5 2xl:font-[500] 2xl:ml-[-120px] info-txt2 mx-2">
              Reader's Assistant also helps you grasp difficult concepts by
              providing:
            </p>
            <ul className="2xl:ml-[-100px] 2xl:text-[1.57em] list-disc mx-6 info-ul2">
              <li>
                <b>Instant answers</b> to questions based on your provided text
                or material
              </li>
              <li>
                <b>Clear explanations</b> to help you understand complex ideas
              </li>
            </ul>

            <p className="2xl:text-[1.5em] 2xl:mt-20 mx-2 info-dir">
              See more info in our{" "}
              <Link
                href={"/"}
                className="underline text-[#3D33C9] 2xl:font-semibold span"
              >
                Guidelines
              </Link>
            </p>
          </div>
        </div>

        <div className="start 2xl:mt-10 text-[#3D3CC9] 2xl:text-3xl font-[700] underline 2xl:mb-40 start-div text-[23px] mt-[40px]">
          <h1 className="text-center start-h">Get Started</h1>

          <div className="2xl:flex cardDiv mt-5">
            <Card
              styles={
                "2xl:w-[300px] 2xl:h-[445px] 2xl:ml-[400px] 2xl:flex 2xl:flex-col 2xl:mt-10 2xl:cursor-pointer cardBlur w-[320px] ml-7 mb-8"
              }
              onclick={checkSignedInUser}
            >
              <img src="/images/book_fly.png" className="w-[400px]" />
              <div className="ml-5 mb-2">
                <h1 className="2xl:text-white 2xl:mx-3 2xl:mt-1 2xl:text-center">
                  Audio Assisstant
                </h1>
                <p className="2xl:text-[18px] 2xl:ml-3 2xl:mb-5 2xl:pt-2 2xl:text-white text-[19px]">
                  Convert your material to audio
                </p>
              </div>
            </Card>

            <Card
              styles={
                "2xl:w-[300px] 2xl:ml-20 2xl:flex 2xl:flex-col 2xl:mt-10 2xl:cursor-pointer cardBlur w-[320px] ml-7 mb-8"
              }
              onclick={checkSignedInUser}
            >
              <img
                src="/images/ques.png"
                className="2xl:w-[400px]"
                alt="Question"
              />
              <div className="ml-5 mb-2">
                <h1 className="2xl:text-white 2xl:mx-3 2xl:text-center">
                  Question and Answer
                </h1>
                <p className="2xl:text-[18px] 2xl:ml-3 2xl:mb-5 2xl:pt-2 2xl:text-white 2xl:decoration-0">
                  Ask questions based on text you provide
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
