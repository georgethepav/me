import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";

// IMPORTANT for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: any) {
  const form = formidable({ multiples: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) {
        console.error(err);
        return reject(err);
      }

      try {
        // 🔹 Basic data
        const title = fields.title?.[0] || "Untitled Project";
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        // 🔹 Create project folder
        const folderPath = path.join(
          process.cwd(),
          "public",
          "projects",
          slug
        );

        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        // 🔹 Save images
        const imageNames = ["hero", "plan", "detail"];

        if (files.images) {
          const uploadedFiles = Array.isArray(files.images)
            ? files.images
            : [files.images];

          uploadedFiles.forEach((file: any, i: number) => {
            if (i < imageNames.length) {
              const data = fs.readFileSync(file.filepath);
              const filePath = path.join(
                folderPath,
                `${imageNames[i]}.jpg`
              );
              fs.writeFileSync(filePath, data);
            }
          });
        }

        // 🔹 Build project object
        const newProject = {
          title,
          slug,
          client: fields.client?.[0] || "",
          location: fields.location?.[0] || "",
          description: fields.description?.[0] || "",
          challenge: fields.challenge?.[0] || "",
          solution: fields.solution?.[0] || "",
          outcome: fields.outcome?.[0] || "",
          systems: fields.systems?.[0] || "",
          images: [
            `/projects/${slug}/hero.jpg`,
            `/projects/${slug}/plan.jpg`,
            `/projects/${slug}/detail.jpg`,
          ],
        };

        // 🔹 Save to JSON
        const jsonPath = path.join(process.cwd(), "data", "projects.json");

        let existing = [];

        if (fs.existsSync(jsonPath)) {
          existing = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
        }

        existing.push(newProject);

        fs.writeFileSync(jsonPath, JSON.stringify(existing, null, 2));

        // 🔹 Success response
        resolve(
          NextResponse.json({
            success: true,
            message: "Project created successfully",
          })
        );
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  });
}