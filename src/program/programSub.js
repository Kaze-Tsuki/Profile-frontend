import { useParams } from "react-router-dom";
import Template from "../template/template";
import ExhibitDisplay from "../controls/exhibit";
import { ProgramHeader, DefaultFooter } from "../template/headers";
// import "./page.css";

// Gallery data
const galleryData = [
  {
    title: "Exhibit 1",
    description: {
      left: "C++",
      right: "2025-01-01",
      content: "This is the content for Exhibit 1."
    },
    link: "/Program/exhibit1"
  },
  {
    title: "Exhibit 2",
    description: {
      left: "Python",
      right: "2025-02-01",
      content: "This is the content for Exhibit 2."
    },
    link: "/Program/exhibit2"
  },
  {
    title: "Exhibit 3",
    description: {
      left: "JavaScript",
      right: "2025-03-01",
      content: "This is the content for Exhibit 3."
    },
    link: "/Program/exhibit3"
  }
];

export default function ProgramSubPage() {
  const params = useParams();

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