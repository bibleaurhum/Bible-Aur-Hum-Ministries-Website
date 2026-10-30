"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-lg">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          Bible Aur Hum
        </h1>

        <p className="mb-8 text-gray-600">
          Ministry Administration
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          Admin Sign In
        </h2>

        <p className="mb-8 text-sm text-gray-500">
          Sign in with your authorized ministry Google account.
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/admin" })}
          className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Continue with Google
        </button>

        <p className="mt-8 text-xs text-gray-400">
          Authorized access only
        </p>
      </div>
    </main>
  );
}