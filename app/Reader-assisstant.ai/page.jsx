'use client'
import Sidebar from '@/components/Sidebar'
import TextAudio from '@/components/Text-to-audio'
import React from 'react'
import { FaWaveSquare } from 'react-icons/fa6'

const page = () => {
  return (
    <div className="pt-[90px] flex w-full">
      <Sidebar />
      <TextAudio />
    </div>
  );
}

export default page
