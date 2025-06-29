"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  tech: string;
  description: string;
};

export default function ProjectCard({
  id,
  title,
  imageSrc,
  tech,
  description,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform">
      {/* クリック不要なので button → div に変更 */}
      <div className="w-full text-left cursor-default">
        <Image
          src={imageSrc}
          alt={`Project ${id}`}
          width={600}
          height={400}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg text-gray-800 font-bold">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">技術: {tech}</p>
        </div>
      </div>

      {/* 詳細は常に表示 */}
      <div className="px-4 pb-4 text-sm text-gray-700 transition-all duration-300">
        <p className="mt-2">{description}</p>
        <Link href={`/projects/${id}`}>
          <span className="inline-block mt-3 text-blue-500 hover:underline">
            ▶ 詳細ページへ
          </span>
        </Link>
      </div>
    </div>
  );
}

