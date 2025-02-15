import { makeDateLocalTime } from "./util";

export interface PostData {
  title: string;
  url: string;
  datePublished: Date;
  hide?: boolean;
}

export const POSTS: PostData[] = [
  {
    title: "No dumb questions: Why is math always right?",
    url: "formal-systems",
    datePublished: makeDateLocalTime(2024, 12, 23),
  },
  {
    title: "Social media wasn't the final boss",
    url: "doomscrolling",
    datePublished: makeDateLocalTime(2025, 1, 22),
  },
  {
    title: "No dumb questions: Are there unthinkable thoughts?",
    url: "unthinkable-thoughts",
    datePublished: makeDateLocalTime(2025, 1, 27),
    hide: true,
  },
];
