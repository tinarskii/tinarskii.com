import Link from "next/link";

export default function Events({ data }: any) {
  if (!data?.events) return <p>Error</p>;
  return (
    <section className="flex w-full flex-col gap-4">
      <header className="cursor-pointer text-center text-4xl lg:text-left">
        ✨Events
      </header>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {data.events.map((evt: any) => (
          <section
            className="rounded-lg bg-white/10 bg-center"
            style={{ backgroundImage: `url(${evt.img})` }}
            key={evt.name}
          >
            <div className="flex h-full w-full flex-col justify-center gap-4 rounded-lg bg-black/75 p-6">
              <div className="flex flex-col items-center justify-center">
                <p className="text-xl">
                  <b>{evt.name}</b>
                </p>
                <p>(Organized by {evt.org})</p>
              </div>
              <p>as a {evt.roles}</p>
              <p>{evt.info}</p>
              <div className="flex flex-col items-center justify-center">
                {evt.award && <p>Awards: {evt.award}</p>}
                {evt.links && (
                  <p>
                    Links:
                    <Link href={evt.links} className="underline">
                      Watch
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
