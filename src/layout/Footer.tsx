import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { links, user } from "~/constants/general";
const Footer = () => {
  return (
    <footer className="bg-pinkHeader bg-white p-4 dark:bg-gray-800 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between"></div>
        <div className="text-center sm:flex sm:items-center sm:justify-between">
          <span className="w-100 order-last text-center text-sm text-white dark:text-gray-400 sm:order-first">
            {`© ${user.firstName} ${user.lastName} ${new Date().getFullYear()}`}
          </span>
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Link href={links.discord}>
              <FontAwesomeIcon
                icon={faDiscord}
                className="h-4 w-4 text-white hover:text-indigo-400"
              />
            </Link>
            <Link href={links.telegram}>
              <FontAwesomeIcon
                icon={faTelegram}
                className="h-4 w-4 text-white hover:text-indigo-400"
              />
            </Link>
            <Link href={links.linkedin}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-4 w-4 text-white hover:text-indigo-400"
              />
            </Link>
            <Link href={links.github}>
              <FontAwesomeIcon
                icon={faGithub}
                className="h-4 w-4 text-white hover:text-indigo-400"
              />
            </Link>
            <Link href={links.instagram}>
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-4 w-4 text-white hover:text-indigo-400"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
