import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";

export const metadata: Metadata = {
  title: "サインアップ",
};

const page = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex flex-col space-y-1.5">
        <div className="text-2xl font-semibold">サインアップ</div>
        <div className="text-sm text-muted-foreground">
          アカウント登録前にEメールの認証を行います。
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
      <div className="flex space-x-3">
        <Checkbox id="terms" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            利用規約に同意する
          </label>
          <p className="text-sm text-muted-foreground">
            <Link
              href="/terms"
              className="text-primary underline font-semibold"
              target="_blank"
            >
              利用規約
            </Link>
            に同意されない場合は，使用することができません。
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Button className="w-full">
          <AiOutlineSend />
          <div className="ml-2">コードを送信</div>
        </Button>
        <div className="text-sm">
          既にアカウントを持っていますか？{" "}
          <Link href="/signin" className="underline">
            サインイン
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
