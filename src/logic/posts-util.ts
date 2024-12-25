import formalSystems from "./../posts/formalSystems.json?raw";

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
    datePublished: new Date("2024-12-23"),
  },
];
