"use client";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

const hello = (message: string) => {
  alert(message);
};

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <PassingFunctions message="Hello World!" theFunction={hello} />
      <CounterBroken />
      <ClickEvent />
    </div>
  );
}