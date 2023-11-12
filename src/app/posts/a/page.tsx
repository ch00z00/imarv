import Link from "next/link";

export default function Post() {
  return (
    <>
      <div className="flex min-h-fit pb-14 flex-col justify-start pl-[min(4vw)] text-yellow-200 bg-the-usual-suspects-top bg-fixed bg-cover bg-no-repeat">
        <div className="text-[min(8vw)] font-zen-old-mincho pt-[min(14vh)] tracking-tighter">ラスト <span className="text-[min(11vw)]">3</span> 分間</div>
        <div className="text-[min(10vw)] font-zen-old-mincho pt-0">怒涛の</div>
        <div className="text-[min(10vw)] font-zen-old-mincho pt-0">伏線回収・衝撃展開</div>
      </div>
      <div className="bg-black-100 grid gap-20 grid-cols-2 text-white-200 h-1/3 px-[min(14vw)] py-[min(14vh)]">
        <dl className="max-w-full divide-y divide-white-200/50">
          <div className="flex flex-col pb-5">
            <dt className="mb-1 text-[min(1.5vw)]">Title</dt>
            <label className="text-[min(1vw)] font-zen-old-mincho italic">ユージュアル・サスペクツ</label>
            <dd className="text-[min(2vw)] tracking-wider font-ogg">The Usual Suspects</dd>
          </div>
          <div className="flex flex-col py-8">
            <dt className="mb-1 text-[min(1.5vw)]">Released</dt>
            <dd className="text-[min(2vw)] tracking-wider font-ogg">1995.</dd>
          </div>
          <div className="flex flex-col py-8">
            <dt className="mb-1 text-[min(1.5vw)]">Categories</dt>
            <dd className="text-[min(2vw)] tracking-wider font-ogg">Mystery / Crime / Drama</dd>
          </div>
        </dl>
        <dl className="max-w-full divide-y divide-white-200/50">
          <div className="flex flex-col pb-5">
            <dt className="mb-1 text-[min(1.5vw)]">Director</dt>
            <label className="text-[min(1vw)] font-zen-old-mincho italic">ブライアン・シンガー</label>
            <dd className="text-[min(2vw)] tracking-wider font-ogg">Bryan Singer</dd>
          </div>
          <div className="flex flex-col py-5">
            <dt className="mb-1 text-[min(1.5vw)]">Screenwriter</dt>
            <label className="text-[min(1vw)] font-zen-old-mincho italic">クリストファー・マッカリー</label>
            <dd className="text-[min(2vw)] tracking-wider font-ogg">Christopher McQuarrie</dd>
          </div>
          <div className="flex flex-col py-8">
            <dt className="mb-1 text-[min(1.5vw)]">Rating</dt>
            <dd className="text-[min(2vw)] tracking-wider font-ogg">98 <span className="text-[min(1.4vw)]">/ 100</span></dd>
          </div>
        </dl>
      </div>
      <div className="bg-white-100/20 flex items-center justify-between text-white-200 h-screen px-[min(14vw)] py-[min(16vw)]">
      </div>
    </>
  );
}
