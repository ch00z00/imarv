import Link from "next/link";

export default function Post() {
  return (
    <>
      {/* <div className="flex min-h-screen flex-col justify-start bg-the-usual-suspects-top bg-fixed bg-cover bg-no-repeat"> */}
      <div className="flex min-h-screen flex-col justify-start bg-yellow-200 text-black-200 pl-[min(6vw)]">
        <div className="text-[min(10vw)] w-[min(75vw)] font-ogg pt-[min(20vh)] leading-none tracking-wider">The Usual Suspects</div>
        <div className="text-[min(2vw)] pt-[min(4vh)] font-sans italic">ユージュアル・サスペクツ</div>
          <div className="text-[min(4vw)] font-zen-old-mincho pt-[min(12vh)]">ラスト3分で怒涛の伏線回収・衝撃展開！</div>
      </div>
      <div className="bg-black-100 flex items-center justify-between text-white-200 h-1/3 px-[min(14vw)] py-[min(14vw)]">
        <div className="space-y-4">
          <div className="text-2xl tracking-wider font-ogg">Categories</div>
          <div>Mystery / Crime / Drama</div>
        </div>
        <div className="space-y-4">
          <div className="text-2xl tracking-wider font-ogg">Released</div>
          <div>1995</div>
        </div>
        <div className="space-y-4">
          <div className="text-2xl tracking-wider font-ogg">Rating</div>
          <div>98 / 100</div>
        </div>
      </div>
      <div className="bg-white-100/20 flex items-center justify-between text-white-200 h-screen px-[min(14vw)] py-[min(16vw)]">
      <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden"
      ><Link href="/" legacyBehavior>Home</Link></button>
      </div>
    </>
  );
}
