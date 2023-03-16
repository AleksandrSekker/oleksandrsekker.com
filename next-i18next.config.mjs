import path from "path";

const config = {
    debug: process.env.NODE_ENV === "development",
    reloadOnPrerender: process.env.NODE_ENV === "development",
    localePath: path.resolve("./public/locales"),
};
export default config;
