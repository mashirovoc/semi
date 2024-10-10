import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { KeyboardEvent, ReactNode, useEffect } from "react";
import { MotionDiv } from "./MotionDiv";

const AnimatedDialogMenu = ({
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
        <MotionDiv
          onClick={() => setOpen(false)}
          className="animated_dialog_bg"
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
        >
          <MotionDiv
            onClick={(e) => e.stopPropagation()}
            className="animated_dialog"
            initial={{
              y: "50%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 0.3,
              },
            }}
            exit={{
              y: "50%",
              opacity: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.3,
              },
            }}
          >
            {children}
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default AnimatedDialogMenu;
