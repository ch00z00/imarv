import Link from "next/link";
// import { HOME_DESCRIPTION, INTRODUCTION } from "./const";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center w-screen bg-black-100 text-yellow-200 px-[min(12vw)] text-[min(3vw)] font-zen-old-mincho">
        <button
          type="button"
          className="relative inline-flex items-center justify-start overflow-hidden"
          >
            <Link href="/posts/01" legacyBehavior>ラスト3分怒涛の伏線回収・衝撃展開</Link>
        </button>
        <button
          type="button"
          className="relative inline-flex items-center justify-start overflow-hidden"
          >
            <Link href="/posts/02" legacyBehavior>Post-02</Link>
        </button>
        <button
          type="button"
          className="relative inline-flex items-center justify-start overflow-hidden"
          >
            <Link href="/posts/03" legacyBehavior>Post-03</Link>
        </button>
      </div>
    </>
  );
}
