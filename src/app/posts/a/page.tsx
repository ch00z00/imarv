export default function Post() {
  return (
    <>
      {/* <div className="flex min-h-screen flex-col justify-start bg-the-usual-suspects-top bg-fixed bg-cover bg-no-repeat"> */}
      <div className="flex min-h-screen flex-col justify-start bg-yellow-200 text-black -200">
        <div className="text-[min(14vw,170px)] w-[min(75vw)] font-ogg pt-[min(18vh)] pl-[min(4vw)] leading-none tracking-wider">The Usual Suspects</div>
        <div className="text-[min(4vw,40px)] pt-[min(4vh)] pl-[min(4vw)] font-sans italic">ユージュアル・サスペクツ</div>
          <div className="text-[min(8vw,80px)] font-zen-old-mincho pt-[min(12vh)] pl-[min(4vw)]">ラスト3分で怒涛の伏線回収・衝撃展開！</div>
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
        <div></div>
      </div>
    </>
  );
}
