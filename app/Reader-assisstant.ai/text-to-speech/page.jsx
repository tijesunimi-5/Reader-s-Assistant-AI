"use client";
import TextAudio from "@/components/Text-to-audio";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    const speak = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;

      const voiceModel = new SpeechSynthesisUtterance();
      voiceModel.text = `Hello, Welcome to Reader's assistant, I will be your Personal AI assistant.`;
      voiceModel.lang = "en-US";

      // Prefer a specific voice if available
      const preferredVoice = voices.find(
        (voice) =>
          voice.name.includes("Google US English") || voice.lang === "en-US"
      );

      voiceModel.voice = preferredVoice || voices[0]; // fallback
      window.speechSynthesis.speak(voiceModel);
    };

    // Some browsers load voices asynchronously
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = speak;
    } else {
      speak();
    }
  }, []);
  return (
    <div className="pt-20">
      <TextAudio />
    </div>
  );
};

export default page;
