import biggestNumber from "@/data/json/biggest-number";
import doomscrolling from "@/data/json/doomscrolling";
import formalSystems from "@/data/json/formal-systems";
import unthinkableThoughts from "@/data/json/unthinkable-thoughts";
import { Parent } from "mdast";

const JSON_DATA: { [k: string]: Parent } = {
  "biggest-number": biggestNumber,
  doomscrolling: doomscrolling,
  "formal-systems": formalSystems,
  "unthinkable-thoughts": unthinkableThoughts,
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  if (slug in JSON_DATA) {
    const content = JSON_DATA[slug];
    return Response.json({ contents: content });
  } else {
    return Response.error();
  }
}
