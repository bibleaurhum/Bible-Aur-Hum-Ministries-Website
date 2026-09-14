"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      {/* Left side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Welcome back to Bible Aur Hum CMS
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          className="rounded-lg border p-2 hover:bg-gray-100"
        >
          <Bell size={20} />
        </button>

        {/* User Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          B
        </div>
      </div>
    </header>
  );
}