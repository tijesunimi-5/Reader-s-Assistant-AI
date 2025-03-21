import { NextResponse } from "next/server";
import pdfParse from "pdf-parse";

export async function POST(req) {
  try {
    console.log("✅ API HIT: /api/extract");

    // Ensure request has form data
    const formData = await req.formData();
    if (!formData) {
      console.error("No form data received");
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Retrieve file from formData
    const file = formData.get("file");
    if (!file) {
      console.error("No file uploaded");
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    console.log("🔄 Reading file as buffer...");

    // Convert the file (Blob) to a buffer
    const stream = file.stream();
    const reader = stream.getReader();
    let chunks = [];

    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      if (value) chunks.push(value);
      done = doneReading;
    }

    const buffer = Buffer.concat(chunks);

    if (buffer.length === 0) {
      console.error("Empty file received");
      return NextResponse.json(
        { error: "Uploaded file is empty" },
        { status: 400 }
      );
    }

    console.log("Extracting text from PDF...");
    const data = await pdfParse(buffer);

    if (!data.text.trim()) {
      console.error("No text found in PDF");
      return NextResponse.json(
        { error: "Failed to extract text" },
        { status: 500 }
      );
    }

    console.log("✅ Text extracted successfully");
    return NextResponse.json({ text: data.text });
  } catch (error) {
    console.error("Error in PDF Processing:", error);
    return NextResponse.json(
      { error: "Failed to extract text" },
      { status: 500 }
    );
  }
}
