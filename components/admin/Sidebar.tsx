"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  HelpCircle,
  Video,
  BookOpen,
  FileText,
  FolderTree,
  HeartHandshake,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Questions",
    href: "/admin/questions",
    icon: HelpCircle,
  },
  {
    title: "Lectures",
    href: "/admin/lectures",
    icon: Video,
  },
  {
    title: "Bible Studies",
    href: "/admin/bible-studies",
    icon: BookOpen,
  },
  {
    title: "Articles",
    href: "/admin/articles",
    icon: FileText,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Prayer Requests",
    href: "/admin/prayer-requests",
    icon: HeartHandshake,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-white border-r shadow-sm">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-blue-700">
          📖 Bible Aur Hum
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Ministries CMS
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}