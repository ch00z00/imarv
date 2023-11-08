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
            <Link href="/posts/a" legacyBehavior>Posts</Link>
          </button>
        {/* <div className="text-[min(4vw,40px)] pt-[min(4vh)] tracking-wider font-ogg">{HOME_DESCRIPTION}</div>
        <div className="text-[min(2vw,20px)] pt-[min(4vh)] tracking-wider font-ogg">{INTRODUCTION}</div> */}
      </div>
      {/* <div className="bg-black-100 flex items-center justify-between text-white-200 h-full px-[min(14vw)] py-[min(14vw)]">
        <div className="font-ogg text-[min(3vw)] tracking-wider">
          <button
          type="button"
          className="relative inline-flex items-center justify-start overflow-hidden"
          >
            <Link href="/posts/a" legacyBehavior>Posts</Link>
          </button>
        </div>
      </div> */}
    </>
  );
}
