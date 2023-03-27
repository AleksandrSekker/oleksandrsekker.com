import React, { useCallback } from "react";
import { api } from "~/utils/api";
import { type FieldError, type FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "~/components/Input/Input";
import { useRouter } from "next/router";
import { CircleLoader } from "react-spinners";

interface IFormInput {
  title: string;
  description: string;
  body: string;
  image: string;
  tags: string[];
  updatedAt: Date;
  id: string;
}
const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, isLoading } = api.blogpost.getOne.useQuery({
    id: id as string,
  });
  const utils = api.useContext();
  const postMessage = api.blogpost.updateMessage.useMutation({
    onMutate: async (newEntry) => {
      await utils.blogpost.getOne.cancel();
      utils.blogpost.getOne.setData({ id: id as string }, (prevEntries) => {
        if (prevEntries) {
          return [newEntry, ...prevEntries];
        } else {
          return [newEntry];
        }
      });
    },
    onSettled: async () => {
      await utils.blogpost.getOne.invalidate();
    },
  });
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(
      z.object({
        title: z.string(),
        description: z.string(),
        body: z.string(),
        image: z.string(),
        tags: z.string() || z.array(z.string()),
      })
    ),
    mode: "onSubmit",
    defaultValues: post as FieldValues,
  });
  const { errors } = formState;

  const sendHandler = useCallback(async () => {
    postMessage.mutate({
      title: watch("title"),
      description: watch("description"),
      body: watch("body"),
      image: watch("image"),
      tags: watch("tags") ? watch("tags").split(",") : [""],
    } as IFormInput);
  }, [postMessage, watch]);

  if (isLoading) {
    return (
      <div>
        <CircleLoader className={"mx-auto"} color="#36d7b7" />;
      </div>
    );
  }
  return (
    <form
      className="mx-auto mt-40 flex max-w-screen-xl flex-col gap-2"
      onSubmit={handleSubmit(sendHandler)}
    >
      <Input
        title={"Title"}
        placeholder={"Type title here..."}
        type={"text"}
        register={register}
        name="title"
        errors={errors.title as FieldError}
        className={"flex flex-col"}
      />
      <Input
        title={"Description"}
        placeholder={"Type description here..."}
        type={"text"}
        register={register}
        name="description"
        errors={errors.description as FieldError}
        className={"flex flex-col"}
      />
      <Input
        title={"Image"}
        placeholder={"Type title here..."}
        type={"text"}
        register={register}
        name="image"
        errors={errors.image as FieldError}
        className={"flex flex-col"}
      />
      <Input
        title={"Tags"}
        placeholder={"Type title here..."}
        type={"text"}
        register={register}
        name="tags"
        errors={errors.tags as FieldError}
        className={"flex flex-col"}
      />
      <Input
        title={"Body"}
        placeholder={"Type title here..."}
        type={"textarea"}
        register={register}
        name="body"
        errors={errors.body as FieldError}
        className={"flex flex-col"}
      />
      <button
        type="submit"
        className="rounded-md border-2 border-zinc-800 p-2 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default EditPost;
