import type { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson">
      <div className="wd-title bg-white p-2 border border-gray-500 border-1 border-solid border-l-3 border-l-green-700">{title}
        <FaCheckCircle className="text-green-700 float-end text-2xl" />
      </div>
      <ul className="wd-content">{children}</ul>
    </li>
  );
}