import Link from "next/link";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <CourseCard title="Web Development" code="CS5610" instructor="John Doe" ta="Jane Doe" href="/courses/cs5610" />
      <CourseCard title="Data Bases" code="CS5200" instructor="John Doe" ta="Jane Doe" href="/courses/cs5200" />
      <CourseCard title="Web Development" code="CS5610" instructor="John Doe" ta="Jane Doe" href="/courses/cs5610" />
    </div>
  );
}