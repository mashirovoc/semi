"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useGlobalStateManagement from "@/lib/stores/useGlobalStateManagement";
import Link from "next/link";
import {
  AiOutlineArrowLeft,
  AiOutlineLogout,
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineFeedback, MdOutlineLightbulb } from "react-icons/md";
import AnimatedDialogMenu from "../AnimatedDialogMenu";
import UserMenuListTileCard from "../cards/UserMenuListTileCard";

const UserMenu = () => {
  const isUserMenuOpen = useGlobalStateManagement(
    (state) => state.isUserMenuOpen
  );
  const setUserMenuOpen = useGlobalStateManagement(
    (state) => state.setUserMenuOpen
  );
  const setAppearanceSelectOpen = useGlobalStateManagement(
    (state) => state.setAppearanceSelectOpen
  );

  return (
    <AnimatedDialogMenu isOpen={isUserMenuOpen} setOpen={setUserMenuOpen}>
      <div className="flex items-center gap-3 p-3">
        <Button
          variant="ghost"
          size="icon"
          className=""
          onClick={() => setUserMenuOpen(false)}
        >
          <AiOutlineArrowLeft size={24} />
        </Button>
        <div className="text-lg font-bold">アカウント</div>
      </div>
      <Link
        href="/user/yourUserName"
        className="block w-full hover_bg rounded-md"
      >
        <div
          className="flex items-center gap-3 p-3"
          onClick={() => setUserMenuOpen(false)}
        >
          <Avatar className="w-14 h-14 md:w-16 md:h-16 aspect-square">
            <AvatarImage
              src="https://pbs.twimg.com/media/GUc0091bQAAAE-8?format=jpg&name=large"
              alt="@userId"
              className="object-cover"
            />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <div className="grow flex flex-col items-start">
            <div className="break-all line-clamp-1 text-lg font-bold">
              あなたのユーザー名
            </div>
            <div className="break-all line-clamp-1 text-muted-foreground text-sm">
              @userId
            </div>
          </div>
        </div>
      </Link>
      <Link href="/user/yourUserName">
        <UserMenuListTileCard text="プロフィールを表示" Icon={AiOutlineUser} />
      </Link>
      <Link href="/settings">
        <UserMenuListTileCard text="設定" Icon={AiOutlineSetting} />
      </Link>
      <UserMenuListTileCard
        text="サインアウト"
        Icon={AiOutlineLogout}
        onClick={() => {}}
      />
      <Separator />
      <UserMenuListTileCard
        text="アピアランス"
        Icon={MdOutlineLightbulb}
        onClick={() => {
          setAppearanceSelectOpen(true);
        }}
      />
      <Link href="/helpcentre" target="_blank">
        <UserMenuListTileCard
          text="ヘルプセンター"
          Icon={AiOutlineQuestionCircle}
        />
      </Link>
      <Link href="/feedback" target="_blank">
        <UserMenuListTileCard
          text="フィードバックを送信"
          Icon={MdOutlineFeedback}
        />
      </Link>
    </AnimatedDialogMenu>
  );
};

export default UserMenu;
