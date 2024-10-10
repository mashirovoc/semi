"use client";

import { Button } from "@/components/ui/button";
import useGlobalStateManagement from "@/lib/stores/useGlobalStateManagement";
import { useTheme } from "next-themes";
import {
  AiOutlineArrowLeft,
  AiOutlineBulb,
  AiOutlineDesktop,
  AiOutlineMoon,
} from "react-icons/ai";
import AnimatedDialogMenu from "../AnimatedDialogMenu";
import AppearanceCard from "../cards/AppearanceCard";

const AppearanceSelect = () => {
  const isAppearanceSelectOpen = useGlobalStateManagement(
    (state) => state.isAppearanceSelectOpen
  );
  const setAppearanceSelectOpen = useGlobalStateManagement(
    (state) => state.setAppearanceSelectOpen
  );
  const { theme, setTheme } = useTheme();

  return (
    <AnimatedDialogMenu
      isOpen={isAppearanceSelectOpen}
      setOpen={setAppearanceSelectOpen}
    >
      <div className="flex items-center gap-3 p-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setAppearanceSelectOpen(false)}
        >
          <AiOutlineArrowLeft size={24} />
        </Button>
        <div className="text-lg font-bold">アピアランス</div>
      </div>
      <AppearanceCard
        text="ライト"
        Icon={AiOutlineBulb}
        onClick={() => {
          setTheme("light");
          setAppearanceSelectOpen(false);
        }}
        isSelected={theme === "light"}
      />
      <AppearanceCard
        text="ダーク"
        Icon={AiOutlineMoon}
        onClick={() => {
          setTheme("dark");
          setAppearanceSelectOpen(false);
        }}
        isSelected={theme === "dark"}
      />
      <AppearanceCard
        text="システム"
        Icon={AiOutlineDesktop}
        onClick={() => {
          setTheme("system");
          setAppearanceSelectOpen(false);
        }}
        isSelected={theme === "system"}
      />
    </AnimatedDialogMenu>
  );
};

export default AppearanceSelect;
