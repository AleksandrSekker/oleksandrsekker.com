import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent p-4 md:flex-row md:flex-nowrap md:justify-start">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 md:flex-nowrap md:px-10">
          <p
            className="text-sm font-semibold uppercase text-black lg:inline-block"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </p>
          <ul className="hidden list-none flex-col items-center md:flex md:flex-row">
            <button>Logout</button>
          </ul>
        </div>
      </nav>
    </>
  );
}
