import React from "react";
import ProjectItem from "~/components/ProjectItem/ProjectItem";
import { workProject } from "~/constants/general";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PageTitle from "~/components/PageTitle/PageTitle";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["projects", "common"],
      nextI18nConfig
    )),
  },
});
const Projects = () => {
  const { t } = useTranslation("projects");
  return (
    <div className="mx-auto max-w-screen-xl p-2">
      <PageTitle title={t("workProjects")} className="mb-4" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {workProject.map(({ title, backgroundImg, projectUrl, tech, id }) => (
          <ProjectItem
            title={title}
            backgroundImg={backgroundImg}
            projectUrl={projectUrl}
            tech={tech}
            key={id}
            t={t}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
