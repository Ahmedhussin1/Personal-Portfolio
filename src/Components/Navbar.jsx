'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
function Navbar() {
  const [borderColor, setBorderColor] = useState("#212225");
  useEffect(()=>{
    const handelScroll = () =>{
      if(window.scrollY > 50 ){
        setBorderColor("#777b84");
      }else{
        setBorderColor("#212225");
      }
    };
    window.addEventListener('scroll', handelScroll);
    return () => {
      window.removeEventListener('scroll', handelScroll);
    }
  },[])
  return (
    <div className="pt-2 sticky top-0 z-10">
      <div className="max-w-lg mx-auto mt-5 bg-background-color rounded">
        <ul
          className={`flex gap-5 justify-center border-2 rounded-lg py-3 px-4`}
          style={{ borderColor }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/journal">Journal</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar