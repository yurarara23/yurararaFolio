"use client";

import { Code, Apple } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-gray-300">
      {/* 見出し */}
      <h2 className="text-3xl font-bold mb-10 text-center">- About Me -</h2>

      {/* 自己紹介 */}
      <div className="space-y-4 leading-relaxed text-center max-w-3xl mx-auto">
        <p>
          現在は大学で情報工学を専攻しており、Web開発やAIの応用に興味を持っています。
        </p>
        <p>
          Unity を使ったゲーム開発にも取り組んでおり、
          最近は VR を使ったインタラクティブな体験づくりをしています。
        </p>
        <p>
          現在は{" "}
          <a
            href="https://nu-meta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            メタ創
          </a>{" "}
          に所属しており、主に Web サイトやゲームギミックの開発を担当しています。
        </p>
      </div>

      {/* 技術スタック */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-6 flex items-center justify-center gap-2">
          <Code size={20} />
          よく扱ってるもの
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Next.js",
            "React",
            "Vue",
            "TypeScript",
            "Python",
            "Unity",
            "C#",
            "Go",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 興味・やりたいこと */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-6 flex items-center justify-center gap-2">
          <Apple size={20} />
          取り組みたい分野
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>生成AIを応用したアプリやゲーム開発</li>
          <li>インタラクティブな VR ワールド・ゲーム制作</li>
          <li>Web アプリ開発</li>
        </ul>
      </div>
    </section>
  );
}

