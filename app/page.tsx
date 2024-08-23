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
        <Image className="mt-20" src={SunUniverse} alt={"x"} />
      </main>
    </>
  );
}
