import CategorySelectCard from "@/components/common/cards/CategorySelectCard";
import Trend from "@/components/common/icons/Trend";
import Image from "next/image";

const page = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="space-y-3">
        <div className="title_container">
          <div className="title">統計</div>
          <div className="hover_text_muted">もっと見る</div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
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
              <div className="text-muted-foreground text-sm">
                学習時間（週）
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
      <div className="space-y-3">
        <div className="title_container">
          <div className="title">参加中の学習カテゴリ</div>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <CategorySelectCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
