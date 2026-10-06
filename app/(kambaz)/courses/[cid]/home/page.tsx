import Modules from "../modules/page";
import CourseStatus from "./CourseStatus";

export default function Home() {
  return (
    <div id="wd-home" className="flex">
      <div className="bg-red-200 flex-grow">
        <Modules />
      </div>
      <div className="bg-purple-200 hidden lg:block">
        <CourseStatus />
      </div>
    </div>
  );
}