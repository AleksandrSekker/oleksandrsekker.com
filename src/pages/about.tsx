import React from "react";
import Image from "next/image";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["about", "common"],
      nextI18nConfig
    )),
  },
});
const About = () => {
  const { t } = useTranslation("about");

  return (
    <div
      id="about"
      className="mx-auto flex w-full max-w-screen-xl items-center px-4 py-16 xl:px-0"
    >
      <div className="m-auto max-w-screen-xl grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-blue-700 dark:text-blue-400">
            {t("title")}
          </p>
          <p className="py-2 text-black dark:text-white">{t("description1")}</p>
          <p className="py-2 text-black dark:text-white">{t("description2")}</p>
          <p className="py-2 text-black dark:text-white">{t("description3")}</p>
          <p className="py-2 text-black dark:text-white">{t("description4")}</p>
        </div>
        <Image
          src="/assets/AvatarSecond.jpg"
          width={400}
          height={400}
          className="order-last mx-auto rounded-lg duration-300 ease-in hover:scale-105 md:order-first lg:mx-0"
          alt="/"
        />
      </div>
    </div>
  );
};

export default About;
