"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & {
  until?: string;
};

type AssignmentDraft = Omit<Assignment, "_id">;

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: AssignmentDraft) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson,
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter(
        (assignment) => assignment._id !== assignmentId,
      ),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((item) =>
        item._id === assignment._id ? assignment : item,
      ),
    })),
}));
