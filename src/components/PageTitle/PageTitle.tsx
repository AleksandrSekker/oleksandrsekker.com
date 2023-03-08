import React from "react";

type PageTitleProps = {
  title: string;
  className?: string;
};
const PageTitle = ({ title, className }: PageTitleProps) => {
  return (
    <div className={className}>
      <p className="text-xl uppercase tracking-widest text-blue-700 dark:text-blue-400">
        {title}
      </p>
    </div>
  );
};

export default PageTitle;
