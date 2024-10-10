import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AiOutlineUser } from "react-icons/ai";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="code">招待コード</Label>
          <Input id="code" type="text" placeholder="Your Code" required />
        </div>
        <Separator />
        <div className="space-y-1">
          <Label>Eメール</Label>
          <div>neko@example.com</div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">パスワード</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirmPassword">パスワードを再確認</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="nickname">ニックネーム</Label>
          <Input id="nickname" type="text" placeholder="猫犬太郎" required />
        </div>
        <div className="space-y-1">
          <Label htmlFor="userId">希望するユーザーID</Label>
          <Input id="userId" type="text" placeholder="nekoinu_tarou" required />
        </div>
      </div>
      <Button className="w-full">
        <AiOutlineUser />
        <div className="ml-2">会員登録</div>
      </Button>
    </div>
  );
};

export default page;
