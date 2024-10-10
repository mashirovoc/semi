import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";

export const metadata: Metadata = {
  title: "パスワードをリセット",
};

const page = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex flex-col space-y-1.5">
        <div className="text-2xl font-semibold">パスワードをリセット</div>
        <div className="text-sm text-muted-foreground">
          Eメールで本人認証を行います。
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Eメール</Label>
        <Input
          id="email"
          type="email"
          placeholder="neko@example.com"
          required
        />
      </div>
      <div className="flex flex-col gap-6">
        <Button className="w-full">
          <AiOutlineSend />
          <div className="ml-2">コードを送信</div>
        </Button>
        <div className="text-sm">
          思い出しましたか？{" "}
          <Link href="/signin" className="underline">
            サインイン
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
