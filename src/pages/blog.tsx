import BlogPost from "~/components/BlogPost/BlogPost";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";
import React from "react";

const Blog = () => {
  const { data: blogPostEntries, isLoading } = api.blogpost.getAll.useQuery();
  if (isLoading) {
    return (
      <div>
        <CircleLoader color="#36d7b7" />;
      </div>
    );
  }

  return blogPostEntries?.map((entry, index) => (
    <BlogPost
      key={index}
      id={entry.id}
      title={entry.title}
      image={entry.image}
      tags={entry.tags}
      updatedAt={entry.updatedAt}
      body={entry.body}
    />
  ));
};

export default Blog;
