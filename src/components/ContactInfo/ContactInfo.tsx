import React from "react";
import Image from "next/image";
import { linksContact } from "~/constants/general";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
      <div className="h-full lg:p-4 ">
        <div>
          <Image
            className="rounded-xl duration-300 ease-in hover:scale-105"
            src={"/assets/avatar.jpg"}
            alt="/"
            width={400}
            height={400}
          />
        </div>
        <div>
          <h2 className="py-2">Oleksandr Sekker</h2>
          <p>Front-End Developer</p>
          <p className="py-4">
            I am available for full-time positions. Contact me and let&apos;s
            talk.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between py-4">
            {linksContact.map(({ link, icon, id }) => (
              <Link key={id} href={link}>
                <FontAwesomeIcon
                  icon={icon}
                  className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
