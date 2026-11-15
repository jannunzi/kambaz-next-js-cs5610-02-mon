"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

function loadAssignment(
  aid: string,
  course: string,
  assignments: Assignment[],
) {
  if (aid === "new") {
    return { draft: blankAssignment(course), missing: false };
  }
  const found = assignments.find(
    (assignment) => assignment._id === aid && assignment.course === course,
  );
  if (!found) {
    return { draft: blankAssignment(course), missing: true };
  }
  return { draft: { ...found, until: found.until ?? "" }, missing: false };
}

const blankAssignment = (course: string): Assignment => ({
  _id: "",
  title: "",
  course,
  description: "",
  points: 100,
  due: "",
  available: "",
  until: "",
});

export default function AssignmentEditor() {
  const params = useParams();
  const cid = typeof params.cid === "string" ? params.cid : "";
  const aid = typeof params.aid === "string" ? params.aid : "";
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const loaded = loadAssignment(aid, cid, assignments);
  const [routeKey, setRouteKey] = useState(`${cid}:${aid}`);
  const [draft, setDraft] = useState<Assignment>(loaded.draft);
  const [missing, setMissing] = useState(loaded.missing);
  if (`${cid}:${aid}` !== routeKey) {
    setRouteKey(`${cid}:${aid}`);
    setDraft(loaded.draft);
    setMissing(loaded.missing);
  }

  const back = () => router.push(`/courses/${cid}/assignments`);

  const save = () => {
    if (aid === "new") {
      addAssignment({ ...draft, course: cid });
    } else {
      updateAssignment({ ...draft, course: cid });
    }
    back();
  };

  if (missing) {
    return (
      <div id="wd-assignments-editor" className="max-w-3xl space-y-4 p-4">
        <p>Assignment not found.</p>
        <button type="button" id="wd-cancel" onClick={back} className="rounded bg-neutral-200 px-4 py-2">
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="max-w-3xl space-y-4 p-4">
      <div>
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <textarea
        id="wd-description"
        rows={6}
        value={draft.description}
        onChange={(e) => setDraft({ ...draft, description: e.target.value })}
        className="w-full rounded border px-3 py-2"
      />
      <div className="grid grid-cols-[10rem_1fr] items-center gap-4">
        <label htmlFor="wd-points" className="text-right">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={draft.points}
          onChange={(e) =>
            setDraft({ ...draft, points: Number(e.target.value) })
          }
          className="w-full rounded border px-3 py-2"
        />

        <label htmlFor="wd-group" className="text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="text-right">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>

        <label htmlFor="wd-submission-type" className="self-start pt-2 text-right">
          Submission Type
        </label>
        <div className="space-y-3 rounded border p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="w-full rounded border px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
          <div className="font-semibold">Online Entry Options</div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>

        <div className="self-start pt-2 text-right">Assign</div>
        <div className="space-y-3 rounded border p-4">
          <div>
            <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value={draft.due}
              onChange={(e) => setDraft({ ...draft, due: e.target.value })}
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={draft.available}
                onChange={(e) =>
                  setDraft({ ...draft, available: e.target.value })
                }
                className="w-full rounded border px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={draft.until ?? ""}
                onChange={(e) => setDraft({ ...draft, until: e.target.value })}
                className="w-full rounded border px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          id="wd-cancel"
          onClick={back}
          className="rounded bg-neutral-200 px-4 py-2"
        >
          Cancel
        </button>
        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
