import Image from "next/image";
import banner from "../public/tinarskii-banner.jpg";
import Meta from "./components/meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        description="Dive into my world, it starts at here..."
        image="https://tinarskii.com/banner2023.png"
      />
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
