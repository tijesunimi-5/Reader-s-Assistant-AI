'use client'
import QuestionA from '@/components/QuestionA'
import React, { useEffect } from 'react'

const page = () => {
  useEffect(() => {
    const voiceModel = new SpeechSynthesisUtterance();
    
        voiceModel.text =
          "Please provide a comprehension passage or text you want to ask questions on as I can only answer questions based on the text you provide";
    
        voiceModel.lang = "en-US";
        voiceModel.voice = window.speechSynthesis.getVoices()[0];
    
        window.speechSynthesis.speak(voiceModel);
  }, [])
  return (
    <div>
      <QuestionA />
    </div>
  )
}

export default page
