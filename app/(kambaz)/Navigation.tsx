"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBook, FaCalendar, FaCompass, FaFlask, FaHome, FaInbox, FaQuestion, FaTools, FaUser } from "react-icons/fa";

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Account", href: "/account", icon: <FaUser /> },
    { label: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    { label: "Courses", href: "/courses", icon: <FaBook /> },
    { label: "Calendar", href: "/calendar", icon: <FaCalendar /> },
    { label: "Inbox", href: "/inbox", icon: <FaInbox /> },
    { label: "Studio", href: "/studio", icon: <FaTools /> },
    { label: "Commons", href: "/commons", icon: <FaCompass /> },
    { label: "Help", href: "/help", icon: <FaQuestion /> },
    { label: "Labs", href: "/labs/lab1", icon: <FaFlask /> },
  ];
  return (
    <ul className="w-full bg-black text-center text-white">
      {links.map((link) => {
        const active = pathname.includes(link.href);
        return (
          <li key={link.href} className={`p-2 ${active ? "bg-white" : "bg-black"}`}>
            <Link
              className={`flex flex-col items-center no-underline ${active ? "text-black" : "text-white"}`}
              href={link.href}
            >
              <span className="text-3xl leading-none text-red-500">{link.icon}</span>
              <span className="leading-tight">{link.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}