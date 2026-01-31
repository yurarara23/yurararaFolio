import ProfileSection from "@/components/ProfileSection";
import ProjectList from "@/components/ProjectList";
import AboutMe from "@/components/AboutMe";
import NoteEmbed from "@/components/NoteEmbed";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ProfileSection />
      <AboutMe />
      <NoteEmbed />
      <ProjectList />
    </main>
  );
}
