import React, { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "~/components/Input/Input";

type Props = {
  t: (key: string) => string;
};
const ContactForm = ({ t }: Props) => {
  const schema = z.object({
    name: z.string().nonempty().min(2),
    phone: z.string().nonempty().min(2),
    email: z.string().nonempty().email(),
    subject: z.string().nonempty().min(2),
    message: z.string().min(8),
  });
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });
  const { errors } = formState;
  const sendHandler = useCallback(() => {
    console.log("watch", watch());
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(sendHandler)}>
      <div className="grid w-full gap-4 py-2 md:grid-cols-2">
        <Input
          title={t("name")}
          placeholder={t("namePlaceholder")}
          type={"text"}
          register={register}
          name="name"
          errors={errors.name}
          className={"flex flex-col"}
        />
        <Input
          title={t("phone")}
          placeholder={t("phonePlaceholder")}
          type={"text"}
          register={register}
          name="phone"
          errors={errors.phone}
          className={"flex flex-col"}
        />
      </div>
      <Input
        title={t("email")}
        placeholder={t("emailPlaceholder")}
        type={"text"}
        register={register}
        name="email"
        errors={errors.email}
        className={"flex flex-col py-2"}
      />
      <Input
        className="flex flex-col py-2"
        title={t("subject")}
        placeholder={t("subjectPlaceholder")}
        type={"textarea"}
        register={register}
        name="subject"
        errors={errors.subject}
      />
      <Input
        className="flex flex-col py-2"
        title={t("message")}
        placeholder={t("messagePlaceholder")}
        type={"textarea"}
        register={register}
        name="message"
        errors={errors.message}
      />

      <button
        type={"submit"}
        className="mt-4 w-full rounded-2xl bg-blue-500 p-4 text-gray-100 dark:bg-gray-800"
      >
        {t("submit")}
      </button>
    </form>
  );
};

export default ContactForm;
