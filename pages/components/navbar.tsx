import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/me",
    },
    {
      name: "Articles",
      path: "/articles",
    },
  ];

  return (
    <div className="flex w-full flex-row gap-2 rounded-lg bg-gray-400/25 p-2">
      {links.map((link) => (
        <button
          onClick={() => router.replace(link.path)}
          key={link.name}
          className={
            router.pathname === link.path ? "nav-btn--active" : "nav-btn"
          }
        >
          {link.name}
        </button>
      ))}
    </div>
  );
}
