import React from "react";
type Props = {
  tags: string[];
};
const Tags = ({ tags }: Props) => {
  return (
    <div className={"flex flex-wrap gap-2"}>
      {tags.map((tag) => (
        <p
          className={
            "rounded-2xl border border-gray-800 px-2 py-1 dark:border-white dark:text-white "
          }
          key={tag}
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
