"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import singleProjectData from "../../../data/singleWorkCardData";
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


  return <div>
    <div>
        <h1>{projectData.title}</h1>
    </div>
    <div>
        <p>
            {projectData.description}
        </p>
    </div>
    <div>
        <Image src={projectData.projectImg} alt="project image" width={300} height={300} />
    </div>
  </div>;
}

export default SingleProjectPage;
