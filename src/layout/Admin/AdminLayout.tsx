import React, { useEffect } from "react";
import AdminSidebar from "~/layout/Admin/AdminSidebar/AdminSidebar";
import AdminNavbar from "./AdminNavbar/AdminNavbar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user.isAdmin) {
      router.replace("/login");
    }
  }, [router, session]);
  console.log(session);
  return (
    <>
      <AdminSidebar />
      <div className="bg-blueGray-100 relative pb-32 pt-12 md:ml-64">
        <AdminNavbar />
        <div className="-m-24 mx-auto mt-24 w-full px-4 md:px-10">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
