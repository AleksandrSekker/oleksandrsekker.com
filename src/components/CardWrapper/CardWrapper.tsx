import React from "react";

type Props = {
  children: React.ReactNode;
};
const CardWrapper = ({ children }: Props) => {
  return (
    <div className="rounded-xl border p-6 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:bg-gray-800 dark:text-white dark:shadow-gray-900">
      <div className="grid items-center justify-center gap-4">{children}</div>
    </div>
  );
};

export default CardWrapper;
