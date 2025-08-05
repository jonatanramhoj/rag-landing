"use client";
import { useState } from "react";
import Image from "next/image";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert(
      `Thank you ${formData.name}! We'll send course updates to ${formData.email}`
    );
    setFormData({
      name: "",
      email: "",
    });
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="flex-1 bg-white flex items-center justify-center px-8 py-16 lg:py-24">
        <div className="max-w-lg w-full">
          <p className="text-sm lg:text-base text-neutral-500 mb-2 uppercase tracking-wide font-medium">
            crash course
          </p>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-6 leading-none">
            Learn how to build a RAG Chat Bot Agent
          </h1>

          <p className="text-xl lg:text-2xl text-neutral-500 mb-8 leading-relaxed">
            Get hands-on with Genkit and launch your first RAG app fast.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
            Here is what you{"'"}ll learn:
          </h2>

          <ul className="space-y-4 text-lg text-neutral-900 mb-8 list-disc list-inside">
            <li>RAG use cases and why demand is exploding</li>
            <li>How to set up Genkit, Gemini, and Next.js from scratch</li>
            <li>How to build a custom chat UI with React and Tailwind</li>
            <li>How to embed your own data and store it in Firestore</li>
            <li>How to build and deploy a full RAG flow using Genkit</li>
            <li>
              How to secure, ship, and monitor your RAG agent in production
            </li>
          </ul>

          <p className="text-xl font-semibold text-neutral-900">
            Signup now and get ahead of the curve in modern AI engineering!
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 bg-gradient-to-br from-[#8B6EFE] to-[#B77CFF] flex items-center justify-center px-8 py-16 lg:py-24">
        <div className="max-w-md w-full text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <Image
              width={160}
              height={160}
              src="/thumb-circle.png"
              alt="Jonatan Ramhöj"
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>

          <p className="text-white/90 text-lg mb-2">
            Course instructor{" "}
            <span className="font-semibold">Jonatan Ramhöj</span>
          </p>

          <p className="text-white/70 text-sm mb-8">
            UI/AI engineer — Ex. Lufthansa
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get early access
          </h2>

          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Signup now for course previews, free lessons, and early access
            perks.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="p-2 rounded-md bg-white/95 border border-white/30 text-neutral-900 placeholder:text-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="p-2 rounded-md bg-white/95 border border-white/30 text-neutral-900 placeholder:text-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />

            <button
              type="submit"
              className="rounded-md w-full bg-amber-400 text-black hover:bg-amber-300 font-semibold py-3 text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Signup now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
