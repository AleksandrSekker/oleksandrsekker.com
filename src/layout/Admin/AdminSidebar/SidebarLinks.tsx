import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarLinksProps {
  link: string;
  title: string;
}
const SidebarLinks = ({ link, title }: SidebarLinksProps) => {
  const router = useRouter();
  return (
    <li className="items-center">
      <Link href={link}>
        <div
          className={
            "block py-3 text-xs font-bold uppercase " +
            (router.pathname.indexOf(link) !== -1
              ? "text-lightBlue-500 hover:text-lightBlue-600"
              : "text-blueGray-700 hover:text-blueGray-500")
          }
        >
          <i
            className={
              "fas fa-tv mr-2 text-sm " +
              (router.pathname.indexOf(link) !== -1
                ? "opacity-75"
                : "text-blueGray-300")
            }
          ></i>{" "}
          {title}
        </div>
      </Link>
    </li>
  );
};

export default SidebarLinks;
