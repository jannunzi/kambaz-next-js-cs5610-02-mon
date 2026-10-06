import Link from "next/link";
import { FaBook, FaCalendar, FaCompass, FaHome, FaInbox, FaQuestion, FaTools, FaUser } from "react-icons/fa";

export default function KambazNavigation() {
  const links = [
    { label: "Account", href: "/account/profile", icon: <FaUser /> },
    { label: "Dashboard", href: "/dashboard", icon: <FaHome />, selected: true },
    { label: "Courses", href: "/courses", icon: <FaBook /> },
    { label: "Calendar", href: "/calendar", icon: <FaCalendar /> },
    { label: "Inbox", href: "/inbox", icon: <FaInbox /> },
    { label: "Studio", href: "/studio", icon: <FaTools /> },
    { label: "Commons", href: "/commons", icon: <FaCompass /> },
    { label: "Help", href: "/help", icon: <FaQuestion /> },
  ];
  return (
    <ul className="text-center bg-black text-white">
      {links.map((link) => (
        <li key={link.href} className={`p-2 ${link.selected ? "bg-white text-black" : "bg-black text-white"}`}>
          <Link className={`text-white text-center ${link.selected ? "text-black" : "text-white"}`} href={link.href}>
            <div className="text-red-500 text-center text-3xl block">
              {link.icon}
            </div>
            <span className={`text-center ${link.selected ? "text-black" : "text-white"}`}>
              {link.label}
            </span>
          </Link>
        </li>
      ))
      }
    </ul>
  );
}