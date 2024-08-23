import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Logo from "public/suniverse.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUNIVERSE",
  description: "WHO CONTROLS THE MEMES, CONTROLS THE UNIVERSE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="flex">
            {/* <Image className="w-10" src={Logo} alt="logo" /> */}
            {/* <Logo className="w-6 h-6" /> */}
            <span>SUNIVERSE</span>
          </div>
          <nav>
            <a href="#">Home</a>
            <a
              href="https://sunpump.meme/token/TGrJrtdwFgTfiZ13xAat9N5wRebWdcb6nW"
              target="_blank"
            >
              Buy
            </a>
            <a href="https://x.com/universe_tron" target="_blank">
              Twitter
            </a>
            <a href="https://t.me/universe_tron" target="_blank">
              Telegram
            </a>
          </nav>
          <div className="cursor-pointer">CONNECT WALLET</div>
        </header>
        {children}
      </body>
    </html>
  );
}
