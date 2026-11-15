"use client";

const hello = (message: string, event: React.MouseEvent<HTMLButtonElement>) => {

  alert(event.currentTarget.value);
  event.preventDefault();
  event.stopPropagation();
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button onClick={(event) => hello("Hello World!", event)} id="wd-onclick-hello" className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">
        Click Hello
      </button>
      <hr />
    </div>
  );
}