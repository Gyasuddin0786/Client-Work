import { useMemo, useState } from "react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import ProjectCard from "../../components/common/cards/ProjectCard";

import {
  projects,
  projectCategories,
} from "../../data/projects";
import Testimonials from "../../components/sections/Testimonials";
import CTASection from "../../components/sections/CTASection";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <>
    <section className="py-14 bg-gray-50">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Recent Fabrication Projects"
          description="Browse a selection of welding and fabrication work completed for residential and commercial clients."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              selectedCategory === "all"
                ? "bg-orange-600 text-white"
                : "border border-slate-300 bg-white text-slate-700 hover:border-orange-500 hover:text-orange-600"
            }`}
          >
            All
          </button>

          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-orange-500 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="mt-20 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              No Projects Found
            </h2>

            <p className="mt-3 text-slate-600">
              There are currently no projects available in this category.
            </p>
          </div>
        )}
      </Container>
      <Testimonials/>
    </section>
      <CTASection/>
    </>
  );
}

export default Portfolio;