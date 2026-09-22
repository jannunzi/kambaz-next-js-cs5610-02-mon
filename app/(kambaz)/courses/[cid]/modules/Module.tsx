import type { ReactNode } from "react";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module">
      <h4 className="wd-title">{title}</h4>
      <ul className="wd-lessons">{children}</ul>
    </li>
  );
}