"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaSignal } from "react-icons/fa";
import Tesseract from "tesseract.js";
import Card from "./Card";
import * as pdfjslib from "pdfjs-dist";
import gsap from "gsap";

const TextAudio = () => {
  const [file, setFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState("");
  const [pdfText, setPdfTex]
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePdfChange = (e) => {
    const selectedPdf = e.target.files[0];
    setPdfFile(selectedPdf);
  };

  //to remove any special characters
  function cleanText(text) {
    return text.replace(/[^\w\s]/gi, "");
  }

  //process image conversion to text
  const handleImageProcessing = () => {
    if (!file) {
      setError("Please select a image first!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageDataUrl = e.target.result;

      setLoading(true);

      Tesseract.recognize(imageDataUrl, "eng", {
        logger: (m) => console.log(m),
      })
        .then(({ data: { text } }) => {
          const cleanedText = cleanText(text);
          setText(cleanedText);
        })
        .catch((err) => {
          console.error("Optical Character Recognition Error:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    reader.readAsDataURL(file);
  };

  //process pdf conversion to text
  const handlePdfProcessing = () => {
    if (!pdfFile) {
      setError("please select a pdf first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);

      setLoading(true);

      try {
        const pdf = await pdfjslib.getDocument({ data: typedArray }).promise;
        let extractedText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => item.str).join(" ");
          extractedText += pageText + "\n\n";
        }

        const cleanedText = cleanText(extractedText);
        setText(cleanedText);
      } catch (error) {
        console.error("PDF Extraction Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsArrayBuffer(pdfFile);
  };

  useEffect(() => {
    gsap.to('footer', {
      display: "none"
    })
  })

  return (
    <div className="w-full flex flex-col h-full ml-[300px]">
      <h1 className="text-center text-3xl font-bold text-[#3D3CC9]">
        Text-to-Audio
      </h1>
      <div className="mx-5">
        <textarea
          name="text-to-audio-input"
          className="w-[1150px] bg-[#f5f5f5] border-3 border-[#ccc] rounded-xl h-[300px] p-3 mt-5 placeholder:italic"
          placeholder="Type or paste text..."
        ></textarea>

        <Button styles={"mt-3"}>Convert to audio</Button>
      </div>

      {/* <div className="output-audio mt-4 mx-5 text-[#3D3CC9]">
        <FaSignal />
      </div> */}

      {/* image to text */}
      <div className="image-to-text mt-10">
        <h1 className="text-center text-3xl font-bold text-[#3D3CC9]">
          Image-to-Audio
        </h1>
        <p className="mx-5">
          Make sure your image contains text not images or special characters as
          I can't convert images and not accurate with image to text if image
          contains special characters.
        </p>
        <div className="mx-5 mt-4 ">
          <input
            type="file"
            accept="image/*"
            id="fileUpload"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className=" flex w-[400px]">
            <label
              htmlFor="fileUpload"
              className="border border-[#3D3CC9] rounded p-2 cursor-pointer text-[#3D3CC9] font-bold text-xl mt-4 w-[200px]"
            >
              {file ? file.name : "Upload Image"}
            </label>
            <Button
              styles={"h-[40px] ml-5 mt-5"}
              onClick={handleImageProcessing}
            >
              {loading ? "Processing..." : "Read Image"}
            </Button>
          </div>
          <p className="text-red-500">{error}</p>
          {text && (
            <div className="">
              <Card styles={"p-5 text-[1.2em] mt-4"}>{text}</Card>
              <Button styles={"mt-3"}>Convert to audio</Button>
            </div>
          )}
        </div>
      </div>

      {/* pdf to audio */}
      <div className="image-to-text mt-10 mb-10">
        <h1 className="text-center text-3xl font-bold text-[#3D3CC9]">
          PDF-to-Audio
        </h1>
        <div className="mx-5 mt-4 ">
          <input
            type="file"
            accept="application/pdf"
            id="pdfUpload"
            onChange={handlePdfChange}
            className="hidden"
          />
          <div className=" flex w-[400px]">
            <label
              htmlFor="pdfUpload"
              className="border border-[#3D3CC9] rounded p-2 cursor-pointer text-[#3D3CC9] font-bold text-xl mt-4 w-[200px]"
            >
              {file ? file.name : "Upload PDF"}
            </label>
            <Button styles={"h-[40px] ml-5 mt-5"} onClick={handlePdfProcessing}>
              {loading ? "Processing..." : "Read PDF"}
            </Button>
          </div>
          <p className="text-red-500">{error}</p>
          {text && (
            <div className="hidden">
              <Card styles={"p-5 text-[1.2em] mt-4"}>{text}</Card>
              <Button styles={"mt-3"}>Convert to audio</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAudio;
