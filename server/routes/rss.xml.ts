import { serverQueryContent } from "#content/server";
import RSS from "rss";

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const feed = new RSS({
    title: "Website of Tinarskii",
    description: "My website obviously, duh.",
    site_url: "https://tinarskii.com",
    feed_url: "https://tinarskii.com/rss.xml",
  });
  const docs = await serverQueryContent(event).find();

  for (const doc of docs) {
    feed.item({
      title: doc.title || "Untitled",
      url: `https://tinarskii.com${doc._path}`,
      date: doc.date,
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.res.setHeader("Content-Type", "text/xml");
  event.res.end(feedString);

  return feedString;
});
