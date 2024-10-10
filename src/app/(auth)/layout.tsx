import Image from "next/image";
import { ReactNode } from "react";

const layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-6 flex flex-col items-center gap-1">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/icon-512x512.png"
            alt="Brand Logo"
            width="512"
            height="512"
            className="object-cover"
          />
        </div>
        <div className="text-2xl font-bold">Test学習アプリ</div>
      </div>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

export default layout;
