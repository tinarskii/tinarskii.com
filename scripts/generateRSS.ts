import RSS from "rss";
import { getArticles } from "./utils";
import fs from "fs";

export default async function generateRssFeed() {
  const articles = getArticles().sort((a, b) => {
    return Number(new Date(b?.data.date)) - Number(new Date(a?.data.date));
  });
  const site_url = "https://tinarskii.com";

  const feedOptions = {
    title: "Website of Tinarskii",
    description: "uwu welcom to my site (*/ω＼*)",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `Copyright © ${new Date().getFullYear()} Tinarskii, All Rights Reserved`,
  };

  const feed = new RSS(feedOptions);

  articles.forEach((article) => {
    feed.item({
      title: article!.data.title || "Untitled",
      url: `https://tinarskii.com/articles/${article!.data.slug}`,
      date: article!.data.date,
      description: article!.data.description,
    });
  });

  const feedString = feed.xml({ indent: true });
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
