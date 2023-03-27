import React from "react";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";
import { tableHeader } from "~/constants/general";
import Link from "next/link";

const Overview = () => {
  const { data: blogPostEntries, isLoading } = api.blogpost.getAll.useQuery();

  return isLoading ? (
    <CircleLoader className={"mx-auto"} color="#36d7b7" />
  ) : (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeader.map((header) => (
              <th scope="col" className="px-6 py-3" key={header.id}>
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {blogPostEntries?.map((entry) => (
            <tr
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              key={entry.id}
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {entry.title}
              </th>
              <td className="px-6 py-4">{entry.description}</td>
              <td className="flex flex-row px-6 py-4">
                {entry.tags.map((tag, index) => (
                  <div key={index} className={"pr-1"}>
                    {tag} {index !== entry.tags.length - 1 && ","}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">
                <Link
                  className={
                    "decoration-none font-medium text-blue-600 hover:underline dark:text-blue-500"
                  }
                  href={`/admin/blog/${entry.id}`}
                >
                  Edit
                </Link>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="text-red-600-600 font-medium hover:underline dark:text-blue-500"
                >
                  Delete
                </a>
              </td>
              <td className="px-6 py-4">
                {entry.updatedAt.toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
