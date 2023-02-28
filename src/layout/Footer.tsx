import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
const Footer = () => {
  return (
    <footer className="bg-pinkHeader bg-white p-4 dark:bg-gray-800 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between"></div>
        <div className="text-center sm:flex sm:items-center sm:justify-between">
          <span className="w-100 order-last text-center text-sm text-white dark:text-gray-400 sm:order-first">
            © Oleksandr Sekker {new Date().getFullYear()}
          </span>
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Link href="/">
              <FontAwesomeIcon
                icon={faLinkedin as IconDefinition}
                className="h-4 w-4 text-white hover:text-black"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faInstagram as IconDefinition}
                className="h-4 w-4 text-white hover:text-black"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faTelegram as IconDefinition}
                className="h-4 w-4 text-white hover:text-black"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faFacebook as IconDefinition}
                className="h-4 w-4 text-white hover:text-black"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faTwitter as IconDefinition}
                className="h-4 w-4 text-white hover:text-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
