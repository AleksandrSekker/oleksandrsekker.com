import React from "react";
import ProjectItem from "~/components/ProjectItem/ProjectItem";
import PageTitle from "~/components/PageTitle/PageTitle";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";

const Projects = () => {
  const { data: projects, isLoading } = api.projects.getAll.useQuery();

  if (isLoading) {
    return <CircleLoader className={"mx-auto"} color="#36d7b7" />;
  }
  return (
    <div className="mx-auto max-w-screen-xl p-2">
      <PageTitle title={"workProjects"} className="mb-4" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {projects?.map(({ title, image, tags, link, id }) => (
          <ProjectItem
            title={title}
            backgroundImg={image}
            projectUrl={link}
            tags={tags}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
