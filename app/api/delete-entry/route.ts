import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug, type } = await req.json();

    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    const filePath =
      type === "project"
        ? "data/projects.json"
        : "data/systems.json";

    // 1. GET CURRENT FILE
    const getRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    const fileData = await getRes.json();

    const content = JSON.parse(
      Buffer.from(fileData.content, "base64").toString()
    );

    // 2. FILTER OUT ENTRY
    const updated = content.filter((item: any) => item.slug !== slug);

    // 3. PUSH UPDATE
    await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Delete ${type}: ${slug}`,
          content: Buffer.from(JSON.stringify(updated, null, 2)).toString("base64"),
          sha: fileData.sha,
        }),
      }
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
