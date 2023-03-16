import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { CircleLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.user.isAdmin) {
      router.replace("/admin/blog/overview");
    }
  }, [router, session]);

  if (status === "loading") {
    return (
      <main className="flex flex-col items-center pt-4">
        <CircleLoader color="#36d7b7" />;
      </main>
    );
  }

  return (
    <>
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full content-center items-center justify-center">
          <div className="w-full rounded-2xl border-2 border-gray-800 px-4 dark:border-0 dark:bg-white lg:w-4/12">
            <div className="bg-blueGray-200 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg">
              <div className="mb-0 rounded-t px-6 py-6">
                <div className="mb-3 text-center">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="active:bg-blueGray-50 text-blueGray-700 mr-1 mb-1 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-normal font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none"
                    type="button"
                    onClick={() => {
                      signIn("discord").catch(console.log);
                    }}
                  >
                    <FontAwesomeIcon icon={faDiscord} />
                    Discord
                  </button>
                </div>
                <hr className="border-b-1 border-blueGray-300 mt-6" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="text-blueGray-400 mb-3 text-center font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form>
                  <div className="relative mb-3 w-full">
                    <label
                      className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative mb-3 w-full">
                    <label
                      className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      className="bg-blueGray-800 active:bg-blueGray-600 mr-1 mb-1 w-full rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
