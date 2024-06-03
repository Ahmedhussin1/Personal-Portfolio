import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Image from "next/image";
import WorkCard from "@/Components/WorkCard";
import reactIcon from "../../public/images.png";
import projectImg from "../../public/original-accb2ef29d68a2a29119c5e3ff116f33.png";
import { GoCodeSquare } from "react-icons/go";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-background-color">
      {/* hero section */}
      <Hero />
      {/* work section title*/}
      <div className="grid grid-cols-3 border-2 border-lines-color rounded mt-10">
        <div className="col-span-1 border-r-2 border-lines-color rounded  p-5 flex flex-col gap-5">
          <div className="bg-[#212225] p-5 rounded-full w-fit">
            <GoCodeSquare />
          </div>
          <h1 className="text-[48px] font-semibold">
            Work.
            <br />{" "}
            <span className="text-[#777b84]">
              A selection of recent projects.
            </span>
          </h1>
        </div>
        <div className="col-span-1 border-r-2 border-lines-color rounded" />
        <div className="col-span-1" />
      </div>
      {/* work section cards */}
      <WorkCard
        title={"React Project"}
        description={"This is the descriptoin of this project done by me"}
        icon={reactIcon}
        projectImg={projectImg}
        skills={["react", "js", "html"]}
      />
      <WorkCard
        title={"React Project"}
        description={"This is the descriptoin of this project done by me"}
        icon={reactIcon}
        projectImg={projectImg}
        skills={["react", "js", "html"]}
      />
      <WorkCard
        title={"React Project"}
        description={"This is the descriptoin of this project done by me"}
        icon={reactIcon}
        projectImg={projectImg}
        skills={["react", "js", "html"]}
      />
      {/* about section */}
      <div>
        <div>
          <h1>Learning <br/> Developing <br/> &Innovating.</h1>
        </div>
      </div>
    </div>
  );
}
