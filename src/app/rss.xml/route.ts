import { POSTS, sortPosts } from "@/posts";
import RSS from "rss";

async function generateRssFeed() {
  const site_url = "https://worldsworstdetective.com";

  const feedOptions = {
    title: "World's Worst Dective",
    description: "???",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/detective.png`,
  };

  const feed = new RSS(feedOptions);

  sortPosts(POSTS).forEach((post) => {
    if (!post.hide) {
      feed.item({
        title: post.title,
        description: post.description,
        url: `${site_url}/${post.url}`,
        date: post.datePublished,
      });
    }
  });

  return feed;
}

export async function GET() {
  const rss = await generateRssFeed();
  const xml = rss.xml();
  const headers = new Headers();
  headers.append("Content-Type", "text/xml");
  return new Response(xml, { headers: headers });
}
