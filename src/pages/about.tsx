import React from "react";
import PageTitle from "~/components/PageTitle/PageTitle";
import AvatarImage from "~/components/AvatarImage/AvatarImage";
import RightBlockWrapper from "~/components/RightBlockWrapper/RightBlockWrapper";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";

const About = () => {
  const { data: about, isLoading } = api.about.getAll.useQuery();

  if (isLoading) {
    return <CircleLoader className={"mx-auto"} color="#36d7b7" />;
  }
  return (
    <div
      id="about"
      className="mx-auto flex w-full max-w-screen-xl items-center px-4 py-16 xl:px-0"
    >
      {about?.map(({ title, body, id, image }) => (
        <div
          className="m-auto max-w-screen-xl grid-cols-3 gap-8 md:grid"
          key={id}
        >
          <RightBlockWrapper className="col-span-2">
            <PageTitle title={title} />
            {body.map((paragraph) => (
              <p key={paragraph} className="py-2 text-black dark:text-white">
                {paragraph}
              </p>
            ))}
          </RightBlockWrapper>

          <AvatarImage image={"/assets/Avatar.jpg" || image} />
        </div>
      ))}
    </div>
  );
};

export default About;
