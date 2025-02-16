import {
  Alegreya,
  Bree_Serif,
  JetBrains_Mono,
  Roboto,
  Xanh_Mono,
} from "next/font/google";

export const bodyFont = Alegreya({
  subsets: ["latin"],
  weight: ["400"],
});

export const titleFont = Xanh_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const monospaceFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const serifFont = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const sansSerif = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
