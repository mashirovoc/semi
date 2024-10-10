import { Separator } from "@/components/ui/separator";

const CategorySelectCard = () => {
  return (
    <div className="mini_card_woStyle hover_bg flex flex-col items-start gap-3">
      <div className="space-y-1 p-3 pb-0">
        <div className="font-semibold text-lg">Category A</div>
        <div className="text-muted-foreground text-sm">cID: ctgryA</div>
      </div>
      <Separator />
      <div className="p-3 pt-0 flex justify-evenly gap-3 w-full">
        <div className="flex flex-col items-center gap-1">
          <div className="font-semibold">3人</div>
          <div className="text-muted-foreground text-sm">今日のアクセス</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-semibold">1位</div>
          <div className="text-muted-foreground text-sm">カテゴリ内順位</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-semibold">3.2時間</div>
          <div className="text-muted-foreground text-sm">平均学習時間</div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectCard;
