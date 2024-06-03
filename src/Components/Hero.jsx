import React from 'react'
import Image from "next/image";
import profilePic from '../../public/IMG_5814-sq.JPG'
function Hero() {
  return (
    <div className="border-2 border-lines-color rounded">
      <div className="h-[80vh] flex flex-col justify-center max-w-2xl mx-auto items-center gap-5">
        <Image
          src={profilePic}
          alt="profile pic"
          className="rounded-full"
          width={150}
          height={150}
        />
        <h1 className="text-[90px] font-semibold text-white">Hi, I'm Ahmed.</h1>
        <p className='text-center'>
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
      </div>
    </div>
  );
}

export default Hero