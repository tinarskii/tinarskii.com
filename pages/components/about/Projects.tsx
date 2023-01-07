import Link from "next/link";

export default function Projects({ data }: any) {
  if (!data?.projects) return <p>Error</p>
  return (
    <section className="flex w-full flex-col gap-4">
      <header className="cursor-pointer text-center text-4xl lg:text-left">
        🧑‍💻Projects
      </header>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {data.projects.map((project: any) => (
          <section
            className={`rounded-xl bg-white/10 bg-center
        bg-no-repeat`}
            key={project.name}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-black/75 p-6 text-center">
              <p className="text-xl">
                <b>{project.name}</b> by {project.from}
              </p>
              {project.info}
              <div className="flex flex-row gap-2">
                <Link
                  href={'https://' + project.link}
                  className="btn-primary btn-sm btn"
                >
                  Visit Website
                </Link>
                <Link
                  href={'https://' + project.gh}
                  className="btn-ghost btn-sm btn"
                >
                  View Repository
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
