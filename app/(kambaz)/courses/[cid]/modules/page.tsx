import { FaCheckCircle } from "react-icons/fa";
import Lesson from "./Lesson";
import Module from "./Module";
export default function ModulesPage() {
  const modules = [
    {
      title: "Chapter 1",
      lessons: [
        {
          title: "HTML",
          lessons: [
            { title: "Lesson 1.1" },
            { title: "Lesson 1.2" },
            { title: "Lesson 1.3" },
          ],
        },
      ],
    },
    {
      title: "Chapter 2",
      lessons: [
        {
          title: "CSS", lessons: [
            { title: "Lesson 2.1" },
            { title: "Lesson 2.2" },
          ]
        },
      ],
    },
    {
      title: "Chapter 3",
      lessons: [
        {
          title: "JavaScript", lessons: [
            { title: "Lesson 3.1" },
            { title: "Lesson 3.2" },
            { title: "Lesson 3.3" },
            { title: "Lesson 3.4" },
          ]
        },
      ],
    },
    {
      title: "Chapter 4",
      lessons: [
        {
          title: "React", lessons: [
            { title: "Lesson 4.1" },
            { title: "Lesson 4.2" },
            { title: "Lesson 4.3" },
            { title: "Lesson 4.4" },
          ]
        },
      ],
    },
    {
      title: "Chapter 5",
      lessons: [
        {
          title: "React", lessons: [
            { title: "Lesson 5.1" },
            { title: "Lesson 5.2" },
            { title: "Lesson 5.3" },
          ]
        },
      ],
    },
  ]
  return (
    <div>
      <h1>Modules</h1>
      <ul>{modules.map((module) => (
        <Module key={module.title} title={module.title}>
          {module.lessons.map((lesson) => (
            <Lesson key={lesson.title} title={lesson.title}>
              {lesson.lessons.map((lesson) => (
                <li key={lesson.title}>
                  {lesson.title}
                </li>
              ))}
            </Lesson>
          ))}
        </Module>
      ))}</ul>
    </div>
  );
}