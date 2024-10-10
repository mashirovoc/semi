import CategorySelectCard from "@/components/common/cards/CategorySelectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex flex-row justify-end">
        <Button variant="secondary">新たに学習カテゴリに参加する</Button>
      </div>
      <div className="space-y-3">
        <div className="title_container">
          <div className="title">参加中の学習カテゴリ覧</div>
          <Link href="/search" className="hover_text_muted">
            学習カテゴリを探す
          </Link>
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
