import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { user } from "~/constants/general";
import { useSession } from "next-auth/react";
import { CircleLoader } from "react-spinners";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (
    status === "loading" ||
    typeof window === "undefined" ||
    !localStorage.getItem("theme")
  ) {
    <CircleLoader color="#36d7b7" />;
  }
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white dark:bg-gray-800">
      <Head>
        <title>{user.lastName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
