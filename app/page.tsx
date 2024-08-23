import Image from "next/image";
import SunUniverse from "public/sun-universe.png";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="mt-20 text-lg">
          SUN UNIVERSE ={">"} SUNIVERSE ={">"} SVERSE
        </div>
        <div className="mt-20 text-lg uppercase">
          Who controls the memes, controls the Universe.
        </div>
        <div className="mt-20 mx-auto my-3.5 rounded-[15px] text-[#fff8e3] bg-[#00b4d8] p-5 px-20 text-center font-black text-base relative">
          THE NEXT BIG MEME
        </div>
        {/* <Image className="mt-20" src={SunUniverse} alt={"x"} /> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">得meme者得宇宙。</p>&mdash; 孙宇晨🌞🇬🇩🇩🇲🔥 (@sunyuchentron) <a href="https://twitter.com/sunyuchentron/status/1826800948540572152?ref_src=twsrc%5Etfw">August 23, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Who controls the memes,<br>controls the Universe.</p>&mdash; H.E. Justin Sun 孙宇晨(hiring) (@justinsuntron) <a href="https://twitter.com/justinsuntron/status/1826658229096775871?ref_src=twsrc%5Etfw">August 22, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
          }}
        ></div>
      </main>
    </>
  );
}
