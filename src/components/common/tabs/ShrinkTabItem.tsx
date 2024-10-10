import { cn } from "@/lib/cn";
import Link from "next/link";

const ShrinkTabItem = ({
  title,
  isActive,
  path,
}: {
  title: string;
  isActive: boolean;
  path: string;
}) => {
  return (
    <Link
      href={path}
      className={cn(
        "hover_bg rounded-md p-3 flex flex-col gap-1 relative",
        isActive ? "font-semibold" : "text-muted-foreground"
      )}
    >
      <div className="break-words line-clamp-1">{title}</div>
      <div
        className={cn(
          "w-full h-[3px] rounded-md duration-300 ease-in-out absolute bottom-0 left-0 transition-colors",
          isActive && "bg-primary"
        )}
      />
    </Link>
  );
};

export default ShrinkTabItem;
