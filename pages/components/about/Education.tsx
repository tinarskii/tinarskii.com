import {education} from "../../../data/data";

export default function Education({ data }: any) {
  if (!data?.education) return <p>Error</p>
  return (
    <section className="flex w-full flex-col gap-4">
      <header className="cursor-pointer text-center text-4xl lg:text-left">
        🎓Education
      </header>
      <div className="flex flex-row gap-6">
        {data.education.map((edu: any) => (
          <p key={edu.name}>
            <b>{edu.name}</b> ({edu.level}) <br />
            {edu.prog}, <br />
            GPAX: {edu.grade} <br />
            Graduate: {edu.grad || "TBD"} <br />
          </p>
        ))}
      </div>
    </section>
  );
}
