import React from "react";
import SkillItem from "~/components/SkillItem/SkillItem";
import { skills } from "~/constants/general";

const Skills = () => {
  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {skills.map(({ title, icon, id, link }) => (
          <a key={id} href={link}>
            <SkillItem text={title} icon={icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
