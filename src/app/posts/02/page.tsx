import Link from "next/link";

export default function Post02() {
  return (
    <>
      <div className="flex min-h-fit pb-[min(14vh)] flex-col justify-start pl-[min(3vw)] text-yellow-200 bg-the-usual-suspects-top bg-fixed bg-cover bg-no-repeat">
        <div className="text-[min(8vw)] font-zen-old-mincho pt-[min(14vh)] tracking-tighter">ラスト <span className="text-[min(11vw)]">3</span> 分間</div>
        <div className="text-[min(10vw)] font-zen-old-mincho pt-0">怒涛の</div>
        <div className="text-[min(10vw)] font-zen-old-mincho pt-0">伏線回収・衝撃展開</div>
      </div>
      <div className="bg-black-100 grid text-white-200 h-fit px-[min(14vw)] py-[min(6vw)]">
        <dl className="max-w-full divide-y divide-white-200/50">
          <div className="flex items-center justify-between pb-5">
            <dt className="mb-1 font-light text-[min(1.7vw,24px)]">Title</dt>
            <dd className="text-[min(2vw,28px)] tracking-wider font-ogg">The Usual Suspects <span className="text-[min(1.3vw)] font-zen-old-mincho tracking-tighter">(ユージュアル・サスペクツ)</span></dd>
          </div>
          <div className="flex items-center justify-between py-5">
            <dt className="mb-1 font-light text-[min(1.7vw,24px)]">Released</dt>
            <dd className="text-[min(2vw,28px)] tracking-wider font-ogg">1995.</dd>
          </div>
          <div className="flex items-center justify-between py-5">
            <dt className="mb-1 font-light text-[min(1.7vw,24px)]">Categories</dt>
            <dd className="text-[min(2vw,28px)] tracking-wider font-ogg">Mystery / Crime / Drama / Thriller / Neo-noir</dd>
          </div>
          <div className="flex items-center justify-between py-5">
            <dt className="mb-1 font-light text-[min(1.7vw,24px)]">Director</dt>
            <dd className="text-[min(2vw,28px)] tracking-wider font-ogg">Bryan Singer <span className="text-[min(1.3vw)] font-zen-old-mincho tracking-tighter">(ブライアン・シンガー)</span></dd>
          </div>
          <div className="flex items-center justify-between py-5">
            <dt className="mb-1 font-light text-[min(1.7vw,24px)]">Screenwriter</dt>
            <dd className="text-[min(2vw,28px)] tracking-wider font-ogg">Christopher McQuarrie <span className="text-[min(1.3vw)] font-zen-old-mincho tracking-tighter">(クリストファー・マッカリー)</span></dd>
          </div>
          <div className="flex items-center justify-between py-5">
            <dt className="mb-1 font-light text-[min(1.7vw,24px)]">Rating</dt>
            <dd className="text-[min(2vw,28px)] tracking-wider font-ogg">98 <span className="text-[min(1.3vw)]">/ 100</span></dd>
          </div>
        </dl>
      </div>
      {/* ここはThe Shift TokyoのAbout→Galleryが参考になる (draggable, parallax) */}
      <div className="bg-yellow-300/60 flex flex-col h-fit py-[min(3vw)]">
        <div className="flex overflow-x-scroll no-scrollbar space-x-[7vw]">
          <div className="inline-block pl-[17vw]">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Kevin Spacey</div>
              <div>ヴァーバル・キント</div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Gabriel Byrne</div>
              <div>ディーン・キートン</div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Benicio Del Toro</div>
              <div>フレッド・フェンスター</div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Stephen Baldwin</div>
              <div>マイケル・マクマナス</div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Kevin Pollak</div>
              <div>トッド・ホックニー</div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Chazz Palminteri</div>
              <div>デイブ・クイヤン</div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Pete Postlethwaite</div>
              <div>コバヤシ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-200 text-white-200 flex flex-col tracking-wider space-y-32 h-fit px-[min(14vw)] py-[min(10vw)]">
        <div className="grid grid-cols-2">
          <div className="text-[min(2.5vw,32px)] font-ogg">Summary</div>
          <div className="text-[min(1.5vw,20px)] font-zen-old-mincho">ニューヨークで起きたトラックハイジャック事件の後、面通しで集められた5人の前科者たち(“The Usual Suspects”=「常連の容疑者」)。取り調べの結果、全員が無罪であることが分かった彼らは警察への復讐作戦を計画する。作戦は順調に進むが、伝説的な黒幕であるカイザー・ソゼの影響が感じられるようになる。そんな中でコバヤシと名乗る男から、彼ら一人一人がどこかでソゼの恨みを買っており、今その借りを返さなければならないことを明かされる。カイザー・ソゼとは一体どんな人物なのか？歯車の狂い始めた犯罪計画を卓越した構成で描いたサスペンス・ミステリー作品！</div>
        </div>
        <div className="flex flex-col">
          <div className=" flex items-center justify-between">
            <div className="text-[min(2.5vw,32px)] font-zen-old-mincho">目次</div>
            <div className="font-ogg text-[min(1vw)]">[ Table of contents ]</div>
          </div>
          <div className="pt-[min(3vw)]">images</div>
        </div>
      </div>
      <div className="bg-white-200 flex flex-col text-black-200 tracking-wider h-fit px-[min(10vw)] py-[min(16vw)]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">ブライアン・シンガー監督による巧妙なトリック</div>
            <div className="font-ogg text-[min(1vw)]">ー ( 01 ) ー</div>
          </div>
          <div className="pt-[min(2vw)] text-[min(1.5vw,24px)] font-zen-old-mincho w-11/12">「警察は現実的だ」と言っていたように、警察としては障害を抱えたキントがまさかカイザー・ソゼだなんて考えすらしなかったでしょう。それは「身体障害者にそんなことできないよ」と考えていたというよりも、もはやそこまで考えてすらおらず、<span className="font-semibold">潜在的にそう認識していた</span>んだと思われます。たとえば、あなたが道端で車椅子のおじさんを見かけたとします。あるとき、突然その方が平然と自力で立ち上がり、闊歩することを誰が想像できるでしょうか。普通、そんなことが起こったら誰しもが驚くはずです（「え、あの車椅子のおっちゃん立ち上がった!? しかも歩き出したぞおい!?」というように）。そのように私たち人間は、見かけなどの情報に結び付けられた “固定観念” によって “<span className="font-semibold">思い込む</span>” のです。</div>
        </div>
        <div className="flex flex-col pt-[min(8vw,120px)]">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">ラスト 3 分、怒涛の衝撃展開...!</div>
            <div className="font-ogg text-[min(1vw)]">ー ( 02 ) ー</div>
          </div>
          <div className="pt-[min(2vw)] text-[min(1.5vw,24px)] font-zen-old-mincho w-11/12">「警察は現実的だ」と言っていたように、警察としては障害を抱えたキントがまさかカイザー・ソゼだなんて考えすらしなかったでしょう。それは「身体障害者にそんなことできないよ」と考えていたというよりも、もはやそこまで考えてすらおらず、<span className="font-semibold">潜在的にそう認識していた</span>んだと思われます。たとえば、あなたが道端で車椅子のおじさんを見かけたとします。あるとき、突然その方が平然と自力で立ち上がり、闊歩することを誰が想像できるでしょうか。普通、そんなことが起こったら誰しもが驚くはずです（「え、あの車椅子のおっちゃん立ち上がった!? しかも歩き出したぞおい!?」というように）。そのように私たち人間は、見かけなどの情報に結び付けられた “固定観念” によって “<span className="font-semibold">思い込む</span>” のです。</div>
        </div>
        <div className="flex flex-col pt-[min(8vw,120px)]">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">警察(<span className="text-[min(1.8vw)]">&</span>観客) を欺いた原因となったのは ”思い込み”</div>
            <div className="font-ogg text-[min(1vw)]">ー ( 03 ) ー</div>
          </div>
          <div className="pt-[min(2vw)] text-[min(1.5vw,24px)] font-zen-old-mincho w-11/12">「警察は現実的だ」と言っていたように、警察としては障害を抱えたキントがまさかカイザー・ソゼだなんて考えすらしなかったでしょう。それは「身体障害者にそんなことできないよ」と考えていたというよりも、もはやそこまで考えてすらおらず、<span className="font-semibold">潜在的にそう認識していた</span>んだと思われます。たとえば、あなたが道端で車椅子のおじさんを見かけたとします。あるとき、突然その方が平然と自力で立ち上がり、闊歩することを誰が想像できるでしょうか。普通、そんなことが起こったら誰しもが驚くはずです（「え、あの車椅子のおっちゃん立ち上がった!? しかも歩き出したぞおい!?」というように）。そのように私たち人間は、見かけなどの情報に結び付けられた “固定観念” によって “<span className="font-semibold">思い込む</span>” のです。</div>
        </div>
        <div className="grid grid-cols-2 pt-[min(10vw,170px)]">
          <div className="text-[min(5vw,60px)] font-ogg flex items-center tracking-widest">The End</div>
          <div className="text-[min(1.5vw,20px)] font-zen-old-mincho">個人的には、主演のケビン・スペイシー(Kevin Spacey)が好きなので、見た後にさらに好きになれました。終わり方までスタイリッシュでかっこよく、伏線を含めた全体の構成もしっかりしていてかなりお気に入りの作品です。結末や伏線を知ったあとでも、何度も見たくなりますね。</div>
        </div>
      </div>
      <div className="bg-black-100 flex items-center justify-between text-white-200 font-ogg text-[min(1.5vw)] tracking-wider h-fit px-[min(14vw)] py-[min(10vw)]">
        <button className="border rounded-md px-4 py-1 hover:bg-white-200 hover:text-black-100 duration-500">Prev</button>
        <button className="border rounded-md px-4 py-1 hover:bg-white-200 hover:text-black-100 duration-500">Next</button>
      </div>
    </>
  );
}
