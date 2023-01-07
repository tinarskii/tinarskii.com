import algoliasearch from "algoliasearch/lite";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web";
import { useRouter } from "next/router";
import Image from "next/image";
import { authors } from "../../data/data";
import generateRssFeed from "../../scripts/generateRSS";
import Meta from "../components/meta";
import { useEffect } from "react";

const searchClient = algoliasearch(
  "2OSL992M2B",
  "de8d0a5488af034fc114248f4564c204"
);
const indexName = "new-index-1671618013";

function Hit({ hit }: any) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('loader');
      if (loader)
        loader.style.display = 'none';
    }
  }, []);

  return (
    <div
      onClick={() => router.replace(hit._path)}
      className="item relative box-content flex h-full flex-none cursor-pointer snap-start"
    >
      <div
        className="relative flex h-96 w-full flex-col gap-0 rounded-xl bg-black/40 bg-origin-border bg-blend-multiply"
        style={{
          backgroundImage: `url(${hit.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-between gap-0 rounded-xl bg-black/75 p-4 duration-200 hover:bg-black/50">
          <div className="flex flex-col items-center justify-center gap-12">
            <h1 className="article-title text-center text-xl font-bold lg:text-2xl">
              {hit.title}
            </h1>
            <p className="lg:text-lg">
              {hit.description.length > 100
                ? hit.description.slice(0, 97) + "..."
                : hit.description}
            </p>
          </div>
          <div className="absolute bottom-0 right-0 flex w-full flex-col gap-2">
            {/* Date written */}
            <div className="text-center">
              <p className="article-title">⏰ {hit.date}</p>
            </div>
            {/* User card */}
            <div className="rounded-b-xl bg-black/75 p-4">
              <div className="flex w-full flex-row items-center gap-4">
                <Image
                  src={authors[Number(hit.author_id) - 1 || 0].img}
                  alt="User avatar"
                  className="h-12 w-12 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold">
                    {authors[Number(hit.author_id) - 1 || 0].name}
                  </span>
                  <span className="text-xs">
                    {authors[Number(hit.author_id) - 1 || 0].bio}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Articles() {
  return (
    <>
      <Meta
        title="Articles"
        description="Read more about my thoughts and ideas on various topics."
        image="https://tinarskii.com/banner2023.png"
      />
      <div className="flex w-full flex-col justify-center gap-6">
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-left text-4xl md:text-left md:text-6xl">
            Browse articles
          </h1>
          <InstantSearch indexName={indexName} searchClient={searchClient}>
            <div className="flex w-full flex-row items-center">
              <SearchBox />
            </div>
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  await generateRssFeed();

  return { props: {} };
}
