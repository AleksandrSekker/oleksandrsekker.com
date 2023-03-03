import Link from "next/link";
import React from "react";
import { locales, routes, user } from "~/constants/general";
import { Select } from "~/components/Select/Select";
import useDarkMode from "~/hooks/useDarkMode";

const Header = () => {
  const [theme, setTheme] = useDarkMode();
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
            <div className={"hidden lg:flex"}>
              <Link
                className="my-auto mr-2 ml-4 rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white text-white outline-none hover:bg-violet-900 focus:outline-none lg:px-5 lg:py-2.5"
                href="/assets/Oleksandr_Sekker_Resume.pdf"
              >
                Resume
              </Link>
              {theme === "light" ? (
                <svg
                  onClick={() => setTheme("dark")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-indigo-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setTheme("light")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
              <Select
                data={locales.map(({ title, id, icon }) => ({
                  title: title.toUpperCase(),
                  id,
                  icon,
                }))}
              />
            </div>
            <div className={"flex bg-blue-600 lg:hidden"}>
              {/*<Sidebar />*/}
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
                  className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white text-white outline-none hover:bg-white focus:outline-none dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
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
