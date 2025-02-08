import formalSystems from "./../posts/formalSystems.json?raw";
import dolphins from "./../posts/dolphins.json?raw";
import unthinkable from "./../posts/unthinkable.json?raw";
import { makeDateLocalTime } from "./util";

export interface PostData {
  content: string;
  title: string;
  url: string;
  datePublished: Date;
  hide?: boolean;
}

export const POSTS: PostData[] = [
  {
    content: formalSystems,
    title: "Why is math always right?",
    url: "formal-systems",
    datePublished: makeDateLocalTime(2024, 12, 23),
  },
  {
    content: dolphins,
    title: "Social media wasn't the final boss",
    url: "doomscrolling",
    datePublished: makeDateLocalTime(2025, 1, 22),
  },
  {
    content: unthinkable,
    title: "Thinking about unthinkable thoughts",
    url: "unthinkable-thoughts",
    datePublished: makeDateLocalTime(2025, 1, 27),
    hide: true,
  },
];
