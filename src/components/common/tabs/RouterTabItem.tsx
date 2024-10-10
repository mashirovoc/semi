"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const RouterTabTrigger = ({
  href,
  children,
}: {
  href: string;
  children?: ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "w-full flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium transition-all ease-in-out duration-300",
        pathname == href && "bg-background text-foreground"
      )}
    >
      {children}
    </Link>
  );
};

export default RouterTabTrigger;
