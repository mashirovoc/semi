"use client";

import { leftSideBarMenu } from "@/lib/menu";
import useGlobalStateManagement from "@/lib/stores/useGlobalStateManagement";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { AiOutlineSetting } from "react-icons/ai";
import AnimatedSideMenu from "./AnimatedSideBar";

const SmSideBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isOpen = useGlobalStateManagement((state) => state.isSideBarOpen);
  const setOpen = useGlobalStateManagement((state) => state.setSideBarOpen);

  return (
    <AnimatedSideMenu isOpen={isOpen} setOpen={setOpen}>
      <div className="smSideBar">
        <div className="flex flex-col gap-3 grow w-full">
          {leftSideBarMenu.map((v, i) => {
            const isActive =
              v.path &&
              v.path.some((i) => {
                if (i.includes("*")) {
                  const regex = new RegExp(`^${i.replace("*", ".*")}`);
                  return regex.test(pathname);
                } else {
                  return i === pathname;
                }
              }) &&
              searchParams.get("q") === null;
            const Icon =
              isActive && v.item.selectedIcon
                ? v.item.selectedIcon
                : v.item.icon;
            const Child = (
              <>
                <Icon size={24} />
                <span className="ml-3 font-semibold">{v.item.text}</span>
              </>
            );

            if (isActive) {
              return (
                <div
                  key={i}
                  onClick={() => scrollToTop()}
                  className="flex justify-start items-center p-3 text-primary hover:text-primary/80 hover_bg rounded-md"
                >
                  {Child}
                </div>
              );
            }

            return (
              <Link
                key={i}
                href={v.path?.at(0) || "/"}
                className="flex justify-start items-center p-3 hover_bg rounded-md link_button"
              >
                {Child}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Link
            href="/settings"
            className="flex justify-start items-center p-3 hover_bg rounded-md link_button"
          >
            <AiOutlineSetting size={24} />
            <span className="ml-3 font-semibold">設定</span>
          </Link>
        </div>
      </div>
    </AnimatedSideMenu>
  );
};

export default SmSideBar;
