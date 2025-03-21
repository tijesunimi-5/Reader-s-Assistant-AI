'use client'
import React from 'react'

const Button = ({styles, children, onClick}) => {
  return (
    <button
      className={` px-3 py-1.5 font-bold border border-white  shadow-2xl tracking-wider bg-[#3D3CC9] ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button
