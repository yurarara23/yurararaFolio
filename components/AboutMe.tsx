"use client";

import { Code, Rocket } from "lucide-react"; // アイコン（shadcn/lucide）

export default function AboutMe() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      {/* 自己紹介・経歴 */}
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          現在は大学で情報工学を専攻しており、Web開発やAIの応用に興味を持っています。
          フロントエンドでは <strong>Next.js / TypeScript</strong> を中心に学習・制作を進めています。
        </p>
        <p>
          またUnityを使ったゲーム開発も行っており、
          VRを使ったインタラクティブな体験づくりに関心があります。
        </p>
        <p>
          現在は
        <a
          href="https://nu-meta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          メタ創
        </a>
        に所属しており、主にWebサイトやゲームギミックの開発を担当しています。
        </p>
      </div>

      {/* 技術スタック */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Code size={20} />
          技術スタック
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "Unity",
            "C#",
            "TailwindCSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full hover:border-blue-500 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 興味・今後やりたいこと */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Rocket size={20} />
          興味・取り組みたい分野
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>生成AIを使ったアプリやBotの開発</li>
          <li>VRのワールド、ゲーム制作</li>
          <li>UI/UXデザインとアニメーション演出</li>
        </ul>
      </div>
    </section>
  );
}
