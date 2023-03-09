import React from "react";
import Image from "next/image";

type SkillItemProps = {
  text: string;
  icon: string;
};
const SkillItem = ({ text, icon }: SkillItemProps) => {
  return (
    <div className="rounded-xl border p-6 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:bg-gray-800 dark:text-white dark:shadow-gray-900">
      <div className="grid grid-rows-2 items-center justify-center gap-4">
        <div className="m-auto">
          <Image height={40} width={40} src={icon} alt={"skill"} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
