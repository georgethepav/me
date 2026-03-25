import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const type = formData.get("type"); // project or system
    const title = formData.get("title") as string;

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const entry = {
      title,
      slug,
      description: formData.get("description"),
      location: formData.get("location"),
      tags: (formData.get("tags") as string)?.split(","),
      images: [
        `/${type}s/${slug}/1.jpg`,
        `/${type}s/${slug}/2.jpg`,
        `/${type}s/${slug}/3.jpg`,
      ],
    };

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

    // 2. ADD NEW ENTRY
    content.push(entry);

    // 3. UPDATE FILE
    await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Add ${type}: ${title}`,
          content: Buffer.from(JSON.stringify(content, null, 2)).toString("base64"),
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
