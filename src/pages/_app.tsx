import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from "~/layout/Layout";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <SessionProvider session={session}>
      <Layout isAdmin={router.pathname.includes("admin")}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -250, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </SessionProvider>
  );
};

const TRPCApp = api.withTRPC(MyApp);

export default TRPCApp;
