"use client";

import { usePathname } from "next/navigation";
import ShrinkTabItem from "./ShrinkTabItem";

export type ShrinkTab = { title: string; path: string };

const ShrinkTabs = ({ tabs }: { tabs: ShrinkTab[] }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row items-start overflow-x-auto">
      {tabs.map((v, i) => {
        const isActive = pathname === v.path;
        return (
          <ShrinkTabItem
            key={i}
            title={v.title}
            path={v.path}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default ShrinkTabs;
