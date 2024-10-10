import { cn } from "@/lib/cn";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";

const AppearanceCard = ({
  text,
  Icon,
  onClick,
  isSelected,
}: {
  text: string;
  Icon: IconType;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isSelected?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 hover_bg rounded-md px-3 py-2.5 min-h-14",
        isSelected && "bg-accent"
      )}
    >
      <div>
        <div className="w-8 h-8 aspect-square flex items-center justify-center">
          <Icon size={20} />
        </div>
      </div>
      <div className="grow break-all line-clamp-1 font-semibold">{text}</div>
    </div>
  );
};

export default AppearanceCard;
