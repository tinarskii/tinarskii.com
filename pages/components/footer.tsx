import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full items-center justify-center">
      <p className="text-center text-gray-400">
        Copyright © 2023 Tinnaphat Somsang <br />
        All rights reserved.{" "}
        <Link
          href="https://github.com/t1narskii/nuxt-tinarskii.com"
          className="underline"
        >
          View source
        </Link>
      </p>
    </div>
  );
}
