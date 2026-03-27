"use client";

import { useState } from "react";

import projects from "../../data/projects.json";
import systems from "../../data/systems.json";

export default function AdminPage() {
  const [type, setType] = useState("project");

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    tags: "",
    content: "", // 👈 NEW
  });

  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("type", type);

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    await fetch("/api/add-entry", {
      method: "POST",
      body: formData,
    });

    alert("Added 🚀");
    location.reload();
  };

  const handleDelete = async (slug: string, type: string) => {
    await fetch("/api/delete-entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, type }),
    });

    alert("Deleted ❌");
    location.reload();
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-xl mx-auto">

        <h1 className="text-3xl mb-6">Admin Panel</h1>

        {/* TYPE */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-4 p-2 bg-zinc-800"
        >
          <option value="project">Project</option>
          <option value="system">Digital System</option>
        </select>

        {/* FORM */}
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-3 p-2 bg-zinc-800"
        />

        <input
          name="location"
          onChange={handleChange}
          placeholder="Location (projects only)"
          className="w-full mb-3 p-2 bg-zinc-800"
        />

        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Short description"
          className="w-full mb-3 p-2 bg-zinc-800"
        />

        <input
          name="tags"
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="w-full mb-3 p-2 bg-zinc-800"
        />

        {/* 👇 NEW CONTENT FIELD */}
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Full write-up (separate paragraphs with a blank line)"
          className="w-full mb-4 p-2 bg-zinc-800 h-40"
        />

        {/* FILE UPLOAD */}
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="mb-4"
        />

        <button
          onClick={handleSubmit}
          className="bg-white text-black px-4 py-2 w-full mb-10"
        >
          Add Entry
        </button>

        {/* EXISTING */}
        <h2 className="text-xl mb-4">Existing Entries</h2>

        <div className="space-y-4">

          {/* PROJECTS */}
          <div>
            <h3 className="text-sm text-zinc-500 mb-2">Projects</h3>
            {projects.map((item: any) => (
              <div
                key={item.slug}
                className="flex justify-between items-center bg-zinc-900 p-3 rounded mb-2"
              >
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-zinc-500">{item.slug}</div>
                </div>

                <button
                  onClick={() => handleDelete(item.slug, "project")}
                  className="text-red-400 hover:text-red-200"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* SYSTEMS */}
          <div>
            <h3 className="text-sm text-zinc-500 mt-6 mb-2">Digital Systems</h3>
            {systems.map((item: any) => (
              <div
                key={item.slug}
                className="flex justify-between items-center bg-zinc-900 p-3 rounded mb-2"
              >
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-zinc-500">{item.slug}</div>
                </div>

                <button
                  onClick={() => handleDelete(item.slug, "system")}
                  className="text-red-400 hover:text-red-200"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
