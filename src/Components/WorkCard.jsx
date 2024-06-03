import React from 'react'
import Image from 'next/image'

function WorkCard({icon,projectImg,title, description,skills }) {
  return (
    <div className="grid grid-cols-3 gap-1 mt-10">
      <div className="col-span-1 flex items-center border-2 border-lines-color rounded pl-5">
        <div className="flex  flex-col gap-5 ">
          <div className="flex gap-2 items-center">
            <Image src={icon} alt="icon" width={30} height={30} />
            <h1 className="text-2xl font-semibold uppercase">{title}</h1>
          </div>
          <p>{description}</p>
          <div className="flex gap-2 ">
            {skills.map((skill, index) => (
              <span className="bg-[#212225] px-3 font-mono" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
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