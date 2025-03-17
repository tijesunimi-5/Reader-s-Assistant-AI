'use client'
import React from 'react'

const Button = ({styles, children, onClick}) => {
  return (
    <button
      className={`${styles} px-3 py-1.5 font-bold border border-white rounded-2xl shadow-2xl tracking-wider text-white bg-[#3D3CC9]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button
