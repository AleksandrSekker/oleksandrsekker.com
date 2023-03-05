import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="mx-auto flex w-full max-w-screen-xl items-center px-4 py-16 xl:px-0"
    >
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <p className="py-2 text-black dark:text-white">
            I specialize in building front-end UI applications that connect with
            API’s and other backend technologies.
          </p>
          <p className="py-2 text-black dark:text-white">
            I have a deep understanding and are proficient in using of the React
            and Next frameworks to create complex applications with ease.
          </p>
          <p className="py-2 text-black dark:text-white">
            My expertise in CSS, SCSS and frameworks such as Tailwind enables me
            to create visually appealing and responsive user interfaces that
            provide a seamless user experience across all devices.
          </p>{" "}
          <p className="py-2 text-black dark:text-white">
            I have experience working in cross-functional teams and
            collaborating with designers, back-end developers, and project
            managers to deliver high-quality products. I possess excellent
            problem-solving skills, attention to detail, and a strong work
            ethic, which helps me to identify and resolve issues quickly and
            efficiently.
          </p>
        </div>
        <Image
          src="/assets/Avatar.jpg"
          width={400}
          height={400}
          className="order-last mx-auto rounded-lg duration-300 ease-in hover:scale-105 md:order-first lg:mx-0"
          alt="/"
        />
      </div>
    </div>
  );
};

export default About;
