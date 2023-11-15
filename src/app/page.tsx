import Link from "next/link";
// import { HOME_DESCRIPTION, INTRODUCTION } from "./const";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center w-screen bg-black-200 text-yellow-200 px-[min(12vw)]">
        <div className="text-[min(14vw,170px)] font-ogg tracking-wider">imarv</div>
        <button
          type="button"
          className="relative inline-flex items-center justify-start overflow-hidden"
          >
            <Link href="/posts/01" legacyBehavior>Post-01</Link>
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
