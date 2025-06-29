// app/page.tsx

"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヘッダーセクション */}
      <section className="text-white py-20 text-center bg-[url('/1.png')] bg-cover bg-center">
        <div className="flex flex-col items-center">
          <Image
            src="/yurarara.png"
            alt="プロフィール画像"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4">yurarara</h1>
          <p className="mt-2">学生 / Web開発 / VRC用ギミック制作 /etc..</p>
          <div className="flex gap-2 flex-wrap justify-center mt-4">
            {["Next.js", "C#" ,"Python"].map((tech) => (
              <span
                key={tech}
                className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-medium shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 作品一覧セクション */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">制作物一覧</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "メタ創公式HP",
              imageSrc: "/projects/1.png",
              tech: "Next.js / vercel / typography",
              description: "ブログ機能付き公式ホームページ。Next.jsで実装。",
            },
            {
              id: 2,
              title: "nu.docs",
              imageSrc: "/projects/2.png",
              tech: "VitePress",
              description: "知識共有用＋環境構築も",
            },
            {
              id: 3,
              title: "タスク管理bot",
              imageSrc: "/projects/3.png",
              tech: "Python / gpt4o / discord",
              description: "LLMを使って日付とタスクを自然言語から抽出してリストに管理するアプリです。",
            },
            {
              id: 4,
              title: "todoリスト",
              imageSrc: "/projects/4.png",
              tech: "html / css / javascript",
              description: "初めて作った簡単なwebアプリ。タスクを完了するとゆかりさんに褒めてもらえます",
            },
            {
              id: 5,
              title: "授業検索2025",
              imageSrc: "/projects/5.png",
              tech: "next.js / python",
              description: "大学公式の授業時間割表が超絶みずらかったため作成。大学公式の時間割.csvをpythonを使ってスクレイピング。",
            },
            {
              id: 6,
              title: "地下鉄fps",
              imageSrc: "/projects/6.png",
              tech: "unity / VRCSDK / C#",
              description: "監視カメラと開閉扉ギミックを追加して戦略性を増やした地下鉄が舞台のVRfpsゲーム。",
            },
          ].map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
