import React from "react";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PageTitle from "~/components/PageTitle/PageTitle";
import AvatarImage from "~/components/AvatarImage/AvatarImage";
import RightBlockWrapper from "~/components/RightBlockWrapper/RightBlockWrapper";

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
        <RightBlockWrapper className="col-span-2" hoverX={50} hoverY={50}>
          <PageTitle title={t("title")} />
          <p className="py-2 text-black dark:text-white">{t("description1")}</p>
          <p className="py-2 text-black dark:text-white">{t("description2")}</p>
          <p className="py-2 text-black dark:text-white">{t("description3")}</p>
          <p className="py-2 text-black dark:text-white">{t("description4")}</p>
        </RightBlockWrapper>

        <AvatarImage image={"/assets/Avatar.jpg"} />
      </div>
    </div>
  );
};

export default About;
