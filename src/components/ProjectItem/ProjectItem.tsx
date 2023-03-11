import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { isValidUrl } from "~/utils/generalUtils";
import {
  defaultProjectTech,
  defaultProjectTitle,
  placeholderImage,
} from "~/constants/general";

type ProjectItemProps = {
  title: string;
  backgroundImg: string;
  tags: string[];
  projectUrl: string;
};

const ProjectItem = ({
  title,
  backgroundImg,
  tags,
  projectUrl,
}: ProjectItemProps) => {
  const [imgSrc, setImgSrc] = useState(backgroundImg);

  return (
    <div className="group relative flex items-center justify-center rounded-xl shadow-md shadow-gray-900 hover:bg-blue-500 dark:shadow-md dark:shadow-gray-400 dark:hover:bg-gray-500">
      <Image
        className="h-full w-full rounded-xl group-hover:opacity-10"
        src={imgSrc}
        onError={() => setImgSrc(placeholderImage)}
        alt="Project Image"
        width={400}
        height={200}
      />
      <div className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <h3 className="text-center text-2xl tracking-wider text-white">
          {title || defaultProjectTitle}
        </h3>
        {tags.map((tech) => (
          <p key={tech} className="pb-4 pt-2 text-center text-white">
            {tech || defaultProjectTech}
          </p>
        ))}

        {isValidUrl(projectUrl) ? (
          <Link href={projectUrl}>
            <p className="cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700 dark:bg-gray-800 dark:text-white">
              Learn More
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectItem;
