import RouterTab from "@/components/common/tabs/RouterTab";
import RouterTabTrigger from "@/components/common/tabs/RouterTabItem";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "サインアップ",
};

const page = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-6 p-3">
      <div className="space-y-1.5">
        <div className="text-2xl font-semibold">サインアップ</div>
        <div className="text-sm text-muted-foreground">
          必要情報を登録して，サービス利用を開始してください。
        </div>
      </div>
      <div className="space-y-3">
        <div className="space-y-1.5">
          <div className="font-semibold">招待コードをお持ちですか？</div>
          <div className="text-sm text-muted-foreground">
            招待コードをお持ちの場合は，
            <span className="font-semibold">「持っている」</span>
            を選択してください。
          </div>
        </div>
        <RouterTab>
          <RouterTabTrigger href="/signup/wocode">
            持っていない
          </RouterTabTrigger>
          <RouterTabTrigger href="/signup/wcode">持っている</RouterTabTrigger>
        </RouterTab>
      </div>
      {children}
    </div>
  );
};

export default page;
