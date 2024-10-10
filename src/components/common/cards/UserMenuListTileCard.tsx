import { Button } from "@/components/ui/button";
import useGlobalStateManagement from "@/lib/stores/useGlobalStateManagement";
import { MouseEventHandler } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { IconType } from "react-icons/lib";

const UserMenuListTileCard = ({
  text,
  Icon,
  onClick,
}: {
  text: string;
  Icon: IconType;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  const setOpen = useGlobalStateManagement((state) => state.setUserMenuOpen);
  return (
    <div
      onClick={(e) => {
        setOpen(false);
        if (onClick) {
          onClick(e);
        }
      }}
      className="flex items-center gap-3 hover_bg rounded-md px-3 py-2.5 min-h-14"
    >
      <div>
        <div className="w-8 h-8 aspect-square flex items-center justify-center">
          <Icon size={20} />
        </div>
      </div>
      <div className="grow break-all line-clamp-1 font-semibold">{text}</div>
      {onClick && (
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-muted-foreground/80"
        >
          <AiOutlineRight size={16} />
        </Button>
      )}
    </div>
  );
};

export default UserMenuListTileCard;
