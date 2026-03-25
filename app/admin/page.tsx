"use client";

import { useState } from "react";

export default function AdminPage() {
  const [type, setType] = useState("project");

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    tags: "",
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
      formData.append(key, value);
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

    alert("Submitted 🚀");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-xl mx-auto">

        <h1 className="text-3xl mb-6">Admin Panel</h1>

        {/* TYPE SWITCH */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-4 p-2 bg-zinc-800"
        >
          <option value="project">Project</option>
          <option value="system">Digital System</option>
        </select>

        {/* INPUTS */}
        <input name="title" onChange={handleChange} placeholder="Title" className="w-full mb-3 p-2 bg-zinc-800" />
        <input name="location" onChange={handleChange} placeholder="Location" className="w-full mb-3 p-2 bg-zinc-800" />
        <input name="description" onChange={handleChange} placeholder="Description" className="w-full mb-3 p-2 bg-zinc-800" />
        <input name="tags" onChange={handleChange} placeholder="Tags (comma separated)" className="w-full mb-3 p-2 bg-zinc-800" />

        {/* FILE UPLOAD */}
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="mb-4"
        />

        <button
          onClick={handleSubmit}
          className="bg-white text-black px-4 py-2"
        >
          Submit
        </button>

      </div>

    </div>
  );
}
