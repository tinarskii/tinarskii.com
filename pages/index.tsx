import Image from "next/image";
import banner from "../public/tinarskii-banner.jpg";

export default function Home() {
  return (
    <>
      <a rel="me" href="https://mastodon.in.th/@tin"></a>
      <div className="flex w-full cursor-pointer flex-row">
        <Image
          src={banner}
          alt="Tinarskii's banner"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </>
  );
}
