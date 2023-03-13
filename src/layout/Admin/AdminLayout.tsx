import React from "react";
import AdminSidebar from "~/layout/Admin/AdminSidebar/AdminSidebar";
import AdminNavbar from "./AdminNavbar/AdminNavbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminSidebar />
      <div className="bg-blueGray-100 relative pb-32 pt-12 md:ml-64">
        <AdminNavbar />
        <div className="-m-24 mx-auto w-full px-4 md:px-10">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
