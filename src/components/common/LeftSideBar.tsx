"use client";

import { leftSideBarMenu } from "@/lib/menu";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { AiOutlineSetting } from "react-icons/ai";

const LeftSideBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="leftSideBar">
      <div className="flex flex-col gap-3 grow max-md:items-end lg:w-full">
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
            isActive && v.item.selectedIcon ? v.item.selectedIcon : v.item.icon;
          const Child = (
            <>
              <Icon size={24} />
              <span className="ml-3 max-lg:hidden font-semibold">
                {v.item.text}
              </span>
            </>
          );

          if (isActive) {
            return (
              <div
                key={i}
                onClick={() => scrollToTop()}
                className="flex justify-start max-lg:justify-center items-center p-3 text-primary hover:text-primary/80 hover_bg rounded-md"
              >
                {Child}
              </div>
            );
          }

          return (
            <Link
              key={i}
              href={v.path?.at(0) || "/"}
              className="flex justify-start max-lg:justify-center items-center p-3 hover_bg rounded-md link_button"
            >
              {Child}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 max-md:items-end lg:w-full">
        <Link
          href="/settings"
          className="flex justify-start max-lg:justify-center items-center p-3 hover_bg rounded-md link_button"
        >
          <AiOutlineSetting size={24} />
          <span className="ml-3 max-lg:hidden font-semibold">設定</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftSideBar;
