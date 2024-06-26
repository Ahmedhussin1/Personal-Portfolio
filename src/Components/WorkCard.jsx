import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Button from './Button';



function WorkCard({id,icon,projectImg,title, description,skills,projectLink }) {
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
          <Button title={'Github Ripo'} link={projectLink}>
            <FaGithub/>
          </Button>
          <div className="flex flex-wrap justify-start items-center gap-2 mt-2 ">
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
        <Link href={`/work/${id}`}>
            <Image
              src={projectImg}
              alt="project image"
              width={500}
              height={300}
              className=" cursor-pointer transition-transform duration-300 hover:scale-110"
            />
        </Link>
      </div>
    </div>
  );
}

export default WorkCard