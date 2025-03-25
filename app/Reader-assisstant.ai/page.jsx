'use client'
import Guidelines from '@/components/Guidelines'
import QuestionA from '@/components/QuestionA'
import Sidebar from '@/components/Sidebar'
import TextAudio from '@/components/Text-to-audio'
import UserProfile from '@/components/UserProfile'
import React from 'react'

const page = () => {
  return (
    <div className="pt-[90px] flex w-full">
      <Sidebar />
      <TextAudio />
      {/* <UserProfile /> */}
      <QuestionA />
      <Guidelines />
      {/* <div className='w-full ml-[500px] h-[100vh]'></div> */}
    </div>
  );
}

export default page
