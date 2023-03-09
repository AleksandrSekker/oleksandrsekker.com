import React from "react";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PageTitle from "~/components/PageTitle/PageTitle";
import { motion } from "framer-motion";

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
        <motion.div
          animate={{ x: [50, 0], opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: "circOut",
          }}
          initial={{ opacity: 1, scale: 0.5 }}
          whileHover={{ scale: 1.1, x: 50 }}
          className="col-span-2"
        >
          <PageTitle title={t("title")} />
          <p className="py-2 text-black dark:text-white">{t("description1")}</p>
          <p className="py-2 text-black dark:text-white">{t("description2")}</p>
          <p className="py-2 text-black dark:text-white">{t("description3")}</p>
          <p className="py-2 text-black dark:text-white">{t("description4")}</p>
        </motion.div>
        <motion.img
          className={
            "order-last mx-auto rounded-lg duration-300 ease-in hover:scale-105 md:order-first lg:mx-0"
          }
          animate={{ x: [-50, 0] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 1,
          }}
          whileHover={{ borderRadius: "50%" }}
          src={"/assets/Avatar.jpg"}
          alt={"my avatar"}
        />
      </div>
    </div>
  );
};

export default About;
