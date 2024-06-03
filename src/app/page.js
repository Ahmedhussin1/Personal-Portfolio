import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Image from "next/image";
import WorkCard from "@/Components/WorkCard";
import reactIcon from '../../public/images.png'
import projectImg from "../../public/original-accb2ef29d68a2a29119c5e3ff116f33.png";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-background-color">
      {/* hero section */}
      <Hero />
      {/* work section*/}
      <div>

      </div>
     <WorkCard title={'React Project'} description={'This is the descriptoin of this project done by me'} icon={reactIcon} projectImg={projectImg} skills={['react','js','html']} />
    </div>
  );
}
