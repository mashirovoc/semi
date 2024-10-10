import RouterTab from "@/components/common/tabs/RouterTab";
import RouterTabTrigger from "@/components/common/tabs/RouterTabItem";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-6 p-3">
      <RouterTab>
        <RouterTabTrigger href="/dashboard">ホーム</RouterTabTrigger>

        <RouterTabTrigger href="/dashboard/category">
          学習カテゴリ
        </RouterTabTrigger>
      </RouterTab>
      {children}
    </div>
  );
};

export default layout;
