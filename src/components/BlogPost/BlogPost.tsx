import React from "react";
import Image from "next/image";
import CardWrapper from "~/components/CardWrapper/CardWrapper";
import Link from "next/link";
import PostDate from "~/components/PostDate/PostDate";
import Tags from "~/components/tags/Tags";

interface BlogPostProps {
  id: string;
  title: string;
  tags: string[];
  image: string;
  description: string;
  updatedAt: Date;
}
const BlogPost = ({
  id,
  title,
  image,
  tags,
  updatedAt,
  description,
}: BlogPostProps) => {
  return (
    <CardWrapper>
      <div className={"prose lg:prose-xl dark:text-white"} key={id}>
        <h2 className={"dark:text-white"}>{title}</h2>
        <Image
          className={"h-60"}
          src={image}
          alt={title}
          width={400}
          height={400}
        />
        <PostDate updatedAt={updatedAt} />
        <Tags tags={tags} />
        <p>{description}</p>
        <Link className={"decoration-none text-blue-700"} href={`/blog/${id}`}>
          Read more
        </Link>
      </div>
    </CardWrapper>
  );
};

export default BlogPost;
