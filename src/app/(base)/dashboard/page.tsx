import Check from "@/components/common/icons/Check";
import Clock from "@/components/common/icons/Clock";
import Trend from "@/components/common/icons/Trend";
import DeviationFromDailyTargets from "@/components/pages/dashboard/DeviationFromDailyTargets";
import MonthlyStudyTime from "@/components/pages/dashboard/MonthlyStudyTime";
import WeekRank from "@/components/pages/dashboard/WeekRank";
import WeekStudyTime from "@/components/pages/dashboard/WeekStudyTime";
import { Progress } from "@/components/ui/progress";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ダッシュボード",
};

const page = () => {
  return (
    <div className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <WeekStudyTime />
        <WeekRank />
        <MonthlyStudyTime />
        <DeviationFromDailyTargets />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="col-span-2 mini_card">
          <Clock />
          <div className="space-y-1 grow">
            <div className="font-semibold">今日の学習時間 0.5 / 6 時間</div>
            <div className="flex items-center gap-3">
              <Progress value={33} className="h-3" />
              <Check />
            </div>
          </div>
        </div>

        <div className="mini_card">
          <Image src="/icon/star.svg" width={32} height={32} alt="star" />
          <div className="space-y-1">
            <div className="font-semibold text-lg">4日</div>
            <div className="text-muted-foreground text-sm">継続日数</div>
          </div>
        </div>
        <div className="mini_card">
          <Image src="/icon/chart.svg" width={32} height={32} alt="chart" />
          <div className="space-y-1">
            <div className="font-semibold text-lg">32時間</div>
            <div className="text-muted-foreground text-sm">学習時間（週）</div>
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
        <div className="mini_card">
          <Trend />
          <div className="space-y-1">
            <div className="font-semibold text-lg">4位</div>
            <div className="text-muted-foreground text-sm">
              ランキング（週）
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
