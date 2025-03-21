"use client";
import React, { useRef, useState } from "react";
import Button from "./Button";
import Tesseract from "tesseract.js";
import Card from "./Card";
import {
  FaBackward,
  FaDownload,
  FaForward,
  FaPause,
  FaPlay,
  FaStop,
} from "react-icons/fa";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
pdfjsLib.GlobalWorkerOptions.disableFontFace = false;

if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.mjs";
  //   pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
}

const TextAudio = () => {
  const [file, setFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [error, setError] = useState("");
  const [pdfError, setPdfError] = useState("");
  const [speechRate, setSpeechRate] = useState(1);
  const [speechLoading, setSpeechLoading] = useState(false);
  const [speech, setSpeech] = useState(null);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [textContent, setTextContent] = useState("");
  const [speechError, setSpeechError] = useState("");

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
    return text.replace(/[^\w\s,.!?;:]/gi, "");
  }

  //speech handling
  const handleSpeech = () => {
    if (!textContent.trim()) {
      setSpeechError("Please enter some text.");
      setTimeout(() => setSpeechError(""), 1500);
      return;
    }
    const newSpeech = new SpeechSynthesisUtterance(
      textContent.substring(speechIndex)
    );
    newSpeech.rate = speechRate;

    // Track the current index while speaking
    newSpeech.onboundary = (event) => {
      setSpeechIndex(speechIndex + event.charIndex);
    };
    // newSpeech.onstart = startRecording;
    // newSpeech.onend = stopRecording;
    setSpeech(newSpeech);
    // window.speechSynthesis.speak(newSpeech);
    captureAndDownloadSpeech(textContent);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
  };
  const handleResume = () => {
    window.speechSynthesis.resume();
  };
  const handleStop = () => {
    window.speechSynthesis.cancel();
    setSpeechIndex(0);
  };
  const handleRewind = () => {
    const newIndex = Math.max(textContent.length, speechIndex - 50);
    setSpeechIndex(newIndex);
    restartSpeech(newIndex);
  };

  const handleForward = () => {
    const newIndex = Math.min(textContent.length, speechIndex + 20);
    setSpeechIndex(newIndex);
    restartSpeech(newIndex);
  };

  // Helper function to restart speech at a new index
  const restartSpeech = (index) => {
    window.speechSynthesis.cancel(); // Stop current speech
    setTimeout(() => handleSpeech(index), 100); // Restart with delay
  };

  async function captureAndDownloadSpeech(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;

    const audioContext = new AudioContext();
    const dest = audioContext.createMediaStreamDestination();
    const mediaRecorder = new MediaRecorder(dest.stream);

    let audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);

      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = audioUrl;
      downloadLink.download = "speech.wav";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    // Connect speech synthesis to the recording
    const source = audioContext.createMediaStreamSource(dest.stream);
    source.connect(audioContext.destination);

    utterance.onstart = () => {
      mediaRecorder.start();
    };

    utterance.onend = () => {
      mediaRecorder.stop();
      audioContext.close();
    };

    synth.speak(utterance);
  }


  

  const handleImageProcessing = () => {
    if (!file) {
      setError("Select an image!");
      setTimeout(() => {
        setError("");
      }, 1000);
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

          setTextContent(text)
        })
        .catch((err) => {
          console.error("OCR Error:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    reader.readAsDataURL(file);
  };

  const handlePDFProcessing = () => {
    if (!pdfFile) {
      setPdfError("Please select a file!");
      setTimeout(() => {
        setPdfError("");
      }, 1000);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = async function () {
      const typedArray = new Uint8Array(this.result);
      setPdfLoading(true);

      try {
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
        let extractedText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => item.str).join(" ");
          extractedText += pageText + "\n\n";
        }

        const cleanedText = cleanText(extractedText);
        setPdfText(cleanedText);

        setTimeout(() => {
          setTextContent(pdfText);
        }, 1900)
      } catch (error) {
        console.error("PDF Extraction Error:", error);
      } finally {
        setPdfLoading(false);
      }
    };

    fileReader.readAsArrayBuffer(pdfFile);
  };

  return (
    <div className="w-full flex-col h-full ml-[300px] tts hidden">
      <h1 className="text-center text-3xl font-bold text-[#3D3CC9]">
        Text-to-Audio
      </h1>
      <div className="mx-5">
        <textarea
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          name="text-to-audio-input"
          className="w-[1150px] bg-[#f5f5f5] border-3 border-[#ccc] rounded-xl h-[300px] p-3 mt-5 placeholder:italic text"
          placeholder="Type or paste text..."
        ></textarea>

        <Button styles={"mt-3 rounded-2xl text-white"} onClick={handleSpeech}>
          {speechLoading ? "Converting to audio" : "Convert to audio"}
        </Button>

        <div>{speechError}</div>

        <div className="controlPanels flex align-middle items-center">
          <div className="mt-3">
            <label htmlFor="rate" className="text-xl font-bold text-[#3D3CC9]">
              Speech Rate:{" "}
            </label>
            <input
              type="range"
              id="rate"
              min="0.5"
              max="2"
              step="0.1"
              value={speechRate}
              onChange={(e) => setSpeechRate(e.target.value)}
              className="ml-2"
            />
            <span className="ml-2">{speechRate}</span>
          </div>

          <div className="flex items-center ml-5">
            <FaBackward
              className="bg-[#3D3CC9] text-white mr-2 p-2 text-3xl rounded shadow"
              onClick={handleRewind}
            />
            <FaPlay
              onClick={handleResume}
              className="bg-[#3D3CC9] text-white mr-2 p-2 text-3xl rounded shadow"
            />
            <FaPause
              onClick={handlePause}
              className="bg-[#3D3CC9] text-white mr-2 p-2 text-3xl rounded shadow"
            />
            <FaStop
              className="bg-[#3D3CC9] text-white mr-2 p-2 text-3xl rounded shadow"
              onClick={handleStop}
            />
            <FaForward
              className="bg-[#3D3CC9] text-white mr-2 p-2 text-3xl rounded shadow"
              onClick={handleForward}
            />
            {/* <FaDownload
              className="bg-[#3D3CC9] text-white mr-2 p-2 text-3xl rounded shadow"
              onClick={captureAndDownloadSpeech(textContent)}
            /> */}
          </div>
        </div>
      </div>

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
              styles={"h-[40px] ml-5 mt-5 rounded-2xl text-white"}
              onClick={handleImageProcessing}
            >
              {loading ? "Processing..." : "Read Image"}
            </Button>
          </div>
          <p className="text-red-500">{error}</p>
          {text && (
            <div className="">
              <Card
                styles={"p-5 text-[1.2em] mt-4"}
              >
                {text}
              </Card>
              <Button
                styles={"mt-3 rounded-2xl text-white"}
                onClick={handleSpeech}
              >
                Convert to audio
              </Button>
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
              {pdfFile ? pdfFile.name : "Upload PDF"}
            </label>
            <Button
              styles={"h-[40px] ml-5 mt-5 rounded-2xl text-white"}
              onClick={handlePDFProcessing}
            >
              {pdfLoading ? "Processing..." : "Read PDF"}
            </Button>
          </div>
          <p className="text-red-500">{pdfError}</p>
          {pdfText && (
            <div className="block">
              <Card styles={"p-5 text-[1.2em] mt-4"}>{pdfText}</Card>
              <Button styles={"mt-3 rounded-2xl text-white"} onClick={handleSpeech}>
                Convert to audio
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAudio;
