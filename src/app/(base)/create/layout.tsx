import RouterTab from "@/components/common/tabs/RouterTab";
import RouterTabTrigger from "@/components/common/tabs/RouterTabItem";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-6 p-3">
      <RouterTab>
        <RouterTabTrigger href="/create">投稿モード</RouterTabTrigger>
        <RouterTabTrigger href="/create/question">質問モード</RouterTabTrigger>
      </RouterTab>
      {children}
    </div>
  );
};

export default layout;
