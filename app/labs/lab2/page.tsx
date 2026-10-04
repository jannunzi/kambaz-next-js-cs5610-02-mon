import "./index.css";
import ForegroundColors from "./ForegroundColors";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Flex from "./Flex";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <Flex />
      <Zindex />
      <Positions />
      <br /><br /><br /><br /><br /><br />
      {/* <Dimensions /> */}
      <p id="p1">
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p>
        Class attribute allows configuring look and feel on the element. Unlike the style attribute, it is considered good practice and you should use it whenever possible.
      </p>
      <ForegroundColors />
    </div>
  );
}