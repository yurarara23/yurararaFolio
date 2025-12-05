"use client";

import HeaderSection from "@/components/HeaderSection";
import ProjectList from "@/components/ProjectList";
import AboutMe from "@/components/AboutMe";
import NoteEmbed from "@/components/NoteEmbed";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeaderSection />
      <AboutMe />
      <NoteEmbed />
      <ProjectList />
    </main>
  );
}
