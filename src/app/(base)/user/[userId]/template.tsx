import { MotionDiv } from "@/components/common/MotionDiv";

const variants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{
        type: "linear",
        duration: 0.3,
      }}
    >
      {children}
    </MotionDiv>
  );
}
