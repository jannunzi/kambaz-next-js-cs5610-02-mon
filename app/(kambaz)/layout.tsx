import KambazNavigation from "./Navigation";
import "./kambaz.css";
export default function KambazLayout(
  { children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="bg-black w-[150px] hidden md:block fixed top-0 left-0 bottom-0">
        <KambazNavigation />
      </div>
      <div className="flex-grow md:pl-[150px]">
        {children}
      </div>
    </div>
  );
}