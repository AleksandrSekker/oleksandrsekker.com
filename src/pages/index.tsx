import { type NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
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
        <div className={"mx-auto text-center lg:mx-0"}>
          <h2 className="py-2 text-5xl font-medium text-teal-400 dark:text-blue-500 md:text-6xl">
            {t("title")}
          </h2>
          <h3 className="py-2 text-2xl dark:text-white">{t("subtitle")}</h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
            {t("description")}
          </p>
        </div>
        <Image
          className={
            "order-last mx-auto rounded-lg duration-300 ease-in hover:scale-105 md:order-first lg:mx-0"
          }
          src={"/assets/avatar.jpg"}
          width={400}
          height={400}
          alt={"my avatar"}
        />
      </div>
    </>
  );
};

export default Home;
