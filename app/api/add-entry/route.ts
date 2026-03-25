import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const type = formData.get("type");
    const title = formData.get("title") as string;

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const files = formData.getAll("images") as File[];

    const imageUrls: string[] = [];

    // 📸 UPLOAD TO CLOUDINARY
    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: `${type}s/${slug}`,
            },
            (err, result) => {
              if (err) reject(err);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      imageUrls.push(upload.secure_url);
    }

    const entry = {
      title,
      slug,
      description: formData.get("description"),
      location: formData.get("location"),
      tags: (formData.get("tags") as string)?.split(","),
      images: imageUrls,
    };

    // --- GITHUB UPDATE ---
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    const filePath =
      type === "project"
        ? "data/projects.json"
        : "data/systems.json";

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

    content.push(entry);

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
