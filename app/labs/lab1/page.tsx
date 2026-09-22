import AddParameters from "./AddParameters";
import HeadingTags from "./HeadingTags";
import TitledList from "./TitledList";
export default function Lab1() {
    const headingTags = [
        <HeadingTags heading="Heading 1"/>,
        <HeadingTags heading="Heading 2"/>,
        <HeadingTags heading="Heading 3"/>,
        <HeadingTags heading="Heading 4"/>,
        <HeadingTags heading="Heading 5"/>,
        <HeadingTags heading="Heading 6"/>,
    ];
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <TitledList title="My todo list 123123">
          <li>Learn React</li>
          <li>Build a project</li>
          <li>Deploy the project</li>
          <li>Deploy the project</li>
        </TitledList>
        {AddParameters({a: 1, b: 2})}
        <AddParameters a={1} b={2} />
        {headingTags.map((headingTag) => headingTag)}
        {headingTags}
      </div>
    );
  }