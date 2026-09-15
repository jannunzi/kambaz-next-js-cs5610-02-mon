import HeadingTags from "./HeadingTags";
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
        {headingTags.map((headingTag) => headingTag)}
      </div>
    );
  }