"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import singleProjectData from "../../../data/projectData";
import GetInTouch from "@/Components/GetInTouch";
import { FaGithub } from "react-icons/fa6";

function SingleProjectPage({params}) {
  const router = useRouter();
//   const [projectData, setProjectData] = useState(null)
  const  id = router.query;
  const projectData = singleProjectData.find(
    (data) => data.id === parseInt(params.projectId)
  );
  if (!projectData) {
    return <h1>404 Not Found</h1>;
  }
  const formattedFeature = projectData.features.split('. ').join('\n');

  return (
    <div className="max-w-7xl mx-auto mt-10 flex flex-col  justify-between ">
      {/* title */}
      <div className="flex w-full justify-between items-center py-20">
        <div className="flex flex-col justify-center max-w-xl ">
          <h1 className="text-[32px] font-semibold">{projectData.title}</h1>
          <span className="text-[32px] font-semibold text-[#777b84]">
            {projectData.shortDesc}
          </span>
        </div>
        {/* tech used */}
        <div className="grid grid-cols-3 gap-2">
          {projectData.techUsed.map((tech, index) => (
            <span
              key={index}
              className="bg-[#212225] px-3 font-mono text-[#edeef0] text-[14px] rounded text-center"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* main image */}
      <div className="flex justify-center items-center ">
        <Image
          src={projectData.MainImage}
          alt="project image"
          width={1000}
          height={800}
          className="rounded"
        />
      </div>
      {/* features */}
      <div className="pt-20">
        <h1 className="text-[32px]">Features</h1>
        {projectData.features.split(". ").map((feature, index) => (
          <p className="leading-8 text-[#777b84]" key={index}>
            {feature}.
          </p>
        ))}
      </div>
      {/* mobile Image */}
      <div className="flex justify-center items-center pt-20">
        <Image
          src={projectData.mobileImage}
          alt="mobile image"
          width={800}
          height={800}
          className="rounded"
        />
      </div>
      {/* objectives section */}
      <div className="pt-20">
        <h1 className="text-[32px]">Objectives</h1>
        <p className="leading-8 text-[#777b84]">{projectData.objective}</p>
      </div>
      {/* responsive design image */}
      <div className="grid grid-cols-2 pt-20">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src={projectData.image2}
            alt="mobile view image"
            className="rounded"
            width={300}
            height={600}
          />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src={projectData.image2}
            alt="mobile view image"
            className="rounded"
            width={300}
            height={600}
          />
        </div>
      </div>
      {/* links */}
      <div className="py-20 border-b-2 border-lines-color flex flex-col gap-5">
        <h1 className="text-[32px]">Links</h1>
        <a
          className="hover:underline text-[24px] flex items-center gap-2 cursor-pointer"
          href={projectData.githubLink}
        >
          <FaGithub />
          Github
        </a>
      </div>
      <GetInTouch />
    </div>
  );
}

export default SingleProjectPage;
