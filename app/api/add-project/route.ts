import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;

    const slug = title
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

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

    // 🔴 IMPORTANT NOTE:
    // We are NOT saving files or JSON here because Vercel is read-only

    console.log("New Project Submitted:", newProject);

    return NextResponse.json({
      success: true,
      project: newProject,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
