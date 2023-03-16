import React from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { CircleLoader } from "react-spinners";
import parse from "html-react-parser";
import Tags from "~/components/tags/Tags";
import PostDate from "~/components/PostDate/PostDate";

const PostItem = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, isLoading } = api.blogpost.getOne.useQuery({
    id: id as string,
  });
  return isLoading ? (
    <CircleLoader className={"mx-auto"} color="#36d7b7" />
  ) : (
    <div className="mx-auto my-4 flex flex max-w-screen-xl justify-center">
      {post && (
        <div>
          <article className="prose lg:prose-xl">
            <h1 className={"dark:text-white"}>{post.title}</h1>
            <PostDate updatedAt={post.updatedAt} />
            <Tags tags={post.tags} />
            <div className={"dark:text-white"}>
              {parse(post.body as string) || "No content"}
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default PostItem;
