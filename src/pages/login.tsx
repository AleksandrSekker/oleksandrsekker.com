import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { CircleLoader } from "react-spinners";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex flex-col items-center pt-4">
        <CircleLoader color="#36d7b7" />;
      </main>
    );
  }

  return (
    <div>
      {session ? (
        <>
          <p className="mb-4 text-center">hi {session.user?.name}</p>
          <button
            type="button"
            className="mx-auto block rounded-md bg-neutral-800 py-3 px-6 text-center hover:bg-neutral-700"
            onClick={() => {
              signOut().catch(console.log);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          type="button"
          className="mx-auto block rounded-md bg-neutral-800 py-3 px-6 text-center hover:bg-neutral-700"
          onClick={() => {
            signIn("discord").catch(console.log);
          }}
        >
          Login with Discord
        </button>
      )}
    </div>
  );
};

export default Login;
