import {
  FaBell,
  FaBullhorn,
  FaChartBar,
  FaCheckCircle,
  FaCloud,
  FaDownload,
  FaHome,
  FaStream,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import type { IconType } from "react-icons";

const ACTIONS: { label: string; icon: IconType }[] = [
  { label: "Import Existing Content", icon: FaDownload },
  { label: "Import from Commons", icon: FaCloud },
  { label: "Choose Home Page", icon: FaHome },
  { label: "View Course Stream", icon: FaStream },
  { label: "New Announcement", icon: FaBullhorn },
  { label: "New Analytics", icon: FaChartBar },
  { label: "View Course Notifications", icon: FaBell },
];

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      {ACTIONS.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <Icon className="me-2 shrink-0" /> {label}
        </button>
      ))}
    </div>
  );
}
