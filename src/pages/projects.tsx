import React from "react";
import ProjectItem from "~/components/ProjectItem/ProjectItem";
import { projects } from "~/constants/general";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto max-w-[1240px] px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map(({ title, backgroundImg, projectUrl, tech, id }) => (
            <ProjectItem
              title={title}
              backgroundImg={backgroundImg}
              projectUrl={projectUrl}
              tech={tech}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
