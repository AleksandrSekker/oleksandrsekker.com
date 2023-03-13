import React from "react";
import ContactForm from "~/components/ContactForm/ContactForm";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["contact", "common"],
      nextI18nConfig
    )),
  },
});
const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <div>
      <div className="m-auto w-full max-w-screen-xl px-2 py-2 ">
        <div className={`grid gap-8`}>
          <div className="col-span-3 h-auto w-full rounded-xl border border-gray-200 shadow-md shadow-gray-400 dark:bg-white lg:p-4">
            <div className="p-4">
              <ContactForm t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
