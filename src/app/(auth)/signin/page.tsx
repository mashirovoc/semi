import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";

export const metadata: Metadata = {
  title: "サインイン",
};

const page = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex flex-col space-y-1.5">
        <div className="text-2xl font-semibold">サインイン</div>
        <div className="text-sm text-muted-foreground">
          アカウントにアクセスするには，Eメールとパスワードを入力してください。
        </div>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="email">Eメール</Label>
          <Input
            id="email"
            type="email"
            placeholder="neko@example.com"
            required
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">パスワード</Label>
            <Link
              href="/resetPassword"
              className="text-sm underline"
              prefetch={false}
            >
              パスワードを忘れましたか？
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Your Password"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Button className="w-full">
          <AiOutlineLogin />
          <div className="ml-2">サインイン</div>
        </Button>
        <div className="text-sm">
          アカウントを持っていませんか？{" "}
          <Link href="/signup" className="underline">
            サインアップ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
