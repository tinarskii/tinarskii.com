import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as data from "../../data/data";
import Link from "next/link";
import Image from "next/image";
import * as showdown from "showdown";
import Meta from "../components/meta";

export default function Article() {
  const router = useRouter();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);
  const converter = new showdown.Converter();

  useEffect(() => {
    fetch(`/api/article?slug=${window.location.href.split("/").pop()}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article?.slug) {
    return <div>Article not found</div>;
  }
  return (
    <>
      <Meta
        title={article.data.title}
        description={article.data.description}
        image={article.data.img}
      />
      <main className="flex flex-col gap-12">
        {/* Article Big Image */}
        <div
          className="h-[65vh] w-full rounded-xl"
          style={{
            backgroundImage: `url(${article.data.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Article Title and Subtitles */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-12 rounded-xl bg-black/75 px-12 duration-200 hover:bg-black/50 lg:px-24">
            <h1 className="title">{article.data.title}</h1>
            <h2 className="subtitle">{article.data.description}</h2>
          </div>
        </div>

        {/* Article Container */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Article Data */}
          <div className="flex w-full flex-col gap-4">
            {/* Author */}
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-center text-4xl">Author</h1>
              <div
                className="flex flex-col items-center justify-center gap-4 rounded-lg border border-neutral-content/20 bg-neutral-content/10 p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-200/20 hover:shadow-xl"
                onClick={() =>
                  router.push(`/articles/author/${article.data.author_id}`)
                }
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                    src={data.authors[article.data.author_id - 1].img}
                    alt="User avatar"
                    className="h-24 w-24 rounded-full"
                    width={96}
                    height={96}
                  />
                  <span className="article-title text-center text-2xl font-bold">
                    {data.authors[article.data.author_id - 1].name}
                  </span>
                </div>
                <p className="text-center text-lg">
                  {data.authors[article.data.author_id - 1].bio}
                </p>
              </div>
            </div>

            <div className="divider hidden"></div>
            {/* Tags */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl">Tags</h1>
              <div className="flex flex-row flex-wrap gap-2">
                {article.data.tags.map((tag: string) => (
                  <div
                    className="flex flex-row items-center justify-center gap-2 rounded-xl bg-white/10 p-2"
                    key={tag}
                  >
                    <Link
                      href={`/articles/tags/${tag}`}
                      className="text-lg font-bold"
                    >
                      {tag}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* RSS */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl">RSS</h1>
              <div className="flex flex-row flex-wrap gap-2">
                <div className="flex flex-row items-center justify-center gap-2 rounded-xl bg-orange-500/10 p-2">
                  <a
                    href="/rss.xml"
                    className="text-lg font-bold text-orange-400"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="content col-span-3 flex flex-col gap-4"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(article.content),
            }}
          />
        </div>
      </main>
    </>
  );
}
