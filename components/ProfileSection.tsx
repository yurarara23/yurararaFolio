"use client";

import { Github, Twitter } from "lucide-react"; // ← モジュールから読み込み
import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      {/* プロフィール画像 */}
      <div className="mb-6">
        <Image
          src="/yurarara.png"
          alt="プロフィール画像"
          width={140}
          height={140}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* 名前と紹介 */}
      <h1 className="text-4xl font-bold mb-2">yurarara</h1>
      <p className="text-gray-400 mb-6">駆け出し開発者</p>

      {/* SNSリンク */}
      <div className="flex gap-6">
        <a
          href="https://twitter.com/yurara_2323"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition"
        >
          <Twitter size={28} strokeWidth={1.6} />
        </a>
        <a
          href="https://github.com/yurarara23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <Github size={28} strokeWidth={1.6} />
        </a>
      </div>
    </div>
  );
}

