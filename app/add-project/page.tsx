"use client";

import { useState } from "react";

export default function AddProjectPage() {
  const [form, setForm] = useState({
    title: "",
    client: "",
    location: "",
    description: "",
    challenge: "",
    solution: "",
    outcome: "",
    systems: "",
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

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    await fetch("/api/add-project", {
      method: "POST",
      body: formData,
    });

    alert("Project submitted!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl mb-6">Add Project</h1>

        <input name="title" onChange={handleChange} placeholder="Title" className="w-full mb-3 p-2 bg-zinc-800" />
        <input name="client" onChange={handleChange} placeholder="Client" className="w-full mb-3 p-2 bg-zinc-800" />
        <input name="location" onChange={handleChange} placeholder="Location" className="w-full mb-3 p-2 bg-zinc-800" />
        <input name="description" onChange={handleChange} placeholder="Description" className="w-full mb-3 p-2 bg-zinc-800" />

        <textarea name="challenge" onChange={handleChange} placeholder="Challenge" className="w-full mb-3 p-2 bg-zinc-800" />
        <textarea name="solution" onChange={handleChange} placeholder="Solution" className="w-full mb-3 p-2 bg-zinc-800" />
        <textarea name="outcome" onChange={handleChange} placeholder="Outcome" className="w-full mb-3 p-2 bg-zinc-800" />
        <textarea name="systems" onChange={handleChange} placeholder="Systems" className="w-full mb-3 p-2 bg-zinc-800" />

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
