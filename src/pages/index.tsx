import { type NextPage } from "next";
import Image from "next/image";
const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-4 text-center xl:px-0">
        <div className={"mx-auto text-center lg:mx-0"}>
          <h2 className="py-2 text-5xl font-medium text-teal-400 dark:text-blue-500 md:text-6xl">
            Oleksandr
          </h2>
          <h3 className="py-2 text-2xl dark:text-white">
            A Front-End Web Developer
          </h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
            I’m focused on building responsive front-end web applications
          </p>
        </div>
        <Image
          className={
            "order-last mx-auto rounded-lg duration-300 ease-in hover:scale-105 md:order-first lg:mx-0"
          }
          src={"/assets/avatar.jpg"}
          width={400}
          height={400}
          alt={"my avatar"}
        />
      </div>
    </>
  );
};

export default Home;
