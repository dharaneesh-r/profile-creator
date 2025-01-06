'use client'
import Link from 'next/link'
import React from 'react'

const Mainpage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen text-center px-4">
      <div className="text-3xl md:text-5xl text-black font-semibold mb-6">
        PROFILE CREATOR
      </div>

      <Link 
        href="/register" 
        className="px-5 py-2 font-semibold text-blue-500 bg-black rounded-md text-center max-w-xs w-full sm:w-auto hover:bg-blue-500 hover:text-white transition-all"
      >
        REGISTER
      </Link>
    </div>
  );
};

export default Mainpage;
