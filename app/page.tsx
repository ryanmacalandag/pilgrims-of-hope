import HeroHome from "./_sections/HeroHome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full min-h-dvh relative flex flex-col justify-between">
      <HeroHome></HeroHome>

      <div className="flex-grow-0">
        <Image
          src='/bg/edge-mountains.svg'
          alt="mountains"
          width={1200}
          height={50}
          className="w-full"
        />
      </div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-300 via-transparent to-transparent"></div>
    </div>
  );
}
