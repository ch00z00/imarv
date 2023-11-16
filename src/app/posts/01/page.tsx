import Link from "next/link";

export default function Post01() {
  return (
    <>
      <div className="flex min-h-fit pb-[min(14vh)] flex-col justify-start pl-[min(3vw)] text-yellow-200 bg-the-usual-suspects-top bg-fixed bg-cover bg-no-repeat">
        <div className="text-[min(10vw)] font-zen-old-mincho pt-[min(14vh)] tracking-tighter">ラスト <span className="text-[min(11vw)]">3</span> 分</div>
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
          <div className="inline-block pr-[17vw]">
            <div className="w-[min(20vw)] h-[min(30vw)] max-w-xs flex flex-col items-center overflow-hidden bg-white-200 text-black-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div>Pete Postlethwaite</div>
              <div>コバヤシ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-200 text-white-200 flex flex-col tracking-wider h-fit px-[min(10vw)] py-[min(10vw)]">
        <div className="grid grid-cols-2">
          <div className="text-[min(2.5vw,32px)] font-ogg">Summary</div>
          <div className="flex flex-col text-[min(1.5vw,20px)] font-zen-old-mincho">
            <div>ニューヨークで起きたトラックハイジャック事件の後、面通しで集められた5人の前科者たち(「常連の容疑者」=“The Usual Suspects”)。</div>
            <div>取り調べの結果、全員が無罪であることが分かった彼らは警察への復讐作戦を計画する。作戦は順調に進むが、伝説的な黒幕であるカイザー・ソゼの影響が感じられるようになる。</div>
            <div>そんな中でコバヤシと名乗る男から、彼ら一人一人がどこかでソゼの恨みを買っており、今その借りを返さなければならないことを明かされる。</div>
            <div>カイザー・ソゼとは一体どんな人物なのか？歯車の狂い始めた犯罪計画を卓越した構成で描いたサスペンス・ミステリー作品！</div>
          </div>
        </div>
        {/* 目次はホバーで伸縮する画像フィールドにするまでのプロトタイプ */}
        <div className="flex flex-col pt-[min(8vw)]">
          <div className=" flex items-center justify-between pb-[3vw]">
            <div className="text-[min(2.5vw,32px)] font-zen-old-mincho">目次</div>
            <div className="font-ogg text-[min(1vw)]">[ Table of contents ]</div>
          </div>
          <div className="bg-white-200 grid text-black-200 h-fit w-11/12 mx-auto px-[min(6vw)] py-[min(6vw)]">
            <dl className="max-w-full divide-y divide-black-200/50">
              <div className="flex items-center justify-between pb-5">
                <dt className="mb-1 font-light text-[min(1vw)] font-ogg">ー ( 01 ) ー</dt>
                <dd className="text-[min(2vw,24px)] tracking-wider font-zen-old-mincho">ケビン・スペイシーが不可欠な脚本</dd>
              </div>
              <div className="flex items-center justify-between py-5">
                <dt className="mb-1 font-light text-[min(1vw)] font-ogg">ー ( 02 ) ー</dt>
                <dd className="text-[min(2vw,24px)] tracking-wider font-zen-old-mincho">ラスト 3 分、怒涛の衝撃展開...!</dd>
              </div>
              <div className="flex items-center justify-between pt-5">
                <dt className="mb-1 font-light text-[min(1vw)] font-ogg">ー ( 03 ) ー</dt>
                <dd className="text-[min(2vw,24px)] tracking-wider font-zen-old-mincho">警察(<span className="text-[min(1.8vw,20px)]">&</span>観客) を欺いた原因となったのは ”思い込み”</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white-200 flex flex-col text-black-200 tracking-wider h-fit px-[min(10vw)] py-[min(20vw)]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">ケビン・スペイシーが不可欠な脚本</div>
            <div className="font-ogg text-[min(1vw)]">ー ( 01 ) ー</div>
          </div>
          <div className="pt-[min(2vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
            <div>本作品の脚本を制作したクリストファー・マッカリー（Christopher McQuarrie, 以下クリス）は、初めからカイザー・ソゼをケビン・スペイシー（Kevin Spacey, 以下ケビン）に<span className="font-semibold">当て書きした</span>そうです。</div>
            <div>というのも、とある試写会でケビンはクリスに「一緒に仕事をしたい」と声をかけてきたそうです。当時、ケビンは<span className="font-semibold">それほど有名ではなかった</span>ことで正体を隠してヴァーバル・キントを演じるカイザー・ソゼには丁度良かったのです。さらに、クリスたちは『Glengarry Glen Ross』でのケビンが大好きだったため、きっと素晴らしいだろうと思ったそうです。クリスは後に「ヴァーバルのようなトリックスターの黒幕には、<span className="font-semibold">彼のずる賢さと楽しさがぴったり</span>なんだ」と語っています。</div>
            <div>ケビン・スペイシーはカイザー・ソゼ（ヴァーバル・キント）の完璧な適役であり、本作に必要不可欠な絶対的な存在だったのです！</div>
          </div>
        </div>
        <div className="flex flex-col pt-[min(14vw,140px)]">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">ラスト 3 分、怒涛の衝撃展開...!</div>
            <div className="font-ogg text-[min(1vw)]">ー ( 02 ) ー</div>
          </div>
          <div className="pt-[min(2vw)] text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
            <div>キントが「警察は現実的だ」と言っていたように、警察としては障害を抱えたキントがまさかカイザー・ソゼだなんて考えもしなかったでしょう。</div>
            <div>それは「身体障害者にそんなことできないよ」と考えていたというよりも、もはやそこまで考えてすらおらず、<span className="font-semibold">潜在的にそう認識していた</span>んだと思われます。</div>
            <div>たとえば、あなたが道端で車椅子のおじさんを見かけたとします。あるとき、突然その方が平然と自力で立ち上がり、闊歩することを誰が想像できるでしょうか。普通、そんなことが起こったら誰しもが驚くはずです（「え、あの車椅子のおっちゃん立ち上がった!? しかも歩き出したぞおい!?」というように）。</div>
            <div>そのように私たち人間は、見かけなどの情報に結び付けられた “固定観念” によって “<span className="font-semibold">思い込む</span>” のです。</div>
          </div>
        </div>
        <div className="flex flex-col pt-[min(14vw,140px)]">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">警察(<span className="text-[min(1.8vw)]">&</span>観客) を欺いた原因となったのは ”思い込み”</div>
            <div className="font-ogg text-[min(1vw)]">ー ( 03 ) ー</div>
          </div>
          <div className="pt-[min(2vw)] text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
            <div>キントが「警察は現実的だ」と言っていたように、警察としては障害を抱えたキントがまさかカイザー・ソゼだなんて考えもしなかったでしょう。</div>
            <div>それは「身体障害者にそんなことできないよ」と考えていたというよりも、もはやそこまで考えてすらおらず、<span className="font-semibold">潜在的にそう認識していた</span>んだと思われます。</div>
            <div>たとえば、あなたが道端で車椅子のおじさんを見かけたとします。あるとき、突然その方が平然と自力で立ち上がり、闊歩することを誰が想像できるでしょうか。普通、そんなことが起こったら誰しもが驚くはずです（「え、あの車椅子のおっちゃん立ち上がった!? しかも歩き出したぞおい!?」というように）。</div>
            <div>そのように私たち人間は、見かけなどの情報に結び付けられた “固定観念” によって “<span className="font-semibold">思い込む</span>” のです。</div>
          </div>
        </div>
      </div>
      <div className="bg-black-100 grid grid-cols-2 py-[min(14vw)] text-white-200 font-ogg px-[min(10vw)]">
        <div className="text-[min(5vw,60px)] font-ogg flex items-center tracking-widest">The End</div>
        <div className="text-[min(1.5vw,20px)] font-zen-old-mincho">個人的には、主演のケビン・スペイシー(Kevin Spacey)が好きなので、見た後にさらに好きになれました。終わり方までスタイリッシュでかっこよく、伏線を含めた全体の構成もしっかりしていてかなりお気に入りの作品です。結末や伏線を知ったあとでも、何度も見たくなりますね。</div>
      </div>
      {/* これはスティッキーボタンにする */}
      <div className="bg-black-100 flex items-center justify-between text-white-200 font-ogg text-[min(2vw)] tracking-wider h-fit pb-[min(20vw)] px-[min(22vw)]">
        <button className="border rounded-full w-[min(12vw)] h-[min(12vw)] hover:bg-white-200 hover:text-black-100 duration-500">Prev</button>
        <button className="border rounded-full w-[min(12vw)] h-[min(12vw)] hover:bg-white-200 hover:text-black-100 duration-500">Next</button>
      </div>
    </>
  );
}
