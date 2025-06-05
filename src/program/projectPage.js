import { useParams } from "react-router-dom";
import Template from "../template/template";
import ExhibitDisplay from "../controls/exhibit";
import { ProgramHeader, DefaultFooter } from "../template/headers";
import programProjects from "./programProjects.json";

// Gallery data
export default function ProgramProjects() {
  const params = useParams();
  const projectType = params.exhibitType;
  if (programProjects[projectType] === undefined) {
    // page for non-existing project type not designed yet
    
  }
  const galleryData = programProjects[projectType].find((category => category.title === params.projectTitle));
  if (!galleryData) {
    // Handle case where no project data is found
    return (
      <Template
        head={<ProgramHeader />}
        child={<div className="error">Project not found.</div>}
        foot={<DefaultFooter />}
      />
    );
  }

  return (
    <Template
      head={<ProgramHeader />}
      child={
        <div>
            <h1 className="intro">{galleryData.title}</h1>
            <p className="intro">{galleryData.content.introduction}</p>
            
        </div>
      }
      foot={<DefaultFooter />}
    />
  );
}