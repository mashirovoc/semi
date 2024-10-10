import { ThemeProvider } from "@/components/common/theme-provider";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

const mPlusRounded1C = M_PLUS_Rounded_1c({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Test学習アプリ",
    default: "Test学習アプリ",
  },
  description: "学習環境に関する実験用アプリです",
  robots: {
    googleBot: {
      index: false,
    },
  },
  other: {
    robots: "noai, noimageai, nofollow, noindex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#f43f5e" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          mPlusRounded1C.variable,
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
