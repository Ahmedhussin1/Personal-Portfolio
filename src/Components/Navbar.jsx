'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import {usePathname} from 'next/navigation'
function Navbar() {
  const navLinks = [
    {
      name:'Home',
      link:'/',
    },
    {
      name:'Work',
      link:'/work',
    },
    {
      name:'About',
      link:'/about',
    },
    {
      name:'Contact',
      link:'/contact',
    },
    {
      name:'Journal',
      link:'/journal',
    },
  ]
  const [borderColor, setBorderColor] = useState("#212225");
  const pathname = usePathname();
  console.log(pathname);
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
          className={`flex gap-5 justify-center border-2 rounded-lg pb-3 pt-4 px-4`}
          style={{ borderColor }}
        >
         {navLinks.map((link, index)=>{
          {/* const isActive = pathname.startsWith(link.link) */}
          return(
          <li className='flex flex-col justify-between items-center' key={index}>
            <Link href={link.link}>
              {link.name}
            </Link>
            {pathname === (link.link) ? <div className='w-[5px] h-[5px] bg-text-color rounded-full'></div>:<></>}
          </li>
          )
         })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar