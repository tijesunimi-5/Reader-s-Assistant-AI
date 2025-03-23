"use client";
import React from "react";
import Card from "./Card";
import Link from "next/link";

const Guidelines = () => {
  return (
    <div className="bg-[#f5f5f5] rounded ml-[320px] flex-col w-[1190px] mb-20 guideline text-black hidden">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center text-[#3d3cc9]">
          Guidelines
        </h1>
        <p className="p-3 text-[22px] tracking-wide">
          Reader's assisstant AI, is an AI model that assissts reader in
          covering large and bulky material if you enjoy listening, This is a
          meant just for you.{" "}
        </p>
      </div>

      <div className="text-to-audio-guide mx-10">
        <Card styles={"mt-3 p-2"}>
          <h1 className="text-[2em] text-center font-bold">
            Text-to-Speech Guideline
          </h1>
          <p className="mt-3 ml-10 text-[1.18em]">
            In this section, you can copy and paste texts that you'd love to
            listening to. <br /> Copy text and paste in the input field for{" "}
            <Link href={"/"} className="underline">
              Text-to-Speech
            </Link>
            . <br />
            After pasting your text, click on the convert to audio button and
            you should start to listen to the pasted text.
          </p>

          <h2 className="ml-3 mt-4 font-bold text-xl">Demo:</h2>
          <div className="demo-video ml-24 mt-7">
            <video
              src="/video/RAAI_DEMO.mp4"
              
              controls
              loop
            ></video>
          </div>

          <div className="extras mt-9 mx-10">
            <h2 className="text-2xl font-bold ">Additionals</h2>
            <ul className="list-disc text-xl w-[700px] ml-4">
              <li>You can Pause and Play on your audio.</li>
              <li>You can Rewind and Forward.</li>
              <li>
                You can also Play and Stop audio (It's recommended you click the
                stop button when you load new text then click play to play new
                text).
              </li>
              <li>
                If you find it difficult to play a text, click the play button.
              </li>
            </ul>
          </div>
        </Card>
      </div>

      <div className="pdf-to-audio-guide mx-10 my-10">
        <Card styles={"p-2"}>
          <h1 className="text-[2em] text-center font-bold">
            PDF-to-Speech Guideline
          </h1>
          <p className="mt-3 ml-10 text-[1.18em]">
            In this section, you can select a PDF file from your file and
            convert them to text then convert to audio. select pdf file:
            <Link href={"/"} className="underline">
              PDF-to-Speech
            </Link>
            . <br />
            After selecting your File, click on the convert to audio button and
            you should start to listen to the selected file.
          </p>

          <div className="demo-video">
            <h2 className="ml-3 mt-4 font-bold text-xl">Demo:</h2>

            <video src="/video/RAAI_DEMO.mp4" className="ml-24 mt-7"></video>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Guidelines;
