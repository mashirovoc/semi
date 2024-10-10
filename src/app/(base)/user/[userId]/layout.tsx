import ShrinkTabs from "@/components/common/tabs/ShrinkTab";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

const page = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { userId: string };
}) => {
  return (
    <>
      <div className="p-3 space-y-3">
        <div className="relative">
          <div className="aspect-[4/1]">
            <Image
              src="https://pbs.twimg.com/media/GUc0091bQAAAE-8?format=jpg&name=large"
              className="w-full h-full object-cover rounded-md"
              fill
              alt="banner"
            />
          </div>
          <div className="absolute bottom-[-41.5px] md:bottom-[-73px] left-3 z-10">
            <div className="rounded-full border-[3px] border-background">
              <Avatar className="w-20 h-20 md:w-36 md:h-36 aspect-square">
                <AvatarImage
                  src="https://pbs.twimg.com/media/GUc0091bQAAAE-8?format=jpg&name=large"
                  className="object-cover"
                />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end md:pb-[25px]">
          <Button variant="secondary" size="sm">
            <AiOutlineUserAdd size={16} />
            <span className="ml-2">フォローする</span>
          </Button>
        </div>
        <div>
          <div className="break-all line-clamp-1 font-bold text-lg">
            ユーザー名
          </div>
          <div className="break-all line-clamp-1 text-muted-foreground text-sm">
            u/userId
          </div>
        </div>
        <div className="flex gap-3 items-center text-muted-foreground text-sm">
          <div>
            <span className="font-semibold text-foreground">500</span>{" "}
            フォロワー
          </div>
          <div>
            <span className="font-semibold text-foreground">4</span> フォロー
          </div>
        </div>
        <div className="line-clamp-3">Bio comes here</div>
        <Link
          href={`/user/${params.userId}/profile`}
          className="hover_text_muted"
        >
          もっと見る
        </Link>
      </div>
      <ShrinkTabs
        tabs={[
          { title: "ホーム", path: `/user/${params.userId}` },
          { title: "タイムライン", path: `/user/${params.userId}/timeline` },
          {
            title: "目標",
            path: `/user/${params.userId}/achievements`,
          },
          {
            title: "統計",
            path: `/user/${params.userId}/statistics`,
          },
          { title: "詳細", path: `/user/${params.userId}/profile` },
        ]}
      />
      {children}
    </>
  );
};

export default page;
