import Header from "@/components/common/Header";
import LeftSideBar from "@/components/common/LeftSideBar";
import AppearanceSelect from "@/components/common/modals/AppearanceSelect";
import UserMenu from "@/components/common/modals/UserMenu";
import SmSideBar from "@/components/common/SmSideBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="grow flex flex-row pt-14">
        <LeftSideBar />
        <div className="grow md:ml-20 lg:ml-64 min-w-0">
          <main className="max-w-[1280px] mx-auto">{children}</main>
        </div>
      </div>
      <SmSideBar />
      <UserMenu />
      <AppearanceSelect />
    </>
  );
};

export default layout;
