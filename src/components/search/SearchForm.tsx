import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  return (
    <div className="h-[calc(100dvh-56px)] flex items-center justify-center p-3">
      <div className="space-y-3 w-full max-w-xl">
        <div className="title_container">
          <div className="title">何を探しますか？</div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Input type="search" placeholder="検索..." className="grow" />
            <Button>
              <AiOutlineSearch size={16} />
            </Button>
          </div>
          <RadioGroup defaultValue="category">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="category" id="category" />
                <Label htmlFor="category">学習カテゴリ</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="post" id="post" />
                <Label htmlFor="post">投稿</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user">ユーザ</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
