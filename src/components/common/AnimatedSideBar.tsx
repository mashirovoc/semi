"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../ui/button";
import { MotionDiv } from "./MotionDiv";

const AnimatedSideBar = ({
  isOpen,
  setOpen,
  children,
}: {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  children: ReactNode;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const pathname = usePathname();
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [pathname, setOpen]);

  useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down as unknown as EventListener);
    return () =>
      document.removeEventListener("keydown", down as unknown as EventListener);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="animated_sidebar_bg">
          <MotionDiv
            onClick={() => setOpen(false)}
            className="w-full h-full bg-black/60"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.3,
              },
            }}
          />
          <MotionDiv
            className="animated_sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ type: "liniear", duration: 0.3 }}
          >
            <div className="flex flex-row items-center gap-3 p-3 h-14">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <AiOutlineClose size={24} />
              </Button>
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
            {children}
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedSideBar;
