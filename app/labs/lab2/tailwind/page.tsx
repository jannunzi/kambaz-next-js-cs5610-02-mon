import "./index.css";
import TailwindTypography from "./TailwindTypography";
import TailwindColor from "./TailwindColor";
import TailwindBorders from "./TailwindBorders";
import TailwindFlexAndWidths from "./TailwindFlexAndWidths";
import TableGrids from "./TableGrids";
import TailwindResponsive from "./TailwindResponsive";
export default function TailwindPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Tailwind Page</h1>
      <TailwindResponsive />
      <hr />
      <TableGrids />
      <hr />
      <TailwindFlexAndWidths />
      <hr />
      <TailwindBorders />
      <hr />
      <TailwindColor />
      <hr />
      <TailwindTypography />

    </div>
  );
}