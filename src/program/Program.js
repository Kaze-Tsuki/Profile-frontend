import CategoryCard from "../controls/categoryCard";
import Template from "../template/template";
import ExhibitDisplay from "../controls/exhibit";
import { ProgramHeader, DefaultFooter } from "../template/headers";
import programCate from "./programCate.json";

export default function Program() {
  const categories = programCate;

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
                    link={"/Program/" + cat.title}
                />
            ))}
        </div>
      }
      foot={<DefaultFooter />}
    />
  );
}