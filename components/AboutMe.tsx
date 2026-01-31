export default function AboutMe() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-gray-300">
      {/* About */}
      <h2 className="text-3xl font-bold mb-10 text-center">About me</h2>

      <div className="leading-relaxed text-center max-w-3xl mx-auto">
        <p>
          大学の情報工学科に所属し、WebやAI分野に関心を持って学習・実装に取り組んでいます。
          Unityによるゲーム開発やVRを用いたインタラクティブ体験の制作も行っています。
          現在はデジタルコンテンツを自主制作する団体に所属し、主に開発担当として活動しています。
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
            HomePage
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
            HomePage
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
            HomePage
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
            <li>TOEIC IP 720点</li>
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
                プラン・システム・ワールドデザイン担当
              </p>
            </li>

            <li>
              <p className="font-medium">
                IVRC メタバース部門 入江英嗣賞（2025年）
              </p>
              <p className="text-sm text-gray-400 mt-1">
                プラン・システム・ワールドデザイン担当
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
