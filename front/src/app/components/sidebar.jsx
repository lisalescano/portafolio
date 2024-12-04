'use client'

import { useState } from "react";

export default function SideBar() {

  const [open, setOpen] = useState(false)

  return (
    <div className="bg-orange-800 py-3 fixed top-0 left-0 right-0 text-white z-50">

      <button className="ml-4" onClick={() => setOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <a href="CV_Lisandro_Ingles.pdf" download="Lisandro-Resume"
        className="fixed top-0 right-0 mr-4 mt-1">
        <button
          className="inline-flex items-center gap-2 rounded bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all ease-in-out
          hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 active:scale-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download resume
        </button>
      </a>

      <div className={`${!open && "hidden"} bg-gray-600/5 min-h-screen w-full fixed top-0 left-0 right-0
      backdrop-blur-sm`}></div>

      <div className={`${open ? "w-80" : "w-0"} bg-gradient-to-tl from-orange-700 to-orange-950 min-h-screen fixed top-0 left-0 
      transition-all duration-200`}>
        <div className={`${!open && "hidden"} pt-3 `}>
          <button className="ml-3 hover:shadow-orange-500/40" onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </button>

          <img src="https://avatars.githubusercontent.com/u/90216772?s=400&u=e7126c41bfb8210783d93ed0eea504096ab1f87a&v=4" alt="avatar"
            class="w-32 h-32 rounded-full mx-auto hover:w-52 hover:h-52 hover:cursor-pointer duration-500" />
          <div className="text-center text-white">
            <div className="mt-4 text-lg font-bold cursor-pointer py-2 mb-4 hover:bg-orange-500/70 duration-200 hover:text-white" onClick={() => setOpen(false)}>Home</div>
            <div className="mt-4 text-lg font-bold cursor-pointer py-2 mb-4 hover:bg-orange-500/70 duration-200 hover:text-white" >My projects</div>
            <div className="mt-4 text-lg font-bold cursor-pointer py-2 mb-4 hover:bg-orange-500/70 duration-200 hover:text-white">Skills</div>
            <div className="mt-4 text-lg font-bold cursor-pointer py-2 mb-4 hover:bg-orange-500/70 duration-200 hover:text-white">About me</div>
          </div>
        </div>
      </div>
    </div>
  );
}