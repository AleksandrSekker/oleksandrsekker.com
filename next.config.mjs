// @ts-check
import config from "./next-i18next.config.mjs";
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: config.i18n,
  images: {
    domains: ['images.pexels.com', 'res.cloudinary.com'],
  },
});
