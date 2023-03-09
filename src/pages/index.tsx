import { type NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";
import nextI18nConfig from "../../next-i18next.config.mjs";

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
        <motion.div
          animate={{ x: [50, 0], opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: "circOut",
          }}
          initial={{ opacity: 1, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
          className={"mx-auto text-center lg:mx-0"}
        >
          <motion.h2 className="py-2 text-5xl font-medium text-teal-400 dark:text-blue-500 md:text-6xl">
            {t("title")}
          </motion.h2>
          <h3 className="py-2 text-2xl dark:text-white">{t("subtitle")}</h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
            {t("description")}
          </p>
        </motion.div>
        <motion.img
          className={
            "order-last mx-auto rounded-lg duration-300 ease-in hover:scale-105 md:order-first lg:mx-0"
          }
          animate={{ x: [-50, 0] }}
          transition={{
            duration: 1,
          }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ borderRadius: "50%" }}
          src={"/assets/AvatarSecond.JPEG"}
          alt={"my avatar"}
        />
      </div>
    </>
  );
};

export default Home;
