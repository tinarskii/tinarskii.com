import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authors } from "../../../data/data";
import Image from "next/image";

export default function Tag() {
  const router = useRouter();
  const [articles, setArticles] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    if (loading) {
      document.getElementById("loader")!.style.display = "flex";
    } else {
      document.getElementById("loader")!.style.display = "none";
    }

    fetch(`/api/tags?tag=${window.location.href.split("/").pop()}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  if (!articles?.length) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex w-full flex-col justify-center gap-6">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-left text-4xl md:text-left md:text-6xl">
          Tags &quot;{window.location.href.split("/").pop()}&quot;
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((item: any) => (
            <div
              onClick={() => router.push(`/articles/${item.slug}`)}
              key={item.data.id}
              className="item relative box-content flex h-full flex-none cursor-pointer snap-start"
            >
              <div
                className="relative flex h-96 w-full w-full flex-col gap-0 rounded-xl bg-black/40 bg-origin-border bg-blend-multiply"
                style={{
                  backgroundImage: `url(${item.data.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex h-full w-full flex-col items-center items-center justify-between gap-0 rounded-xl bg-black/75 p-4 duration-200 hover:bg-black/50">
                  <div className="flex flex-col items-center justify-center gap-12">
                    <h1 className="article-title text-center text-xl font-bold lg:text-2xl">
                      {item.data.title}
                    </h1>
                    <p className="lg:text-lg">
                      {item.data.description.length > 125
                        ? item.data.description.slice(0, 125) + "..."
                        : item.data.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 flex w-full flex-col gap-2">
                    {/* Date written */}
                    <div className="text-center">
                      <p className="article-title">⏰ {item.data.date}</p>
                    </div>
                    {/* User card */}
                    <div className="rounded-b-xl bg-black/75 p-4">
                      <div className="flex w-full flex-row items-center gap-4">
                        <Image
                          src={
                            authors[Number(item.data.author_id) - 1 || 0].img
                          }
                          alt="User avatar"
                          className="h-12 w-12 rounded-full"
                          width={48}
                          height={48}
                        />
                        <div className="flex flex-col gap-2">
                          <span className="text-sm font-bold">
                            {authors[Number(item.data.author_id) - 1 || 0].name}
                          </span>
                          <span className="text-xs">
                            {authors[Number(item.data.author_id) - 1 || 0].bio}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
