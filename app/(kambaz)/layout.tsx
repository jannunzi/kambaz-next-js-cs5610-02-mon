import KambazNavigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";
import "./kambaz.css";

export default function KambazLayout({ children }: { children: React.ReactNode }) {
  return (
    <AccountProvider>
      <div id="wd-kambaz" className="flex font-sans">
        <div className="bg-black w-[150px] hidden md:block fixed top-0 left-0 bottom-0">
          <KambazNavigation />
        </div>
        <div className="min-w-0 flex-grow p-4 md:pl-[calc(150px+1rem)]">
          {children}
        </div>
      </div>
    </AccountProvider>
  );
}
