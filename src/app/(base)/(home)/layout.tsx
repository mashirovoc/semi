import Check from "@/components/common/icons/Check";
import Clock from "@/components/common/icons/Clock";
import Trend from "@/components/common/icons/Trend";
import RouterTab from "@/components/common/tabs/RouterTab";
import RouterTabTrigger from "@/components/common/tabs/RouterTabItem";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ホーム",
};
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="p-3 flex flex-col-reverse 2xl:flex-row w-full max-2xl:max-w-[760px] gap-6 2xl:gap-12">
        <div className="grow max-w-[760px] space-y-6">
          <RouterTab>
            <RouterTabTrigger href="/">フォロー中</RouterTabTrigger>
            <RouterTabTrigger href="/tl/category">
              学習カテゴリ
            </RouterTabTrigger>
          </RouterTab>
          {children}
        </div>
        <div className="min-w-[360px] space-y-6">
          <div className="space-y-3">
            <div className="title_container">
              <div className="title">試験日まで</div>
              <Link href="/category" className="hover_text_muted">
                参加中の学習カテゴリを見る
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 2xl:grid-cols-1 gap-3">
              <div className="mini_card_woStyle hover_bg flex flex-col items-start gap-3">
                <div className="space-y-1 p-3 pb-0">
                  <div className="font-semibold text-lg">Category A</div>
                  <div className="text-muted-foreground text-sm">
                    cID: ctgryA
                  </div>
                </div>
                <Separator />
                <div className="space-y-1 p-3 ot-0">
                  <div className="text-muted-foreground text-sm">
                    試験日まで
                  </div>
                  <div className="text-sm">
                    あと{" "}
                    <span className="text-xl font-semibold text-primary">
                      3 日
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="title_container">
              <div className="title">デイリー目標</div>
              <Link href="/dashboard" className="hover_text_muted">
                ダッシュボードを見る
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 2xl:grid-cols-1 gap-3">
              <div className="mini_card">
                <Clock />
                <div className="space-y-1 grow">
                  <div className="font-semibold">学習時間 0.5 / 6 時間</div>
                  <div className="flex items-center gap-3">
                    <Progress value={33} className="h-3" />
                    <Check />
                  </div>
                </div>
              </div>
              <div className="mini_card">
                <Trend />
                <div className="space-y-1">
                  <div className="font-semibold text-lg">1位</div>
                  <div className="text-muted-foreground text-sm">
                    ランキング（日）
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
