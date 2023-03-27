import React, { useCallback } from "react";
import { api } from "~/utils/api";
import { type FieldError, type FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "~/components/Input/Input";
import { z } from "zod";
import { CircleLoader } from "react-spinners";

interface IFormInput {
  firstName: string;
  lastName: string;
  jobTitle: string;
  image: string;
  subTitle: string;
  id: string;
}
const Home = () => {
  const { data: personaInformation, isLoading } =
    api.personalInfo.getAll.useQuery();
  console.log("personaInformation", personaInformation);
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        jobTitle: z.string(),
        image: z.string(),
        subTitle: z.string(),
      })
    ),
    defaultValues: personaInformation && (personaInformation[0] as FieldValues),
    mode: "onSubmit",
  });
  const { errors } = formState;

  const utils = api.useContext();

  const postMessage = api.personalInfo.updateMessage.useMutation({
    onMutate: async (newEntry) => {
      await utils.personalInfo.getAll.cancel();
      utils.personalInfo.getAll.setData(undefined, (prevEntries) => {
        if (prevEntries) {
          return [newEntry, ...prevEntries];
        } else {
          return [newEntry];
        }
      });
    },
    onSettled: async () => {
      await utils.personalInfo.getAll.invalidate();
    },
  });
  const sendHandler = useCallback(async () => {
    postMessage.mutate(watch() as IFormInput);
  }, [postMessage, watch]);

  if (isLoading) {
    return (
      <div>
        <CircleLoader className={"mx-auto"} color="#36d7b7" />;
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(sendHandler)}>
        <div className="grid w-full gap-4 py-2 md:grid-cols-2">
          <Input
            title={"First Name"}
            placeholder={"Type your first name"}
            type={"text"}
            register={register}
            name="firstName"
            errors={errors.firstName as FieldError}
            className={"flex flex-col"}
          />
          <Input
            title={"Last Name"}
            placeholder={"Type your last name"}
            type={"text"}
            register={register}
            name="lastName"
            errors={errors.lastName as FieldError}
            className={"flex flex-col"}
          />
        </div>
        <Input
          title={"Sub Title"}
          placeholder={"Type your sub title"}
          type={"text"}
          register={register}
          name="subTitle"
          errors={errors.subTitle as FieldError}
          className={"flex flex-col py-2"}
        />

        <Input
          className="flex flex-col py-2"
          title={"Job Title"}
          placeholder={"Type your job title"}
          type={"text"}
          register={register}
          name="jobTitle"
          errors={errors?.jobTitle as FieldError}
        />
        <Input
          className="flex flex-col py-2"
          title={"Image"}
          placeholder={"Type your image"}
          type={"text"}
          register={register}
          name="image"
          errors={errors?.image as FieldError}
        />

        <button
          type={"submit"}
          className="mt-4 w-full rounded-2xl bg-blue-500 p-4 text-gray-100 dark:bg-gray-800"
        >
          {"submit"}
        </button>
      </form>
    </div>
  );
};

export default Home;
