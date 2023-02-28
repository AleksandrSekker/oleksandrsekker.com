import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Head>
        <title>Sekker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
