import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLink } from "react-icons/fa";


function WorkCard({icon,projectImg,title, description,skills,projectLink }) {
  return (
    <div className="grid grid-cols-3 gap-1 mt-1">
      {/* right column */}
      <div className="col-span-1 flex items-center border-2 border-lines-color rounded pl-5">
        <div className="flex  flex-col gap-3 ">
          <div className="flex gap-2 items-center">
            <Image src={icon} alt="icon" width={30} height={30} />
            <h1 className="text-2xl font-semibold uppercase">{title}</h1>
          </div>
          <p className="text-[#777b84]">{description}</p>
          <div className="flex gap-2 items-center">
            <p className='hover:underline'>
              <a href={projectLink}>
                Check The Project On Github Now!
              </a>
            </p>
            <FaLink />
          </div>
          <div className="flex gap-2 mt-2 ">
            {skills.map((skill, index) => (
              <span
                className="bg-[#212225] px-3 font-mono text-[#edeef0]"
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* image column */}
      <div className="col-span-2 border-2 border-lines-color rounded flex justify-center  p-5">
        <Image
          src={projectImg}
          alt="project image"
          width={500}
          height={300}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}

export default WorkCard