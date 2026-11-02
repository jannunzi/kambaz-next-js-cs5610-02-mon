"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/account/signin", id: "wd-account-signin-link", label: "Signin" },
  { href: "/account/signup", id: "wd-account-signup-link", label: "Signup" },
  { href: "/account/profile", id: "wd-account-profile-link", label: "Profile" },
] as const;

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map(({ href, id, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
