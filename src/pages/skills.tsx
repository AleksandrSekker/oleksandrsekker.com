import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <FontAwesomeIcon icon={faHome} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
