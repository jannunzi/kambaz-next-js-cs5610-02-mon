"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [
    { label: "Home", href: `home` },
    { label: "Modules", href: `modules`, },
    { label: "Piazza", href: `piazza` },
    { label: "Zoom", href: `zoom` },
    { label: "Assignments", href: `assignments` },
    { label: "Quizzes", href: `quizzes` },
    { label: "Grades", href: `grades` },
    { label: "People", href: `people/table` },
  ]
  return (
    <div id="wd-courses-navigation" className="bg-white text-red-500 ms-3">
      {links.map((link) => (
        <div className={`border border-black border-3 border-solid border-t-0 border-b-0 border-r-0
          ${pathname.includes(link.href) ? "border-l-3 text-black" : "border-l-0 text-red-500"}`}>
          <Link className="p-3 block" key={link.href} href={`/courses/${cid}/${link.href}`} id={`wd-course-${link.label.toLowerCase().replace(/ /g, '-')}-link`}>
            {link.label}
          </Link>
        </div>
      ))}
      <div>
        {pathname}
      </div>
    </div>
  );
}