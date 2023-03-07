import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { locales, routes, user } from "~/constants/general";
import { Select } from "~/components/Select/Select";
import useDarkMode from "~/hooks/useDarkMode";
import { Switch } from "@headlessui/react";
import Sidebar from "~/layout/Sidebar/Sidebar";
import { useRouter } from "next/router";

const Header = () => {
  const [theme, setTheme] = useDarkMode();
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    setEnabled((localStorage.getItem("theme") as string) === "dark");
  }, []);
  useEffect(() => {
    setTheme(enabled ? "dark" : "light");
  }, [enabled, setTheme, theme]);
  const router = useRouter();

  return (
    <header>
      <nav className="h-[68px] border-gray-200 bg-blue-500 px-4 dark:bg-gray-900 lg:px-6">
        <div className="m-auto flex h-full max-w-screen-xl flex-wrap items-center justify-between">
          <div className="my-auto flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              {`${user.firstName} ${user.lastName}`}
            </span>
          </div>
          <div className="flex items-center lg:order-2">
            <div className={"my-auto hidden h-12 lg:flex"}>
              <Link
                className="my-auto mr-2 ml-4 rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white text-white outline-none hover:bg-violet-900 focus:outline-none lg:px-5 lg:py-2.5"
                href="/assets/Oleksandr_Sekker_Resume.pdf"
              >
                Resume
              </Link>
              <Select
                data={locales.map(({ title, id, icon }) => ({
                  title: title.toUpperCase(),
                  id,
                  icon,
                }))}
              />
              <div className={"my-auto ml-2"}>
                <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
                  {({ checked }) => (
                    <button
                      className={`${
                        checked ? "bg-blue-600" : "bg-gray-500"
                      } relative inline-flex h-6 w-12 items-center rounded-full`}
                    >
                      <span className="sr-only">Enable notifications</span>
                      <span
                        className={`${
                          checked ? "translate-x-6" : "translate-x-1"
                        } inline-block h-5 w-5 transform rounded-full bg-white transition  `}
                      />
                    </button>
                  )}
                </Switch>
              </div>
            </div>
            <div className={"flex bg-blue-600 lg:hidden"}>
              <Sidebar />
            </div>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center font-medium lg:mt-0 lg:flex-row lg:space-x-1">
              {routes.map(({ title, link, id }) => (
                <Link
                  href={link}
                  key={id}
                  className={`mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white text-white outline-none hover:bg-blue-400 focus:outline-none dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5
                    ${
                      router.pathname == link
                        ? "bg-blue-400 dark:bg-gray-700"
                        : ""
                    }`}
                  aria-current="page"
                >
                  {title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
