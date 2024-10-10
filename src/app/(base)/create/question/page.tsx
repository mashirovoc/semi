import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AiOutlineFileImage, AiOutlinePlus } from "react-icons/ai";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="title_container">
          <div className="title">質問を作成</div>
        </div>
        <div className="text-sm text-muted-foreground">
          学習活動の中でわからないことや困ったことがあった場合，他の学習者に聞いてみましょう。
        </div>
        <div className="space-y-1">
          <Label htmlFor="title">タイトル</Label>
          <Input
            id="title"
            type="text"
            placeholder="タイトルは完結に作りましょう"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="main">本文</Label>
          <Textarea
            id="main"
            placeholder="他の学習者への質問を書きましょう。質問はなるべく具体的に，詳細に書くことが重要です！"
            rows={6}
          />
        </div>
        <Button variant="secondary">
          <AiOutlineFileImage />
          <div className="ml-2">画像を追加</div>
        </Button>
        <Separator />
        <div className="space-y-1">
          <Label htmlFor="permit">公開範囲</Label>
          <Select defaultValue="category">
            <SelectTrigger id="permit" className="max-w-[360px]">
              <SelectValue placeholder="閲覧可能範囲を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="group">特定のグループ</SelectItem>
              <SelectItem value="category">特定の学習カテゴリ</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button>
        <AiOutlinePlus />
        <div className="ml-2">作成する</div>
      </Button>
    </div>
  );
};

export default page;
