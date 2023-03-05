import React from "react";
import Image from "next/image";
import Link from "next/link";
import { linksContact } from "~/constants/general";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div id="contact" className="">
      <div className="m-auto w-full max-w-[1240px] px-2 py-8 ">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
            <div className="h-full lg:p-4 ">
              <div>
                <Image
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  src={"/assets/avatar.jpg"}
                  alt="/"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <h2 className="py-2">Oleksandr Sekker</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and
                  let&apos;s talk.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between py-4">
                  {linksContact.map(({ link, icon, id }) => (
                    <Link key={id} href={link}>
                      <FontAwesomeIcon
                        icon={icon}
                        className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="rounded-lg border-2 border-gray-300 p-3"
                    rows={10}
                    name="message"
                  ></textarea>
                </div>
                <button className="mt-4 w-full p-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
