import Image from "next/image";
import * as data from "../data/data";

import nsm from "../public/cover.jpg";
import InfoAndConnect from "./components/about/InfoAndConnect";
import Education from "./components/about/Education";
import Events from "./components/about/Events";
import Projects from "./components/about/Projects";
import TechAndInterests from "./components/about/TechAndInterests";
import Meta from "./components/meta";

export default function About() {
  return (
    <>
      <Meta
        title="About"
        description="Let's get to know each other..."
        image="https://tinarskii.com/banner2023.png"
      />
      {/* Big Image */}
      <div className="flex w-full cursor-pointer flex-row">
        <Image
          src={nsm}
          alt="Tin at National Science Museum"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      {/* Title & Subtitle */}
      <section className="flex flex-col items-center gap-2">
        <h1 className="text-center text-5xl md:text-6xl">
          {data.about.name.split(" ")[0]} &quot;{data.about.nick}&quot;{" "}
          {data.about.name.split(" ")[1]}
        </h1>
        <h2 className="text-center text-xl italic text-gray-500 md:text-2xl">
          ({data.about.aka})
        </h2>
      </section>

      {/* About */}
      <article className="text-left text-lg">{data.about.desc}</article>

      {/* Info and Connect */}
      <InfoAndConnect data={data} />

      {/* Education Information */}
      <Education data={data} />

      {/* Events */}
      <Events data={data} />

      {/* Projects */}
      <Projects data={data} />

      {/* Tech and Interests */}
      <TechAndInterests data={data} />
    </>
  );
}
