import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    // Create folder
    const folderPath = path.join(
      process.cwd(),
      "public",
      "projects",
      slug
    );

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Get images
    const images = formData.getAll("images") as File[];

    const imageNames = ["hero", "plan", "detail"];

    for (let i = 0; i < images.length && i < imageNames.length; i++) {
      const file = images[i];
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      fs.writeFileSync(
        path.join(folderPath, `${imageNames[i]}.jpg`),
        buffer
      );
    }

    // Build project
    const newProject = {
      title,
      slug,
      client: formData.get("client"),
      location: formData.get("location"),
      description: formData.get("description"),
      challenge: formData.get("challenge"),
      solution: formData.get("solution"),
      outcome: formData.get("outcome"),
      systems: formData.get("systems"),
      images: [
        `/projects/${slug}/hero.jpg`,
        `/projects/${slug}/plan.jpg`,
        `/projects/${slug}/detail.jpg`,
      ],
    };

    // Save JSON
    const jsonPath = path.join(process.cwd(), "data", "projects.json");

    let existing = [];

    if (fs.existsSync(jsonPath)) {
      existing = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    }

    existing.push(newProject);

    fs.writeFileSync(jsonPath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}