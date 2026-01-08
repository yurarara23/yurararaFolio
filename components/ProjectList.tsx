"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "DimensionsGate",
    imageSrc: "/projects/dimmgate_top.webp",
    tech: "unity",
    description:
      "初めての共同制作。四次元立方体を探索して重力方向が変わりながら頂点を破壊するゲーム。",
    url: "https://vrchat.com/home/world/wrld_d84a41e8-fd6a-4167-bc90-637af6fc3c41/info",
  },
  {
    id: 2,
    title: "OpenDataGuide",
    imageSrc: "/projects/open.png",
    tech: "unity / python / gpt-4o",
    description:
      "ハッカソンで開発。ベクトル検索を用いてユーザの特性に基づいた情報を検索し提供してくれる。",
    url: "https://odhackathon.metro.tokyo.lg.jp/collection/51/?year=2025",
  },
  {
    id: 3,
    title: "ポートフォリオ2026",
    imageSrc: "/projects/portfolio.png",
    tech: "python / flask",
    description: "ポートフォリオサイト",
    url: "https://nu-meta.vercel.app/blog/metacms_article",
  },
  {
    id: 4,
    title: "MetaCMS",
    imageSrc: "/projects/title2.png",
    tech: "python / flask",
    description: "非エンジニア向けブログ記事の作成管理アプリ。",
    url: "https://nu-meta.vercel.app/blog/metacms_article",
  },
  {
    id: 5,
    title: "メタ創公式HP",
    imageSrc: "/projects/1.png",
    tech: "Next.js / vercel / typography",
    description: "ブログ機能付き公式ホームページ。",
    url: "https://nu-meta.vercel.app/",
  },
  {
    id: 6,
    title: "部内ドキュメント",
    imageSrc: "/projects/2.png",
    tech: "VitePress",
    description: "知識共有用＋環境構築も",
    url: "https://yurarara23.github.io/nu.docs2.1/",
  },
  {
    id: 7,
    title: "タスク管理bot",
    imageSrc: "/projects/3.png",
    tech: "Python / gpt-4o / discord",
    description:
      "LLMを使って日付とタスクを自然言語から抽出してリストに管理するアプリです。",
    url: "", // まだURLなしなら空 or undefined
  },
  {
    id: 8,
    title: "todoリスト",
    imageSrc: "/projects/4.png",
    tech: "html / css / javascript",
    description:
      "初めて作った簡単なwebアプリ。タスクを完了するとゆかりさんに褒めてもらえます。",
    url: "https://yukari-to-do.vercel.app/",
  },
  {
    id: 9,
    title: "授業検索2025",
    imageSrc: "/projects/5.png",
    tech: "next.js / python",
    description:
      "大学公式の授業時間割表が超絶みずらかったため作成。(現在閉鎖中)",
    url: "", // URLなし
  },
  {
    id: 10,
    title: "地下鉄fps",
    imageSrc: "/projects/6.png",
    tech: "unity / VRCSDK / C#",
    description:
      "監視カメラと開閉扉ギミックを追加して戦略性を増やした地下鉄が舞台のVRfpsゲーム。",
    url: "", // URLなし
  },
];

export default function ProjectList() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Project</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
