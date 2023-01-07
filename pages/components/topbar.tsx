import Image from "next/image";
import Link from "next/link";

import webring from "../../public/icons/webring.svg";
import creatorsgarten from "../../public/icons/ring-thin.svg";
import logo from "../../public/tinarskii.png";

export default function Topbar() {
  return (
    <>
      {/* Top bar elements */}
      <div className="flex w-full flex-row items-center justify-between gap-12">
        {/* Rings */}
        <div className="top-0 left-0 mx-0 flex flex-row items-center gap-4">
          <Link href="https://creatorsgarten.org/ring" className="max-w-[32px]">
            <Image
              src={creatorsgarten}
              alt="Creatorsgarten Ring"
              className="h-[32px] w-[32px]"
            />
          </Link>
          <Link
            href="https://webring.wonderful.software#tinarskii.com"
            className="max-w-[32px]"
          >
            <Image
              src={webring}
              alt="Webring.in.th Ring"
              className="h-[32px] w-[32px]"
            />
          </Link>
        </div>

        {/* Logo */}
        <div className="block">
          <Link href="/">
            <Image
              src={logo}
              alt="Tinarskii"
              className="ml-auto h-[44px] w-[320px] cursor-pointer invert"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
