// 美術館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '美術館',
  title: 'はじめての 美術館',
  intro: '休みの 日に、美術館へ 絵を 見に 行きます。',
  art: 'museum'
});

Manners.questions.push(
  {
    id: 'bijutsu-1',
    category: '美術館',
    scene: '入口で チケットを 買った。大きな リュックを 背負って いる。',
    art: 'museum',
    question: 'リュックは？',
    choices: ['背負った まま 見て 回る', 'コインロッカーに 預ける', '床に 置いて おく'],
    answer: 1,
    explain: '大きな 荷物は 作品や 人に ぶつかる ことが あります。ロッカーに 預けてから 見ます。'
  },
  {
    id: 'bijutsu-2',
    category: '美術館',
    scene: '好きな 絵の 前に 来た。近くで よく 見たい。',
    art: 'museum',
    question: 'どう 見る？',
    choices: ['指で さわって たしかめる', 'ロープを こえて 近づく', '線の 外から 見る'],
    answer: 2,
    explain: '作品は とても 大切な 物です。さわらずに、決められた 線の 外から 見ます。'
  },
  {
    id: 'bijutsu-3',
    category: '美術館',
    scene: '絵の 写真を 撮りたく なった。',
    art: 'museum',
    question: '写真は？',
    choices: ['撮って よいか 表示を たしかめる', 'フラッシュを たいて 撮る', '係の 人に だまって 撮る'],
    answer: 0,
    explain: '撮影できない 作品も あります。撮れる 所でも、フラッシュは 使いません。'
  },
  {
    id: 'bijutsu-4',
    category: '美術館',
    scene: '人気の 絵の 前に 人が 集まって いる。',
    art: 'museum',
    question: 'どう する？',
    choices: ['人を 押して 前に 出る', '順に 少しずつ 進む', '前の 人の 頭の 上に スマホを 出す'],
    answer: 1,
    explain: 'みんなが 見たい 絵です。流れに そって、順に 少しずつ 進みます。'
  },
  {
    id: 'bijutsu-5',
    category: '美術館',
    scene: '気に なった ことを メモしたい。かばんに ペンと えんぴつが ある。',
    art: 'museum',
    question: 'メモは？',
    choices: ['ペンで 書く', '作品の 横の かべに 書く', 'えんぴつで 書く'],
    answer: 2,
    explain: 'ペンの インクは 作品を よごす ことが あります。美術館では えんぴつを 使います。'
  },
  {
    id: 'bijutsu-6',
    category: '美術館',
    scene: 'となりの 部屋から 子どもの 走る 音が する。自分の 子どもも 走りたそうだ。',
    art: 'museum',
    question: '子どもには？',
    choices: ['走らない ように 手を つなぐ', '好きに 走らせる', '大きな 声で しかる'],
    answer: 0,
    explain: '走ると 作品や 人に ぶつかります。手を つないで、静かに 歩きます。'
  },
  {
    id: 'bijutsu-7',
    category: '美術館',
    scene: '外は 雨だった。ぬれた かさを 持って いる。',
    art: 'museum',
    question: 'かさは？',
    choices: ['かさ立てや ロッカーに 置く', '持った まま 見て 回る', '作品の 前に 立てかける'],
    answer: 0,
    explain: 'ぬれた かさは 床や 作品を ぬらします。入口で かさ立てや ロッカーに 置きます。'
  },
  {
    id: 'bijutsu-8',
    category: '美術館',
    scene: '絵を 見て いる 人の 前を 通りたい。',
    art: 'museum',
    question: '通る ときは？',
    choices: ['絵と 人の 間を さっと 通る', '人の うしろを 通る', '「どいて」と 言う'],
    answer: 1,
    explain: '見て いる 人の じゃまに ならない ように、うしろを 通ります。'
  },
  {
    id: 'bijutsu-9',
    category: '美術館',
    scene: '音声ガイドを 借りた。',
    art: 'museum',
    question: '聞く ときは？',
    choices: ['スピーカーで 流す', '大きな 声で くり返す', 'イヤホンで 聞く'],
    answer: 2,
    explain: '音は まわりの 人の じゃまに なります。イヤホンで 聞きます。'
  },
  {
    id: 'bijutsu-10',
    category: '美術館',
    scene: '見終わった。入口で 預けた ロッカーに 荷物が ある。',
    art: 'museum',
    question: '帰る 前に？',
    choices: ['荷物を 出して、鍵を 返す', '荷物を 置いた まま 帰る', '鍵を 持って 帰る'],
    answer: 0,
    explain: 'ロッカーは 次の 人も 使います。荷物を 出して、鍵を 返してから 帰ります。'
  }
);
