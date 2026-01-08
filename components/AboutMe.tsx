"use client";

export default function AboutMe() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-gray-300">
      {/* About */}
      <h2 className="text-3xl font-bold mb-10 text-center">About</h2>

      <div className="leading-relaxed text-center max-w-3xl mx-auto">
        <p>
          大学で情報工学を専攻し、Webアプリケーション開発やAIの応用に関心を持って学ぶとともに、
          Unityを用いたゲーム開発やVRを活用したインタラクティブな体験の設計・実装にも取り組んでいます。
        </p>
        <p>
          現在は{" "}
          <a
            href="https://nu-meta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            大学の同期と立ち上げた自主制作団体
          </a>{" "}
          に所属し、主にWebサイトやデジタルコンテンツの開発を行っています。
        </p>
      </div>

      {/* 所属 */}
      <h2 className="text-3xl font-bold my-16 text-center">Organizations</h2>

      <ul className="space-y-3 text-center">
        <li>
          日本大学 理工学部 応用情報工学科 B2
          <a
            href="https://www.ce.cst.nihon-u.ac.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Web
          </a>
        </li>
        <li>
          Nu.メタ創
          <a
            href="https://nu-meta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Web
          </a>
        </li>
        <li>
          全日本大学メタバース連盟
          <a
            href="https://numa-meta.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Web
          </a>
        </li>
      </ul>

      {/* Skills */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center">Skills</h3>

          <ul className="space-y-2">
            <li>Next.js / Vue / TypeScript</li>
            <li>Python / Go</li>
            <li>Unity / C# / Udon</li>
            <li>TOEIC IP 720点（2024年）</li>
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center">Achievements</h3>

          <ul className="space-y-6 max-w-xl mx-auto">
            <li>
              <p className="font-medium">
                IVRC メタバース部門 せきぐちあいみ賞（2025年）
              </p>
              <p className="text-sm text-gray-400 mt-1">
                プラン作成・ゲームシステム実装・ワールドデザインを担当
              </p>
            </li>

            <li>
              <p className="font-medium">
                IVRC メタバース部門 入江英嗣賞（2025年）
              </p>
              <p className="text-sm text-gray-400 mt-1">
                プラン作成・ゲームシステム実装・ワールドデザインを担当
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
