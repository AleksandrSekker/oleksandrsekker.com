import BlogPost from "~/components/BlogPost/BlogPost";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";
import React from "react";
import Settings from "~/pages/admin/settings";
import Layout from "~/layout/Layout";

export default function Index() {
  const { data: blogPostEntries, isLoading } = api.blogpost.getAll.useQuery();

  return isLoading ? (
    <CircleLoader className={"mx-auto"} color="#36d7b7" />
  ) : (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center px-2 py-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPostEntries?.map((entry, index) => (
          <BlogPost
            key={index}
            id={entry.id}
            title={entry.title}
            image={entry.image}
            tags={entry.tags}
            updatedAt={entry.updatedAt}
          />
        ))}
      </div>
    </div>
  );
}
Settings.layout = Layout;
