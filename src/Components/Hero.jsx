import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/IMG_5814-sq.JPG";
import { FaLinkedin } from "react-icons/fa";
import Button from "./Button";

function Hero() {
  return (
    <div className="border-2 border-lines-color rounded mt-10">
      <div className="flex flex-col justify-center py-14 max-w-2xl mx-auto items-center gap-5">
        <Image
          src={profilePic}
          alt="profile pic"
          className="rounded-full"
          width={150}
          height={150}
        />
        <h1 className="text-[90px] font-semibold text-white">
          Hi, I&apos;am Ahmed.
        </h1>
        <p className="text-center text-[#777b84]">
          As a Front-End Developer, I specialize in creating dynamic and
          responsive web applications using React and Next.js. With a strong
          focus on user experience and performance optimization, I build
          scalable and maintainable codebases. My expertise includes integrating
          modern web technologies and tools to deliver seamless, interactive
          interfaces. I am passionate about continuous learning and staying
          updated with the latest industry trends. Through my projects, I strive
          to bridge the gap between design and technology, providing users with
          visually appealing and highly functional web solutions.
        </p>
        <div className="flex justify-between items-center gap-5">
          {/* linked in button */}
          <Button
            title={"Linked In"}
            link={"https://www.linkedin.com/in/ahmed-m-hussein-b6b552202/"}
          >
            <FaLinkedin />
          </Button>
          {/* download cv button */}
          <a href="/Ahmed Mohamed Hussin (CV).pdf" download>
            <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#111113] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md border-2 border-lines-color hover:border-[#777b84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Download">
                    {" "}
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Download CV
              <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-[#161617] bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
