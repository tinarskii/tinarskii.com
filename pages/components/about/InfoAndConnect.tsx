import Link from "next/link";

export default function InfoAndConnect({ data }: any) {
  if (!data?.about) return <p>Error</p>
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Personal Information */}
      <section className="flex w-full flex-col gap-4">
        <header
          id="info"
          className="cursor-pointer text-center text-4xl lg:text-left"
        >
          <a href="#info">🎈Personal Information</a>
        </header>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 items-center gap-6">
            <p>
              <b>Name</b>
            </p>
            <p>{data.about.name}</p>
            <p>
              <b>Nickname</b>
            </p>
            <p>{data.about.nick}</p>
            <p>
              <b>Also Known As</b>
            </p>
            <p>{data.about.aka}</p>
            <p>
              <b>Date of Birth</b>
            </p>
            <p>{new Date(data.about.dob).toLocaleDateString("ja-JP")}</p>
            <p>
              <b>Age</b>
            </p>
            <p>{data.about.age}</p>
            <p>
              <b>Occupations</b>
            </p>
            <p>{data.about.jobs}</p>
            <p>
              <b>Languages</b>
            </p>
            <p>{data.about.language}</p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="flex w-full flex-col gap-4">
        <header
          id="connect"
          className="cursor-pointer text-center text-4xl lg:text-left"
        >
          <a href="#connect">📱Social Media</a>
        </header>
        <div className="lg:gris-cols-2 grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 items-center gap-6">
            {data.contact.map((l: any, idx: number) => {
              if (idx % 2 === 0) {
                return (
                  <p key={idx}>
                    <b>{data.contact[idx]}</b>
                  </p>
                );
              }

              return (
                <Link href={data.contact[idx]} key={idx + 1}>
                  {data.contact[idx]?.split("/").pop()}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
