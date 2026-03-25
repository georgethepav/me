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

    console.log("NEW ENTRY:", entry);

    return NextResponse.json({ success: true, entry });

  } catch (err) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
