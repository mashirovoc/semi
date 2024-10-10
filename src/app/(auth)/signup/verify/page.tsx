import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import { AiOutlineCheck } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Eメールの確認",
};

const page = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex flex-col space-y-1.5">
        <div className="text-2xl font-semibold">Eメールの確認</div>
        <div className="text-sm text-muted-foreground">
          登録したEメールのの認証を行います。
        </div>
      </div>
      <p>
        登録されたEメールにコードを送信しました。
        <br />
        <span className="font-semibold text-primary">5分以内</span>
        にコードを入力して，本登録を済ませてください。
      </p>
      <div className="space-y-1">
        <Label htmlFor="code">認証コード</Label>
        <Input id="code" type="text" placeholder="Your Code" required />
      </div>
      <div className="flex flex-col gap-6">
        <Button className="w-full">
          <AiOutlineCheck />
          <div className="ml-2">コードを認証</div>
        </Button>
        <div className="text-sm">
          メールが来ませんでしたか？{" "}
          <div className="underline">コードの再送信</div>
        </div>
      </div>
    </div>
  );
};

export default page;
