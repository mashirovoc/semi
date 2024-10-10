import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { AiOutlineFileImage, AiOutlinePlus } from "react-icons/ai";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="title_container">
          <div className="title">投稿を作成</div>
        </div>
        <div className="text-sm text-muted-foreground">
          投稿では，今日あった出来事や目標，うまく行ったことなどを他の学習者と共有しましょう。
          <br />
          *他の人に学習のアドバイスを貰いたい場合や，勉強の内容がわからない場合は，
          <Link
            href="/create/question"
            className="underline font-semibold text-primary"
          >
            質問モード
          </Link>
          を使ってください。
        </div>
        <div className="space-y-1">
          <Textarea
            placeholder="今日あった出来事や，達成したことなどを書きましょう！"
            rows={6}
          />
        </div>
        <Button variant="secondary">
          <AiOutlineFileImage />
          <div className="ml-2">画像を追加</div>
        </Button>
        <Separator />
        <div className="space-y-1">
          <Label htmlFor="reply">返信可能範囲</Label>
          <Select defaultValue="all">
            <SelectTrigger id="reply" className="max-w-[360px]">
              <SelectValue placeholder="返信を受け入れる範囲を選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全員</SelectItem>
              <SelectItem value="group">フォロー中のみ</SelectItem>
              <SelectItem value="none">誰も許可しない</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="permit">公開範囲</Label>
          <Select defaultValue="all">
            <SelectTrigger id="permit" className="max-w-[360px]">
              <SelectValue placeholder="公開範囲を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全員</SelectItem>
              <SelectItem value="group">特定のグループ</SelectItem>
              <SelectItem value="category">特定の学習カテゴリ</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button>
        <AiOutlinePlus />
        <div className="ml-2">投稿する</div>
      </Button>
    </div>
  );
};

export default page;
