"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "DimensionsGate",
    imageSrc: "/projects/dimmgate_top.webp",
    tech: "unity",
    description: "初めての共同制作。四次元立方体を探索して重力方向が変わりながら頂点を破壊するゲーム。",
  },
  {
    id: 2,
    title: "OpenDataGuide",
    imageSrc: "/projects/open.png",
    tech: "unity / puthon / gpt-4o",
    description: "ハッカソンで開発。ベクトル検索を用いてユーザの特性に基づいた情報を検索し提供してくれる。",
  },
  {
    id: 2,
    title: "MetaCMS",
    imageSrc: "/projects/title2.png",
    tech: "python / flask",
    description: "ブログ記事の作成と管理用のアプリ。",
  },
  {
    id: 2,
    title: "メタ創公式HP",
    imageSrc: "/projects/1.png",
    tech: "Next.js / vercel / typography",
    description: "ブログ機能付き公式ホームページ。Next.jsで実装。",
  },
  {
    id: 3,
    title: "nu.docs",
    imageSrc: "/projects/2.png",
    tech: "VitePress",
    description: "知識共有用＋環境構築も",
  },
  {
    id: 4,
    title: "タスク管理bot",
    imageSrc: "/projects/3.png",
    tech: "Python / gpt^4o / discord",
    description: "LLMを使って日付とタスクを自然言語から抽出してリストに管理するアプリです。",
  },
  {
    id: 5,
    title: "todoリスト",
    imageSrc: "/projects/4.png",
    tech: "html / css / javascript",
    description: "初めて作った簡単なwebアプリ。タスクを完了するとゆかりさんに褒めてもらえます",
  },
  {
    id: 6,
    title: "授業検索2025",
    imageSrc: "/projects/5.png",
    tech: "next.js / python",
    description: "大学公式の授業時間割表が超絶みずらかったため作成。",
  },
  {
    id: 7,
    title: "地下鉄fps",
    imageSrc: "/projects/6.png",
    tech: "unity / VRCSDK / C#",
    description: "監視カメラと開閉扉ギミックを追加して戦略性を増やした地下鉄が舞台のVRfpsゲーム。",
  },
];

export default function ProjectList() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">- 制作物一覧 -</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
