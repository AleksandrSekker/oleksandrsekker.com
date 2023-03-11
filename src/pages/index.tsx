import { type NextPage } from "next";
import { motion } from "framer-motion";
import AvatarImage from "~/components/AvatarImage/AvatarImage";
import RightBlockWrapper from "~/components/RightBlockWrapper/RightBlockWrapper";
import Link from "next/link";
import React from "react";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";

const Home: NextPage = () => {
  const { data: personaInformation, isLoading } =
    api.personalInfo.getAll.useQuery();

  if (isLoading) {
    return (
      <div>
        <CircleLoader className={"mx-auto"} color="#36d7b7" />;
      </div>
    );
  }

  return (
    <>
      {personaInformation?.map(
        ({ firstName, jobTitle, subTitle, image, id }) => (
          <div
            key={id}
            className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-4 text-center xl:px-0"
          >
            <div>
              <RightBlockWrapper className="mx-auto text-center lg:mx-0">
                <motion.h2 className="py-2 text-5xl font-medium text-teal-400 dark:text-blue-500 md:text-6xl">
                  {firstName}
                </motion.h2>
                <h3 className="py-2 text-2xl dark:text-white">{jobTitle}</h3>
                <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
                  {subTitle}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={"mt-6 "}
                >
                  <Link
                    className="rounded-lg bg-blue-400 px-6 py-3 text-lg font-medium text-white outline-none hover:bg-blue-500 focus:outline-none dark:bg-gray-700 hover:dark:bg-gray-900"
                    href="/assets/Oleksandr_Sekker_Resume.pdf"
                  >
                    View Resume
                  </Link>
                </motion.button>
              </RightBlockWrapper>
            </div>
            <AvatarImage image={"/assets/AvatarSecond.JPEG" || image} />
          </div>
        )
      )}
    </>
  );
};

export default Home;
