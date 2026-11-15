"use client";
import Environment from "./Environment";
import PathParameters from "./PathParameters";
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <PathParameters />
      <Environment />
      <a id="wd-welcome-link" href="http://localhost:4000/lab5/welcome">
        Welcome
      </a>
    </div>
  );
}