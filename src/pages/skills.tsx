import React from "react";
import SkillItem from "~/components/SkillItem/SkillItem";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";
import PageTitle from "~/components/PageTitle/PageTitle";

const Skills = () => {
  const { data: skills, isLoading } = api.skill.getAll.useQuery();

  return isLoading ? (
    <CircleLoader className={"mx-auto"} color="#36d7b7" />
  ) : (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center px-2">
      <PageTitle title={"Skills"} className="mb-4" />

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {skills?.map(({ title, icon, id, link }) => (
          <a key={id} href={link}>
            <SkillItem text={title} icon={icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
