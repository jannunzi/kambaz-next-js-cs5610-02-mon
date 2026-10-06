import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <div className="flex">
        <div className="w-[150px] hidden sm:block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}