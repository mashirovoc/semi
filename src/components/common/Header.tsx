"use client";

import useGlobalStateManagement from "@/lib/stores/useGlobalStateManagement";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoTimerOutline } from "react-icons/io5";

const Header = () => {
  const isSideBarOpen = useGlobalStateManagement(
    (state) => state.isSideBarOpen
  );
  const setSideBarOpen = useGlobalStateManagement(
    (state) => state.setSideBarOpen
  );
  const isUserMenuOpen = useGlobalStateManagement(
    (state) => state.isUserMenuOpen
  );
  const setUserMenuOpen = useGlobalStateManagement(
    (state) => state.setUserMenuOpen
  );
  return (
    <div className="header">
      <div className="flex justify-between items-center p-3 w-full h-full">
        <div className="flex flex-row items-center gap-3">
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSideBarOpen(!isSideBarOpen)}
            >
              <AiOutlineMenu size={24} />
            </Button>
          </div>
          <Link href="/">
            <Image
              src="https://placehold.jp/84x32.png"
              width={84}
              height={32}
              alt="logo"
              className="object-contain h-8"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Link href="/start">
            <Button variant="default" size="sm">
              <IoTimerOutline size={16} />
              <span className="ml-2">学習を開始</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setUserMenuOpen(!isUserMenuOpen)}
          >
            <Avatar>
              <AvatarImage
                src="https://pbs.twimg.com/media/GUc0091bQAAAE-8?format=jpg&name=large"
                alt="@userId"
                className="object-cover"
              />
              <AvatarFallback>Us</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
