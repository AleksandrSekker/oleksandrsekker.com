import { type NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";
import nextI18nConfig from "../../next-i18next.config.mjs";
import AvatarImage from "~/components/AvatarImage/AvatarImage";
import RightBlockWrapper from "~/components/RightBlockWrapper/RightBlockWrapper";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["home", "common"],
      nextI18nConfig
    )),
  },
});
const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-4 text-center xl:px-0">
        <RightBlockWrapper className="mx-auto text-center lg:mx-0">
          <motion.h2 className="py-2 text-5xl font-medium text-teal-400 dark:text-blue-500 md:text-6xl">
            {t("title")}
          </motion.h2>
          <h3 className="py-2 text-2xl dark:text-white">{t("subtitle")}</h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
            {t("description")}
          </p>
        </RightBlockWrapper>
        <AvatarImage image={"/assets/AvatarSecond.JPEG"} />
      </div>
    </>
  );
};

export default Home;
