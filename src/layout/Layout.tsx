import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { user } from "~/constants/general";
import AdminLayout from "~/layout/Admin/AdminLayout";

interface LayoutProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}

const Layout = ({ children, isAdmin }: LayoutProps) => {
  return isAdmin ? (
    <AdminLayout>
      <Head>
        <title>{user.lastName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
    </AdminLayout>
  ) : (
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
