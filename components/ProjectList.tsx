import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "DimensionsGate",
    imageSrc: "/projects/dimmgate_top.webp",
    tech: "Unity / C# / Udon#",
    description:
      "共同制作。四次元立方体を探索して重力方向が変わりながら頂点を破壊するゲーム。",
    url: "https://vrchat.com/home/world/wrld_d84a41e8-fd6a-4167-bc90-637af6fc3c41/info",
  },
  {
    id: 2,
    title: "OpenDataGuide",
    imageSrc: "/projects/open.png",
    tech: "Unity / C# / python / Gpt-4o",
    description:
      "3Dキャラクターとの対話を通してユーザの特性に基づいた情報を検索し提供してくれるシステム。",
    url: "https://youtu.be/WO0VWKqUi0s",
  },
  {
    id: 3,
    title: "ポートフォリオサイト",
    imageSrc: "/projects/portfolio.png",
    tech: "Next.js / TypeScript",
    description: "ポートフォリオサイト",
    url: "https://nu-meta.vercel.app/blog/metacms_article",
  },
  {
    id: 4,
    title: "MetaCMS",
    imageSrc: "/projects/title2.png",
    tech: "Python / Flask",
    description: "ブログ記事の作成管理アプリ。",
    url: "https://nu-meta.vercel.app/blog/metacms_article",
  },
  {
    id: 5,
    title: "メタ創公式ホームページ",
    imageSrc: "/projects/1.png",
    tech: "Next.js / TypeScript",
    description: "ブログ機能付き公式ホームページ。",
    url: "https://nu-meta.vercel.app/",
  },
  {
    id: 6,
    title: "部内ドキュメント",
    imageSrc: "/projects/2.png",
    tech: "VitePress",
    description: "部内の知識共有用＋環境構築用。",
    url: "https://yurarara23.github.io/nu.docs2.1/",
  },
  {
    id: 7,
    title: "タスク管理bot",
    imageSrc: "/projects/3.png",
    tech: "Python / Gpt-4o / Discord",
    description:
      "GPTAPIを使った日付とタスクを文から抽出してリストに管理するDiscordBot。",
    url: "",
  },
  {
    id: 8,
    title: "todoリスト",
    imageSrc: "/projects/4.png",
    tech: "HTML / CSS / JavaScript",
    description:
      "初めて作ったtodolistアプリ。タスクを完了すると一言もらえる機能付き。",
    url: "https://yukari-to-do.vercel.app/",
  },
  {
    id: 9,
    title: "授業検索2025",
    imageSrc: "/projects/5.png",
    tech: "Next.js",
    description: "大学公式の授業時間割表。(現在閉鎖中)",
    url: "",
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
