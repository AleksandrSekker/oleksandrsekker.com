import { useEffect, useState } from "react";
import Flag from "react-world-flags";
import { Listbox, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ISelectProps } from "~/components/Select/types";

export const Select = ({ data }: ISelectProps) => {
  const { locale } = useRouter();
  const selectedLanguageInitial = data.filter(
    (language) => language.title.toLowerCase() === locale
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    selectedLanguageInitial ? selectedLanguageInitial[0] : data[0]
  );

  useEffect(() => {
    if (selectedLanguage) {
      localStorage.setItem("language", selectedLanguage.title);
    }
  }, [selectedLanguage]);
  return (
    <div
      className={
        "lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-right text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
      }
    >
      <Listbox
        as="div"
        className="relative inline-block text-left"
        value={selectedLanguage}
        onChange={setSelectedLanguage}
      >
        {({ open }) => (
          <>
            <Listbox.Button className="inline-flex w-full justify-center rounded-md bg-neutral-200 bg-opacity-20 px-4 py-2 text-sm font-medium text-white text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-black">
              <div className={"mt-1.5"}>{selectedLanguage?.title}</div>
              <div className="ml-2 flex h-8 w-8 justify-center">
                <Flag code={selectedLanguage?.icon} />
              </div>
            </Listbox.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options
                as="div"
                className={
                  "absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                }
                static
              >
                <div className={"list-none px-1 py-1 "}>
                  {data.map((item) => (
                    <Link
                      key={item.id}
                      href={"#"}
                      locale={item.title.toLowerCase()}
                    >
                      <Listbox.Option value={item}>
                        <button
                          className={`group flex w-full list-none items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <div
                            className={
                              "mr-auto list-none text-black text-gray-400"
                            }
                          >
                            {item.title}
                          </div>
                          <div className="mr-2 h-5 w-5">
                            <Flag code={item.icon} />
                          </div>
                        </button>
                      </Listbox.Option>
                    </Link>
                  ))}
                </div>
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
};
