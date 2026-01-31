"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  tech: string;
  description: string;
  url: string;
};

export default function ProjectCard({
  id,
  title,
  imageSrc,
  tech,
  description,
  url,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* カード */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer group bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200"
      >
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={`Project ${id}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">技術: {tech}</p>
        </div>
      </div>

      {/* モーダル */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 背景 */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* パネル */}
          <div className="relative bg-white rounded-2xl max-w-3xl w-[90%] max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="relative w-full h-64">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-500 mt-1">使用技術: {tech}</p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                {description}
              </p>

              <div className="flex justify-between items-center mt-6">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 font-medium hover:underline"
                >
                  外部リンク →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
