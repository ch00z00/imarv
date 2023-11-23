import Image from "next/image";
import { kint, keaton, fenster, mcmanus, hockney, kujan, kobayashi } from "../../../../public/imgs";
import YouTube from "react-youtube";
import { TRAILER_01 } from "@/app/const";

export default function Post01() {
  return (
    <>
      <div className="flex min-h-fit pb-[min(14vh)] flex-col justify-start pl-[min(3vw)] text-yellow-200 bg-the-usual-suspects-top bg-fixed bg-cover bg-no-repeat">
        <div className="text-[min(10vw)] font-zen-old-mincho pt-[min(14vh)] tracking-tighter">ラスト <span className="text-[min(11vw)]">3</span> 分</div>
        <div className="text-[min(10vw)] font-zen-old-mincho pt-0">怒涛の</div>
        <div className="text-[min(10vw)] font-zen-old-mincho pt-0">伏線回収・衝撃展開</div>
      </div>
      <div className="bg-black-300/40 grid text-white-200 h-fit px-[min(14vw)] py-[min(6vw)]">
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
      <div className="bg-black-100 flex flex-col h-fit py-[min(10vw)]">
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex flex-nowrap mx-[min(17vw)]">
            <div className="relative flex flex-col h-[min(30vw)] pl-[min(50vw)] mr-[min(3vw)]">
              <Image src={kint} alt="kint" fill className="object-cover" />
              <div className="absolute text-white-200 bottom-[min(5vw)] left-[min(4vw)] text-[min(2.4vw)] font-ogg tracking-wider">Kevin Spacey</div>
              <div className="absolute text-white-200 bottom-[min(3vw)] left-[min(4vw)] text-[min(1.6vw)] tracking-wider">Verbal Kint</div>
            </div>
            <div className="relative flex flex-col h-[min(30vw)] px-[min(20vw)] mx-[min(3vw)]">
              <Image src={keaton} alt="keaton" fill className="object-cover" />
              <div className="absolute text-white-200 bottom-[min(5vw)] left-[min(4vw)] text-[min(2.4vw)] font-ogg tracking-wider">Gabriel Byrne</div>
              <div className="absolute text-white-200 bottom-[min(3vw)] left-[min(4vw)] text-[min(1.6vw)] tracking-wider">Dean Keaton</div>
            </div>
            <div className="relative flex flex-col h-[min(30vw)] px-[min(20vw)] mx-[min(3vw)]">
              <Image src={fenster} alt="fenster" fill className="object-cover" />
              <div className="absolute text-white-200 bottom-[min(5vw)] left-[min(4vw)] text-[min(2.4vw)] font-ogg tracking-wider">Benicio Del Toro</div>
              <div className="absolute text-white-200 bottom-[min(3vw)] left-[min(4vw)] text-[min(1.6vw)] tracking-wider">Fred Fenster</div>
            </div>
            <div className="relative flex flex-col h-[min(30vw)] px-[min(25vw)] mx-[min(3vw)]">
              <Image src={mcmanus} alt="mcmanus" fill className="object-cover" />
              <div className="absolute text-white-200 bottom-[min(5vw)] left-[min(4vw)] text-[min(2.4vw)] font-ogg tracking-wider">Stephen Baldwin</div>
              <div className="absolute text-white-200 bottom-[min(3vw)] left-[min(4vw)] text-[min(1.6vw)] tracking-wider">Michael McManus</div>
            </div>
            <div className="relative flex flex-col h-[min(30vw)] px-[min(20vw)] mx-[min(3vw)]">
              <Image src={hockney} alt="hockney" fill className="object-cover" />
              <div className="absolute text-white-200 bottom-[min(5vw)] left-[min(4vw)] text-[min(2.4vw)] font-ogg tracking-wider">Kevin Pollak</div>
              <div className="absolute text-white-200 bottom-[min(3vw)] left-[min(4vw)] text-[min(1.6vw)] tracking-wider">Todd Hockney</div>
            </div>
            <div className="relative flex flex-col h-[min(30vw)] px-[min(23vw)] mx-[min(3vw)]">
              <Image src={kujan} alt="kujan" fill className="object-cover" />
              <div className="absolute text-white-200 bottom-[min(5vw)] left-[min(4vw)] text-[min(2.4vw)] font-ogg tracking-wider">Chazz Palminteri</div>
              <div className="absolute text-white-200 bottom-[min(3vw)] left-[min(4vw)] text-[min(1.6vw)] tracking-wider">Dave Kujan</div>
            </div>
            <div className="relative h-[min(30vw)] px-[min(22vw)] ml-[min(3vw)]">
              <Image src={kobayashi} alt="kobayashi" fill className="object-cover" />
              <div className="absolute text-white-200 bottom-[min(5vw)] left-[min(4vw)] text-[min(2.4vw)] font-ogg tracking-wider">Pete Postlethwaite</div>
              <div className="absolute text-white-200 bottom-[min(3vw)] left-[min(4vw)] text-[min(1.6vw)] tracking-wider">Kobayashi</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-200 text-white-200 flex flex-col tracking-wider h-fit px-[min(10vw)] py-[min(10vw)]">
        {/* 目次はホバーで伸縮する画像フィールドにするまでのプロトタイプ */}
        <div className="flex flex-col pt-[min(8vw)]">
          {/* <YouTube videoId={TRAILER_01} /> */}
          <div className="flex items-center justify-between pb-[3vw]">
            <div className="text-[min(2.5vw,32px)] font-zen-old-mincho">目次</div>
            <div className="font-ogg text-[min(1vw)]">[ Table of contents ]</div>
          </div>
          <div className="bg-white-200 grid text-black-200 h-fit w-2/3 mx-auto px-[min(6vw)] py-[min(6vw)]">
            <dl className="max-w-full divide-y divide-black-200/50">
              <div className="flex items-center justify-between pb-[min(2vw)]">
                <dt className="text-[min(2vw,24px)] tracking-wider font-zen-old-mincho">あらすじ</dt>
              </div>
              <div className="divide-y-none">
                <div className="flex items-center justify-between py-[min(2vw)]">
                  <dt className="text-[min(2vw,24px)] tracking-wider font-zen-old-mincho">7つの伏線をすべて解説！</dt>
                </div>
                <div className="indent-[min(4vw,32px)] pb-[min(2vw)]">
                  <div className="flex items-center justify-between pb-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">( 01 )　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">ケビン・スペイシーが不可欠な脚本</span></dt>
                  </div>
                  <div className="flex items-center justify-between py-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">( 02 )　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">ラスト 3 分、怒涛の衝撃展開...!</span></dt>
                  </div>
                  <div className="flex items-center justify-between py-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">( 03 )　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">警察(<span className="text-[min(1.8vw,20px)]">&</span>観客) を欺いた原因は ”思い込み”</span></dt>
                  </div>
                  <div className="flex items-center justify-between py-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">( 04 )　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">ケビン・スペイシーが不可欠な脚本</span></dt>
                  </div>
                  <div className="flex items-center justify-between py-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">( 05 )　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">ラスト 3 分、怒涛の衝撃展開...!</span></dt>
                  </div>
                  <div className="flex items-center justify-between pt-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">( 06 )　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">警察(<span className="text-[min(1.8vw,20px)]">&</span>観客) を欺いた原因は ”思い込み”</span></dt>
                  </div>
                  <div className="flex items-center justify-between pt-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">( 07 )　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">警察(<span className="text-[min(1.8vw,20px)]">&</span>観客) を欺いた原因は ”思い込み”</span></dt>
                  </div>
                </div>
              </div>
              <div className="divide-y-none">
                <div className="flex items-center justify-between py-[min(2vw)]">
                  <dt className="text-[min(2vw,24px)] tracking-wider font-zen-old-mincho">本作のポイントを3つ解説</dt>
                </div>
                <div className="indent-[min(3vw,32px)]">
                  <div className="flex items-center justify-between pb-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">[ Point 01 ]　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">ケビン・スペイシーが不可欠な脚本</span></dt>
                  </div>
                  <div className="flex items-center justify-between py-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">[ Point 02 ]　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">ラスト 3 分、怒涛の衝撃展開...!</span></dt>
                  </div>
                  <div className="flex items-center justify-between pt-[min(0.5vw)]">
                    <dt className="mb-1 font-light text-[min(1vw)] font-ogg">[ Point 03 ]　<span className="text-[min(1.6vw,20px)] tracking-wider font-zen-old-mincho">警察(<span className="text-[min(1.8vw,20px)]">&</span>観客) を欺いた原因は ”思い込み”</span></dt>
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white-200 flex flex-col text-black-200 tracking-wider h-fit px-[min(10vw)] py-[min(20vw)]">
        <div className="flex items-center justify-between pb-[1.5vw]">
          <div className="text-[min(4vw,50px)] font-zen-old-mincho">あらすじ</div>
          <div className="font-ogg text-[min(1vw)]">[ Summary ]</div>
        </div>
        <div className="flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
          <div>ニューヨークで起きたトラックハイジャック事件の後、面通しで集められた<span className="bg-red-100/30">5人の前科者たち</span>(「常連の容疑者」=“The Usual Suspects”)。取り調べの結果、全員が無罪であることが分かった彼らは警察への復讐作戦を計画する。作戦は順調に進むが、伝説的な黒幕である<span className="bg-red-100/30">カイザー・ソゼ</span>の影響が感じられるようになる。</div>
          <div>そんな中で<span className="bg-red-100/30">コバヤシ</span>と名乗る男から、彼ら一人一人がどこかでソゼの恨みを買っており、今その借りを返さなければならないことを明かされる。</div>
          <div>カイザー・ソゼとは一体どんな人物なのか？歯車の狂い始めた犯罪計画を卓越した構成で描いたサスペンス・ミステリー作品！</div>
        </div>
        <div className="flex flex-col pt-[min(12vw,120px)]">
          <div className="text-[min(4vw,50px)] font-zen-old-mincho">7つの伏線をすべて解説！</div>
          <div className="pt-[min(1.5vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho">
            <div>本作では、主に7つの伏線が散りばめられています。</div>
            <ul className="pt-[min(1.8vw)] space-y-[min(1.5vw)]">
              <li>( 01 )　キートンの発言「足の感覚がないよ」</li>
              <li>( 02 )　キントだけ逮捕シーンがない</li>
              <li>( 03 )　キントの弁護士と話した刑事の態度</li>
              <li>( 04 )　尋問を受けるキントの目線</li>
              <li>( 05 )　咄嗟に使ってしまう左手と金のライター</li>
              <li>( 06 )　散りばめられたキーワード「トルコ」</li>
              <li>( 07 )　ソゼに詳しすぎるキントの発言</li>
            </ul>
            <div className="pt-[min(1.8vw)]">それでは、伏線1から順に見ていきましょう。</div>
            <div className="flex items-center justify-between pt-[min(6vw,60px)]">
              <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">金の腕時計とライター</div>
              <div className="font-ogg text-[min(1vw)]">ー ( 01 ) ー</div>
            </div>
            <div className="pt-[min(1.5vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
              <div>キント(ソゼ)が釈放され、警察署を出る際に彼の所持品が返されます。</div>
              <ul className="leading-[min(2.5vw)] py-[min(1.5vw)] indent-[min(1.5vw)]">
                <li>1.　One watch, gold.　(<span className="bg-red-100/30">金の腕時計1コ</span>)</li>
                <li>2.　One cigarette lighter, gold.　(<span className="bg-red-100/30">金のライター1コ</span>)</li>
                <li>3.　And a pack of cigarettes.　(タバコ1箱)</li>
              </ul>
              <div>実は、この金の時計とライターは冒頭でキートンの前に現れたソゼが使用しています。キートンはそれを見て、ため息をつきながらガクッと肩を落とします。</div>
              <div>さらに、トドメを刺される直前、キートンが「何時だ？」と聞いた際に、金の腕時計を確認するシーンがあります。</div>
              {/* <div>作中では他にもキントが何度かこの金の腕時計とライターを使用しているシーンがあります。</div> */}
              <div className="pt-[min(1vw)]">回想シーンでは、キントは<span className="bg-red-100/30">右腕に</span>銀色の腕時計をしていますが、これは<span className="bg-red-100/30">キントのミス</span>だと私は解釈しました。普通、右手につける場合はどうしても左手を使わざるを得ず、左手が不自由なキントにとっては難しいはずです。</div>
              <div className="pt-[min(1vw)]">また、冒頭のシーンでのソゼの声も伏線の一つです。ケビン・スペイシーの落ち着いた声がソゼにピッタリです。</div>
            </div>
            <div className="flex items-center justify-between pt-[min(6vw,60px)]">
              <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">キートンの「脚の感覚がないよ」という皮肉</div>
              <div className="font-ogg text-[min(1vw)]">ー ( 02 ) ー</div>
            </div>
            <div className="pt-[min(1.5vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
              <div>冒頭でキントがソゼだと知ったキートンは、キントの顔を見て<span className="bg-red-100/30">「脚の感覚がないよ」</span>とつぶやきます。</div>
              <div>これは、脚の不自由なキントを知っているキートンだからこそ、<span className="bg-red-100/30">皮肉めいた</span>言い方をしたのです。</div>
              <div>ただ、ここでは実際にキートンは脚を負傷しており、伏線と気づくのは難しかったですね。</div>
            </div>
            <div className="flex items-center justify-between pt-[min(6vw,60px)]">
              <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">キントの逮捕</div>
              <div className="font-ogg text-[min(1vw)]">ー ( 03 ) ー</div>
            </div>
            <div className="pt-[min(1.5vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
              <div>冒頭の密売船爆破シーンのあと、シーンは<span className="bg-red-100/30">取り調べ中のキント</span>へと移り変わります。</div>
              <div>そのあとで<span className="bg-red-100/30">他4人の逮捕シーン</span>と取り調べシーンが続きます。</div>
              <div>実はこれ、キントが他4人とは<span className="bg-red-100/30">異質の存在</span>であるという暗示（演出）なのです。</div>
              <div className="pt-[min(1vw)]">また、キント(ソゼ)は、自身に借りのある者たち4人を利用して密売船爆破事件を遂行しました。</div>
              <div>のちにキントがクイヤンに話した通り、ソゼは自身の妻子を襲ったハンガリー人の妻子や両親、その友人を殺し、彼らの家や勤務先の店を焼き、さらには彼らに借金してた者たちまで殺すような男です。</div>
              <div>そして、密売船にはソゼの顔を知っている唯一の男であるアトゥーロが乗っていました。キントとしては、この男が密売船でトルコに密航される前に殺す必要がありました。</div>
              <div>殺害のために、暗殺部隊を送ることも可能でしたが、彼はあえて彼に借りのある4人を利用し、彼らも殺すことにしました。つまり、キントは4人を利用するためにわざと逮捕され、アトゥーロを殺害し、密売船爆破計画に利用した4人も消すことに成功したのです。</div>
              <div>しかし、それであればその後逮捕される必要はなかったはずです。そのまま姿を消せばよかったにも関わらず、なぜキントは逮捕され、クイヤンの尋問を受けたのでしょうか？</div>
              <div>それは、密売船爆破事件の詳細などといった警察のもつ内部情報を握るためだったのです。</div>
              <div>実際に、今回の爆破事件ではキント以外に火傷を負ったハンガリー人が生き残っていました。彼からソゼの名が警察に知れることとなり、クイヤンにソゼの名を問われたキントは怒りをあらわにします。</div>
              <div>ここで彼は自分以外に生存者がいて、</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-[min(12vw,120px)]">
          <div className="text-[min(4vw,50px)] font-zen-old-mincho">本作のポイントを3つ解説</div>
          <div className="pt-[min(1.5vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">ここからは、本作の魅力について3つのポイントを解説します。</div>
        </div>
        <div className="flex flex-col pt-[min(5vw,50px)]">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">ケビン・スペイシーが不可欠な脚本</div>
            <div className="font-ogg text-[min(1vw)]">[ Point 01 ]</div>
          </div>
          <div className="pt-[min(1.5vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
            <div>本作品の脚本を制作したクリストファー・マッカリー（Christopher McQuarrie, 以下クリス）は、初めからカイザー・ソゼをケビン・スペイシー（Kevin Spacey, 以下ケビン）に<span className="bg-red-100/30">当て書きした</span>そうです。</div>
            <div>というのも、とある試写会でケビンはクリスに「一緒に仕事をしたい」と声をかけてきたそうです。当時、ケビンは<span className="bg-red-100/30">それほど有名ではなかった</span>ことで正体を隠してヴァーバル・キントを演じるカイザー・ソゼには丁度良かったのです。さらに、クリスたちは『Glengarry Glen Ross』でのケビンが大好きだったため、きっと素晴らしいだろうと思ったそうです。クリスは後に「ヴァーバルのようなトリックスターの黒幕には、<span className="bg-red-100/30">彼のずる賢さと楽しさがぴったり</span>なんだ」と語っています。</div>
            <div>ケビン・スペイシーはカイザー・ソゼ（ヴァーバル・キント）の完璧な適役であり、本作に必要不可欠な絶対的な存在だったのです！</div>
          </div>
        </div>
        <div className="flex flex-col pt-[min(7vw,70px)]">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">ラスト 3 分、衝撃の結末...!</div>
            <div className="font-ogg text-[min(1vw)]">[ Point 02 ]</div>
          </div>
          <div className="pt-[min(2vw)] text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
            <div>本作のラスト約3分間（1:39:20〜1:42:37あたり）においてクイヤンは、それまでのキントの証言が掲示板に貼られたワードから引っ張ってきて<span className="bg-red-100/30">でっち上げられたデタラメ</span>だったことに気づきます。</div>
            <div>事実の中に絶妙に否定できないような嘘の話を散りばめる手法は上手い騙し方ですね。しかも、それをあの部屋で<span className="bg-red-100/30">即興で</span>できてしまうのだから、キントの<span className="bg-red-100/30">頭の回転の良さ（臨機応変さ）</span>がうかがえます。</div>
            <div>本作のクライマックスは、クリスの素晴らしい脚本とブライアン・シンガー監督（Bryan Singer, 以下ブライアン）による巧妙なトリックと構成がかけ合わさって、凝縮された怒涛の3分間となっています。</div>
            <div>というのも、クリスは50ページほど脚本を書き上げた後で、ブライアンに電話をかけてきたそうです。「<span className="bg-red-100/30">悪役が掲示板から物語を全部引っ張ってきたら</span>どうする？」と。そしてブライアンは「それこそ、超最高の映画を作る理由だ！」と答えました。</div>
            <div>「掲示板から物語を引っ張ってくる」というアイディアから、こんなにも秀逸なストーリーを書き上げてしまうクリスには感服します。このユーモアも本作の魅力だといえます。</div>
          </div>
        </div>
        <div className="flex flex-col pt-[min(7vw,70px)]">
          <div className="flex items-center justify-between">
            <div className="text-[min(2.5vw,40px)] font-zen-old-mincho">警察(<span className="text-[min(1.8vw)]">&</span>観客) を欺いた原因は ”思い込み”</div>
            <div className="font-ogg text-[min(1vw)]">[ Point 03 ]</div>
          </div>
          <div className="pt-[min(2vw)] text-[min(1.5vw,24px)] font-zen-old-mincho w-5/6">
            <div>キントが「警察は現実的だ」と言っていたように、警察としては障害を抱えたキントがまさかカイザー・ソゼだなんて考えもしなかったでしょう。</div>
            <div>それは「身体障害者にそんなことできないよ」と考えていたというよりも、もはやそこまで考えてすらおらず、<span className="bg-red-100/30">潜在的にそう認識していた</span>んだと思われます。</div>
            <div>たとえば、あなたが道端で車椅子のおじさんを見かけたとします。あるとき、突然その方が平然と自力で立ち上がり、闊歩することを誰が想像できるでしょうか。普通、そんなことが起こったら誰しもが驚くはずです（「え、あの車椅子のおっちゃん立ち上がった!? しかも歩き出したぞおい!?」というように）。</div>
            <div>そのように私たち人間は、見かけなどの情報に結び付けられた “固定観念” によって “<span className="bg-red-100/30">思い込む</span>” のです。</div>
          </div>
        </div>
      </div>
      <div className="bg-black-200 flex flex-col text-yellow-200 tracking-wider h-fit px-[min(10vw)] py-[min(8vw)]">
        <div className="flex flex-col">
          <div className="text-[min(4vw,50px)] max-w-sm mx-auto font-ogg">Trivia</div>
          <div className="pt-[min(3vw)] flex flex-col text-[min(1.5vw,24px)] font-zen-old-mincho">
            <div>本作品の脚本を制作したクリストファー・マッカリー（Christopher McQuarrie, 以下クリス）は、初めからカイザー・ソゼをケビン・スペイシー（Kevin Spacey, 以下ケビン）に<span className="font-semibold">当て書きした</span>そうです。</div>
          </div>
        </div>
      </div>
      <div className="bg-white-200 grid grid-cols-2 py-[min(12vw)] text-black-200 font-ogg px-[min(10vw)]">
        <div className="text-[min(5vw,60px)] font-ogg flex items-center tracking-widest">The End</div>
        <div className="text-[min(1.5vw,20px)] font-zen-old-mincho">個人的には、主演のケビン・スペイシー(Kevin Spacey)が好きなので、見た後にさらに好きになれました。終わり方までスタイリッシュでかっこよく、伏線を含めた全体の構成もしっかりしていてかなりお気に入りの作品です。結末や伏線を知ったあとでも、何度も見たくなりますね。</div>
      </div>
      {/* TODO:
        1. これはスティッキーボタンにする (KentaToshikuraのcodePen & NEXAL参考)
        2. ホバーアニメーションを追加する (NEXALのホバーアニメーション参考)
      */}
      <div className="bg-black-100 flex items-center justify-between text-white-200 font-ogg text-[min(4vw)] tracking-wider h-fit pt-[min(8vw)] pb-[min(16vw)] px-[min(10vw)]">
        <button className="border rounded-full w-[min(6vw)] h-[min(6vw)] hover:w-[min(15vw)] hover:h-[min(15vw)] pl-[min(8vw)] pt-[min(8vw)] hover:pl-0 hover:pt-0 hover:bg-white-200 hover:text-black-100 duration-700">Prev</button>
        <button className="border rounded-full w-[min(6vw)] h-[min(6vw)] hover:w-[min(15vw)] hover:h-[min(15vw)] pr-[min(8vw)] pt-[min(8vw)] hover:pr-0 hover:pt-0 hover:bg-white-200 hover:text-black-100 duration-500">Next</button>
      </div>
    </>
  );
}
