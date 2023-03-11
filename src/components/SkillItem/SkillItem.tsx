import React from "react";
import Image from "next/image";
import CardWrapper from "~/components/CardWrapper/CardWrapper";

type SkillItemProps = {
  text: string;
  icon: string;
};
const SkillItem = ({ text, icon }: SkillItemProps) => {
  return (
    <CardWrapper>
      <div className="m-auto">
        <Image height={40} width={40} src={icon} alt={"skill"} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>{text}</h3>
      </div>
    </CardWrapper>
  );
};

export default SkillItem;
