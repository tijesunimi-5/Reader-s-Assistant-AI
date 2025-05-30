"use client";
import React from "react";
import Card from "./Card";
import Link from "next/link";

const Guidelines = () => {
  return (
    <div className="bg-[#f5f5f5] rounded 2xl:ml-[320px] flex-col 2xl:w-[1190px] mb-20 guideline text-black 2xl:hidden flex">
      <div className="w-full">
        <h1 className="2xl:text-3xl font-bold text-center text-[#3d3cc9] text-[25px]">
          Guidelines
        </h1>
        <p className="p-3 2xl:text-[22px] tracking-wide text-[18px]">
          Reader's assisstant AI, is an AI model that assissts reader in
          covering large and bulky material if you enjoy listening, This is
          meant just for you.{" "}
        </p>
      </div>

      <div className="text-to-audio-guide 2xl:mx-10 mx-5">
        <Card styles={"mt-3 p-2"}>
          <h1 className="text-[2em] 2xl:text-center font-bold">
            Text-to-Speech Guideline
          </h1>
          <p className="mt-3 2xl:ml-10 text-[1.18em]">
            In this section, you can copy and paste texts that you'd love to
            listen to. <br /> Copy text and paste in the input field 
            . <br />
            After pasting your text, click on the convert to audio button and
            you should start to listen to the pasted text.
          </p>

          <h2 className="ml-3 mt-4 font-bold text-xl">Demo:</h2>
          <div className="demo-video 2xl:ml-24 mt-7">
            <video src="/video/RAAI_DEMO.mp4" controls loop></video>
          </div>

          <div className="extras mt-9 2xl:mx-10 mx-2">
            <h2 className="text-2xl font-bold ">Additionals</h2>
            <ul className="list-disc text-xl 2xl:w-[700px] ml-4">
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

      <div className="pdf-to-audio-guide 2xl:mx-10 my-10 mx-5">
        <Card styles={"p-2"}>
          <h1 className="text-[2em] 2xl:text-center font-bold">
            PDF-to-Speech Guideline
          </h1>
          <p className="mt-3 2xl:ml-10 text-[1.18em]">
            In this section, you can select a PDF file from your file and
            convert them to text then convert to audio. select pdf file
            . <br />
            After selecting your File, click on the convert to audio button and
            you should start to listen to the selected file.
          </p>

          <div className="demo-video">
            <h2 className="ml-3 mt-4 font-bold text-xl">Demo:</h2>

            <video
              src="/video/PDF_DEMO.mp4"
              controls
              loop
              className="2xl:ml-24 mt-7"
            ></video>
          </div>
        </Card>
      </div>

      <div className="qna-guide 2xl:mx-10 my-10 mx-5">
        <Card styles={"p-2"}>
          <h1 className="text-[2em] 2xl:text-center font-bold">
            Question and answer Guideline
          </h1>
          <p className="mt-3 2xl:ml-10 text-[1.18em]">
            In this section, you can paste a passage you want to receive answers. You should wait for the model to finish loading before you prompt it for questions.
            . <br />
            After pasting the text, provide your question and click on the generate answer button.
          </p>

          <div className="demo-video">
            <h2 className="ml-3 mt-4 font-bold text-xl">Demo:</h2>

            <video
              src="/video/QNA_DEMO.mp4"
              controls
              loop
              className="2xl:ml-24 mt-7"
            ></video>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Guidelines;
