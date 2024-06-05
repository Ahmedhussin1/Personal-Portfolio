import WorkCard from "@/Components/WorkCard";
import React from "react";
import { GoCodeSquare } from "react-icons/go";
import GetInTouch from "@/Components/GetInTouch";
import singleWorkCardData from "@/data/singleWorkCardData";


function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* feature work title */}
      <div className="grid grid-cols-3 border-b-0 border-2 border-lines-color rounded mt-10">
        <div className="col-span-1 border-r-2 border-dashed border-lines-color rounded  p-5 flex flex-col gap-5">
          <div className="bg-[#212225] p-5 rounded-full w-fit">
            <GoCodeSquare />
          </div>
          <h1 className="text-[48px] font-semibold">Feature Work</h1>
        </div>
        <div className="col-span-1 border-r-2 border-dashed border-lines-color rounded"></div>
        <div className="col-span-1"></div>
      </div>
      {/* feature work section cards */}
      {/* Work section title */}
      <div className="grid grid-cols-3 border-2 border-lines-color rounded ">
        <div className="col-span-1 border-r-2 border-dashed border-lines-color rounded  p-5 flex flex-col gap-5">
          <div className="bg-[#212225] p-5 rounded-full w-fit">
            <GoCodeSquare />
          </div>
          <h1 className="text-[48px] font-semibold">
            Some projects
            <br />{" "}
            <span className="text-[#777b84]">
              To Check
              <br /> Out
            </span>
          </h1>
        </div>
        <div className="col-span-1 border-r-2 border-dashed border-lines-color rounded" />
        <div className="col-span-1" />
      </div>
      {/* work section cards */}
      {/* <WorkCard
        id={1}
        title={"React Project"}
        description={"This is the descriptoin of this project done by me"}
        icon={reactIcon}
        projectImg={projectImg}
        skills={["react", "js", "html"]}
        projectLink={"https://github.com/Ahmedhussin1/Personal-Portfolio"}
      /> */}
      {singleWorkCardData.map((work) => (
        <WorkCard
          key={work.id}
          id={work.id}
          title={work.title}
          description={work.description}
          icon={work.icon}
          projectImg={work.projectImg}
          skills={work.skills}
          projectLink={work.projectLink}
        />
      ))}
      <GetInTouch />
    </div>
  );
}

export default WorkPage;
