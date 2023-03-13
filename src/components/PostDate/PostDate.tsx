import React from "react";

type Props = {
  updatedAt: Date;
};
const PostDate = ({ updatedAt }: Props) => {
  return (
    <h4 className={"dark:text-white"}>
      {updatedAt.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </h4>
  );
};

export default PostDate;
