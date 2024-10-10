import { ReactNode } from "react";

const RouterTab = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-full flex gap-3 h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      {children}
    </div>
  );
};

export default RouterTab;
