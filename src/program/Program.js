import CategoryCard from "../controls/categoryCard";
import Template from "../template/template";
import ExhibitDisplay from "../controls/exhibit";
import { ProgramHeader, DefaultFooter } from "../template/headers";
// import "./page.css";

export default function Program() {
  const categories = [
      { title: 'OOP', description: 'Simple projects and algorithms.', link: '/Program/OOP' },
      { title: 'JavaScript', description: 'Web apps and experiments.', link: '/Program/webpage' },
  ];

  return (
    <Template
      head={<ProgramHeader />}
      child={
        <div className="category-grid">
            {categories.map((cat) => (
                <CategoryCard
                    key={cat.title}
                    title={cat.title}
                    description={cat.description}
                    link={cat.link}
                />
            ))}
        </div>
      }
      foot={<DefaultFooter />}
    />
  );
}