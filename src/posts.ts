import { makeDateLocalTime } from "./util";

export interface PostData {
  title: string;
  url: string;
  datePublished: Date;
  description: string;
  hide?: boolean;
}

export const POSTS: PostData[] = [
  {
    title: "No dumb questions: Why is math always right?",
    url: "formal-systems",
    datePublished: makeDateLocalTime(2024, 12, 23),
    description:
      "Math is often our source of truth. We use it to learn truths about the universe. But what do symbols on a page have to do with reality?",
  },
  {
    title: "Social media wasn't the final boss",
    url: "doomscrolling",
    datePublished: makeDateLocalTime(2025, 1, 22),
    description:
      "I used to think that quitting social media would solve all my problems, but turns out it's more nuanced. Who knew?",
  },
  {
    title: "No dumb questions: Are there unthinkable thoughts?",
    url: "unthinkable-thoughts",
    datePublished: makeDateLocalTime(2025, 2, 16),
    description:
      "Starfish will never do math. For that matter, monkeys aren't that great at it either. Are there limits to humans' capacity for thought?",
  },
  {
    title: "No dumb questions: What's the biggest number?",
    url: "biggest-number",
    datePublished: makeDateLocalTime(2025, 3, 5),
    description:
      "Is it a million? A billion? Infinity? Infinity plus one? We'll get to the bottom of it.",
  },
];

export const sortPosts = (posts: PostData[]) =>
  posts.sort(
    (postA, postB) =>
      postB.datePublished.valueOf() - postA.datePublished.valueOf()
  );
