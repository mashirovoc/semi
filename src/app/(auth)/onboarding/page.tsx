import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";
import { AiOutlineCheck, AiOutlineUser } from "react-icons/ai";

export const metadata: Metadata = {
  title: "プロフィールの設定",
};

const page = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex flex-col space-y-1.5">
        <div className="text-2xl font-semibold">プロフィールの設定（任意）</div>
        <div className="text-sm text-muted-foreground">
          プロフィールを作成して，他のユーザと交流をしましょう！
        </div>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="avatar">アバター</Label>
          <div className="space-y-3">
            <label htmlFor="avatar">
              <div className="shrink-0 rounded-full w-32 h-32 aspect-square bg-muted flex items-center justify-center">
                <AiOutlineUser size={24} />
              </div>
            </label>
            <div className="space-y-1">
              <Input id="avatar" type="file" />
              <p className="text-xs text-muted-foreground">
                *JPEG/PNG/GIF 形式，最大2MB
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="bio">バイオ</Label>
          <Textarea
            id="bio"
            placeholder="あなたの趣味や将来の目標について書きましょう。"
          />
          <p className="text-xs text-muted-foreground">
            *このバイオは誰でも閲覧をすることができます。
          </p>
        </div>
      </div>
      <Button className="w-full">
        <AiOutlineCheck />
        <div className="ml-2">設定完了</div>
      </Button>
    </div>
  );
};

export default page;
