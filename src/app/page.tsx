import Link from "next/link";
import { HOME_DESCRIPTION, INTRODUCTION } from "./const";

export default function Home() {
  return (
    <>
      <header className="top-0 w-screen fixed h-[min(12vh)] px-[min(6vw)] z-20 flex items-center justify-between text-[min(3vw,24px)]">
      <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden"
      ><Link href="/" legacyBehavior>Home</Link></button>
        <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden"
      ><Link href="/posts/a" legacyBehavior>Posts</Link></button>
        <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden"
      ><Link href="/about" legacyBehavior>About</Link></button>
      </header>
      <div className="flex min-h-screen flex-col justify-center items-center w-screen bg-yellow-200 text-black-200 px-[min(12vw)]">
        <div className="text-[min(14vw,170px)] font-ogg tracking-wider">imarv</div>
        <div className="text-[min(4vw,40px)] pt-[min(4vh)] tracking-wider font-ogg">{HOME_DESCRIPTION}</div>
        <div className="text-[min(2vw,20px)] pt-[min(4vh)] tracking-wider font-ogg">{INTRODUCTION}</div>
      </div>
      <div className="bg-black-100 flex items-center justify-between text-white-200 h-full px-[min(14vw)] py-[min(14vw)]">
        <div className="font-ogg text-[min(3vw)] tracking-wider">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sint veniam, architecto eveniet debitis eum a, veritatis molestias officia tenetur autem et sunt harum provident dicta accusantium. Quisquam, praesentium nihil.</div>
      </div>
      <div className="bg-yellow-200 flex items-center justify-between text-black-200 h-screen px-[min(14vw)] py-[min(16vw)]">
        <div className="font-ogg text-[min(3vw)] tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto, dolor quis corrupti quod voluptatum saepe minima architecto aspernatur asperiores nesciunt similique blanditiis dignissimos dicta nemo inventore voluptatibus enim vel!</div>
      </div>
    </>
  );
}
