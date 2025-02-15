import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "md",
    `${(await params).slug}.md`
  );
  const content = await fs.readFile(filePath, "utf8");
  return Response.json({ contents: content });
}
