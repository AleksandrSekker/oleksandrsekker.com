import React from "react";
import Link from "next/link";
import SidebarLinks from "~/layout/Admin/AdminSidebar/SidebarLinks";
import { AdminBlogLinks, AdminPagesLinks } from "~/constants/general";

const AdminSidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link href="/">
            <div className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2">
              Oleksandr Sekker
            </div>
          </Link>
          <button className="flex list-none flex-wrap items-center md:hidden">
            Logout
          </button>
          <div
            className={
              "absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none " +
              collapseShow
            }
          >
            <div className="border-blueGray-200 mb-4 block border-b border-solid pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <div className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2">
                      Oleksandr Sekker
                    </div>
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <hr className="my-4 md:min-w-full" />
            <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
              Pages
            </h6>

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              {AdminPagesLinks.map(({ link, title, id }) => (
                <SidebarLinks link={link} title={title} key={id} />
              ))}
            </ul>

            <hr className="my-4 md:min-w-full" />

            <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
              Pages
            </h6>

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              {AdminBlogLinks.map(({ link, title, id }) => (
                <SidebarLinks link={link} title={title} key={id} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminSidebar;
