import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectItemProps = {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
};

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
}: ProjectItemProps) => {
  return (
    <div className="group relative flex w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] hover:bg-gradient-to-r">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
        width={400}
        height={400}
      />
      <div className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <h3 className="text-center text-2xl tracking-wider text-white">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">{tech}</p>
        <Link href={projectUrl}>
          <p className="cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
