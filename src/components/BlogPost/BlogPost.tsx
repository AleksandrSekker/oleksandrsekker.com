import React from "react";
import Image from "next/image";
import CardWrapper from "~/components/CardWrapper/CardWrapper";
import parse from "html-react-parser";

interface BlogPostProps {
  id: string;
  title: string;
  body: string;
  tags: string[];
  image: string;
  updatedAt: Date;
}
const BlogPost = ({
  id,
  title,
  image,
  tags,
  updatedAt,
  body,
}: BlogPostProps) => {
  return (
    <CardWrapper>
      <div key={id}>
        <p>{title}</p>
        <div className="m-auto">
          <Image src={image} alt={title} width={400} height={400} />
        </div>
        <div>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
        <article className="prose lg:prose-xl">{parse(body)}</article>
        <p>{`Updated at: ${updatedAt.toLocaleDateString("en", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`}</p>
      </div>
    </CardWrapper>
  );
};

export default BlogPost;
