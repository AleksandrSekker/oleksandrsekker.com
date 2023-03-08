import React, { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "~/components/Input/Input";
import { schema } from "~/components/ContactForm/schema";
import axios from "axios";

type Props = {
  t: (key: string) => string;
};
type SendMailTypes = {
  email: string;
  subject: string;
  message: string;
  name: string;
  phone: string;
};
const ContactForm = ({ t }: Props) => {
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });
  const { errors } = formState;
  const sendHandler = useCallback(async () => {
    console.log("watch", watch());
    try {
      const req = await sendEmail(watch() as SendMailTypes);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  }, [watch]);
  console.log(responseMessage);
  const sendEmail = async ({
    email,
    subject,
    message,
    name,
    phone,
  }: SendMailTypes) => {
    return axios({
      method: "post",
      url: "/api/send-mail",
      data: {
        email,
        subject,
        message,
        name,
        phone,
      },
    });
  };

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
