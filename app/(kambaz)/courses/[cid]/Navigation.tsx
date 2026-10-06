import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  const links = [
    { label: "Home", href: `/courses/${cid}/home` },
    { label: "Modules", href: `/courses/${cid}/modules`, selected: true },
    { label: "Piazza", href: `/courses/${cid}/piazza` },
    { label: "Zoom", href: `/courses/${cid}/zoom` },
    { label: "Assignments", href: `/courses/${cid}/assignments` },
    { label: "Quizzes", href: `/courses/${cid}/quizzes` },
    { label: "Grades", href: `/courses/${cid}/grades` },
    { label: "People", href: `/courses/${cid}/people/table` },
  ]
  return (
    <div id="wd-courses-navigation" className="bg-white text-red-500 ms-3">
      {links.map((link) => (
        <div className={`border border-black border-3 border-solid border-t-0 border-b-0 border-r-0 ${link.selected ? "border-l-3 text-black" : "border-l-0 text-red-500"}`}>
          <Link className="p-3 block" key={link.href} href={link.href} id={`wd-course-${link.label.toLowerCase().replace(/ /g, '-')}-link`}>
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
}