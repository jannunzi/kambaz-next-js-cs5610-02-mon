import type { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module border border-gray-500 border-0 border-solid border-none mx-3 mb-3">
      <h4 className="wd-title bg-gray-200 p-2">{title}
        <FaCheckCircle className="text-green-700 float-end text-2xl" />
      </h4>
      <ul className="wd-lessons">{children}</ul>
    </li>
  );
}