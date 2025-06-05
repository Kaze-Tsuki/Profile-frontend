import { useParams } from "react-router-dom";
import Template from "../template/template";
import ExhibitDisplay from "../controls/exhibit";
import { ProgramHeader, DefaultFooter } from "../template/headers";
import programCate from "./programCate.json";

// Gallery data
export default function ProgramSubPage() {
  const params = useParams();
  const galleryData = programCate.find((category => category.title === params.exhibitType))?.projects;
  galleryData.forEach((item, index) => {
    item.link = `/Program/${params.exhibitType}/${item.title}`;
  })
  return (
    <Template
      head={<ProgramHeader />}
      child={
        <div>
          <h1 className="intro">Program Gallery</h1>
          <p className="intro">Explore our program exhibits below:</p>
          <ExhibitDisplay data={galleryData} />
        </div>
      }
      foot={<DefaultFooter />}
    />
  );
}