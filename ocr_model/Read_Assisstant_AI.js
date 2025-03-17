"use client";
import React, { useState } from "react";
import Tesseract from "tesseract.js";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs";

const Model = () => {
  const [file, setFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePdfChange = (e) => {
    const selectedPdf = e.target.files[0];
    setPdfFile(selectedPdf);
  };

  function cleanText(text) {
    return text.replace(/[^\w\s]/gi, "");
  }

  // Process OCR when button is clicked
  const handleProcessImage = () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageDataUrl = e.target.result;

      setLoading(true);

      // Run OCR on the base64 image
      Tesseract.recognize(imageDataUrl, "eng", {
        logger: (m) => console.log(m), // Optional: progress logger
      })
        .then(({ data: { text } }) => {
          const cleanedText = cleanText(text);
          setText(cleanedText); // Save recognized text to state
        })
        .catch((err) => {
          console.error("OCR Error:", err);
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    };

    reader.readAsDataURL(file); // Convert file to base64
  };

  const handlePdfProcess = () => {
    if (!pdfFile) {
      alert("please select a pdf first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);

      setLoading(true);

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
        setText(cleanedText);
      } catch (error) {
        console.error("PDF Extraction Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsArrayBuffer(pdfFile);
  };

  return (
    <section className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">
        Trial Optical Character Recognition
      </h1>

      {/* Image Upload */}
      <div className="space-y-2">
        <h2 className="font-semibold">Upload Image for OCR</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2"
        />
        <button
          onClick={handleProcessImage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Processing..." : "Read Image"}
        </button>
      </div>

      {/* PDF Upload */}
      <div className="space-y-2">
        <h2 className="font-semibold">Upload PDF to Extract Text</h2>
        <input
          type="file"
          accept="application/pdf"
          onChange={handlePdfChange}
          className="border p-2"
        />
        <button
          onClick={handlePdfProcess}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Processing..." : "Read PDF"}
        </button>
      </div>

      {/* Output */}
      {text && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold">Extracted Text:</h2>
          <p>{text}</p>
        </div>
      )}
    </section>
  );
};

export default Model;
