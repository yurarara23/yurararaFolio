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
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200">
      {/* サムネイル */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Project ${id}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* 内容 */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">技術: {tech}</p>

        <p className="text-gray-700 text-sm mt-3 line-clamp-3">
          {description}
        </p>

        {/* 詳細リンク */}
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-800 font-medium transition"
        >
          <span>詳細を見る</span>
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
