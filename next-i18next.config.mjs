import path from "path";

const config = {
    debug: process.env.NODE_ENV === "development",
    reloadOnPrerender: process.env.NODE_ENV === "development",
    i18n: {
        locales: ['en', 'uk', 'es', 'de', 'fr'],
        defaultLocale: "en",
    },
    localePath: path.resolve("./public/locales"),
};
export default config;
