'use client'
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Image from "next/image";
import WorkCard from "@/Components/WorkCard";
import reactIcon from "../../public/images.png";
import projectImg from "../../public/original-accb2ef29d68a2a29119c5e3ff116f33.png";
import { GoCodeSquare } from "react-icons/go";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";


export default function Home() {
    const [showFullText, setShowFullText] = useState(false);

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
      <div className="flex flex-col justify-center items-center gap-5 border-2 border-lines-color rounded border-t-0">
        <div className="flex justify-center items-center pt-10">
          <h1 className="text-[89px] text-[#edeef0] text-center font-semibold leading-none">
            Learning <br /> Developing <br /> &Innovating.
          </h1>
        </div>
        <div
          className={`max-w-4xl mx-auto text-center relative overflow-hidden ${
            !showFullText ? "max-h-[10rem] fade-mask" : ""
          }`}
        >
          <p className="text-[18px] text-[#777b84]">
            Hello, I’m Ahmed Mohamed Hussin, a dedicated and passionate web
            developer specializing in building dynamic and responsive web
            applications using React.js and Next.js. With a keen eye for design
            and a strong foundation in front-end development, I strive to create
            visually appealing and user-friendly interfaces that provide
            exceptional user experiences. My Journey and Expertise From the
            moment I started my journey in web development, I have been
            captivated by the power of technology to create meaningful and
            interactive digital experiences. Over the years, I have honed my
            skills in React.js and Next.js, enabling me to develop scalable and
            maintainable web applications. My technical expertise is
            complemented by my good taste in design, ensuring that my projects
            are not only functional but also aesthetically pleasing. Notable
            Projects One of the most significant milestones in my career was my
            graduation project, where I was responsible for developing the
            front-end of an online code judge system. This project showcased my
            ability to handle complex requirements and deliver a polished,
            user-centric interface that met the high standards of both
            functionality and design. In addition to my graduation project, I
            have completed numerous other projects, many of which are available
            on my GitHub profile. These projects demonstrate my versatility and
            commitment to continuous learning and improvement. Whether it’s
            developing e-commerce websites, personal portfolios, or interactive
            web applications, I always strive to push the boundaries of what’s
            possible with web technologies. Mastering Animation Beyond static
            design, I have also delved into the world of web animations using
            Framer Motion. I understand that animations can significantly
            enhance user engagement and provide a more immersive experience. I
            have successfully integrated Framer Motion into several projects,
            adding fluid and engaging animations that elevate the overall user
            experience. Continuous Learning and Passion My passion for web
            development and design drives me to stay updated with the latest
            trends and best practices in the industry. I am constantly exploring
            new technologies and techniques to enhance my skill set and deliver
            cutting-edge solutions. I believe that a great developer is always
            learning, and I am committed to growing both personally and
            professionally. Let’s Connect I am excited to connect with
            like-minded professionals, collaborate on innovative projects, and
            contribute to the ever-evolving field of web development. Whether
            you are looking for a developer to bring your vision to life or
            simply want to discuss the latest trends in web technologies, feel
            free to reach out to me.
          </p>
          {!showFullText && (
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#111113] to-transparent pointer-events-none"></div>
          )}
        </div>
        <div className="pb-10">
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="cursor-pointer group relative flex items-center gap-1.5 px-8 py-4 bg-[#111113] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md border-2 border-lines-color"
          >
            {showFullText ? "Show Less" : "Read More"}
            <FaArrowCircleRight />
            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-[#161617] bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              {showFullText ? "show less" : "read more"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
