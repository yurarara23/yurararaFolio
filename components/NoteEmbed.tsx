"use client";

import Script from "next/script";

const noteUrls = [
  "https://note.com/embed/notes/n0acbba516c84",
  "https://note.com/embed/notes/n4901ac8e5149",
  "https://note.com/embed/notes/n42f9a756cf2e",
];

export default function NoteEmbed() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-10 text-center">note</h2>

      {noteUrls.map((url, i) => (
        <div
          key={i}
          className="
            w-full max-w-xl mb-8
            transition-transform duration-300 hover:-translate-y-1
          "
        >
          <iframe
            src={url}
            className="w-full rounded-xl"
            style={{ border: 0 }}
          ></iframe>
        </div>
      ))}

      <Script src="https://note.com/scripts/embed.js" strategy="lazyOnload" />
    </div>
  );
}
