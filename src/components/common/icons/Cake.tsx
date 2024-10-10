"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Cake = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <Image src="/icon/cake_dark.svg" width={32} height={32} alt="cake" />
    );
  }
  return <Image src="/icon/cake.svg" width={32} height={32} alt="cake" />;
};

export default Cake;
