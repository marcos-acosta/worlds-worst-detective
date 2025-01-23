import formalSystems from "./../posts/formalSystems.json?raw";
import dolphins from "./../posts/dolphins.json?raw";
import { makeDateLocalTime } from "./util";

export interface PostData {
  content: string;
  title: string;
  url: string;
  datePublished: Date;
}

export const POSTS: PostData[] = [
  {
    content: formalSystems,
    title: "Mechanized reasoning: What are formal systems?",
    url: "formal-systems",
    datePublished: makeDateLocalTime(2024, 12, 23),
  },
  {
    content: dolphins,
    title: "Social media wasn't the final boss",
    url: "doomscrolling",
    datePublished: makeDateLocalTime(2025, 1, 22),
  },
];
