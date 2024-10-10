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
import { AiOutlineUser } from "react-icons/ai";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
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
        <Separator />
        <div className="space-y-1">
          <Label htmlFor="job">主たる職業</Label>
          <Select>
            <SelectTrigger id="job">
              <SelectValue placeholder="職業を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="univStudent">大学生・大学院生</SelectItem>
              <SelectItem value="techCollegeStudent">
                専門学校生・短大生
              </SelectItem>
              <SelectItem value="student">中・高校生</SelectItem>
              <SelectItem value="salaryman">
                会社員（雇用形態を問わない）
              </SelectItem>
              <SelectItem value="partJob">パート・アルバイト</SelectItem>
              <SelectItem value="publicServant">
                公務員（教職員を除く）
              </SelectItem>
              <SelectItem value="doctor">医師</SelectItem>
              <SelectItem value="profession">
                士業（公認会計士・弁護士・税理士・司法書士など）
              </SelectItem>
              <SelectItem value="teacher">教職員</SelectItem>
              <SelectItem value="managers">経営者・役員</SelectItem>
              <SelectItem value="selfEmployed">自営業</SelectItem>
              <SelectItem value="houseWives">専業主婦・主夫</SelectItem>
              <SelectItem value="none">無職</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="belongs">所属</Label>
          <Input id="belongs" type="text" placeholder="猫犬大学" required />
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
