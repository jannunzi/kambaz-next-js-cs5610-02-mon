import Link from "next/link";

export default function KambazNavigation() {
    const links = [
        { label: "Account", href: "/account/profile" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Courses", href: "/courses" },
        { label: "Calendar", href: "/calendar" },
        { label: "Inbox", href: "/inbox" },
        { label: "Studio", href: "/studio" },
        { label: "Commons", href: "/commons" },
        { label: "Help", href: "/help" },
    ];
    return (
        <ul>
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))
            }
        </ul>
    );
}