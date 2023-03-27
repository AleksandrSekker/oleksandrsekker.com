import React from "react";
import ContactForm from "~/components/ContactForm/ContactForm";
import PageTitle from "~/components/PageTitle/PageTitle";

const Contact = () => {
  return (
    <div>
      <div className="m-auto w-full max-w-screen-xl px-2 py-2 ">
        <PageTitle title={"Contact"} className="mb-4" />
        <div className={`grid gap-8`}>
          <div className="col-span-3 h-auto w-full rounded-xl border border-gray-200 shadow-md shadow-gray-400 dark:bg-white lg:p-4">
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
