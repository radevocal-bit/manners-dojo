// 美術館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '美術館',
  title: 'はじめての美術館',
  intro: '休みの日に、美術館へ絵を見に行きます。',
  art: 'museum'
});

Manners.questions.push(
  {
    id: 'bijutsu-1',
    category: '美術館',
    scene: '入口でチケットを買った。大きなリュックを背負っている。',
    art: 'museum',
    question: 'リュックは？',
    choices: ['背負ったまま見て回る', 'コインロッカーに預ける', '床に置いておく'],
    answer: 1,
    explain: '大きな荷物は作品や人にぶつかることがあります。ロッカーに預けてから見ます。'
  },
  {
    id: 'bijutsu-2',
    category: '美術館',
    scene: '好きな絵の前に来た。近くでよく見たい。',
    art: 'museum',
    question: 'どう見る？',
    choices: ['指でさわってたしかめる', 'ロープをこえて近づく', '線の外から見る'],
    answer: 2,
    explain: '作品はとても大切な物です。さわらずに、決められた線の外から見ます。'
  },
  {
    id: 'bijutsu-3',
    category: '美術館',
    scene: '絵の写真を撮りたくなった。',
    art: 'museum',
    question: '写真は？',
    choices: ['撮ってよいか表示をたしかめる', 'フラッシュをたいて撮る', '係の人にだまって撮る'],
    answer: 0,
    explain: '撮影できない作品もあります。撮れる所でも、フラッシュは使いません。'
  },
  {
    id: 'bijutsu-4',
    category: '美術館',
    scene: '人気の絵の前に人が集まっている。',
    art: 'museum',
    question: 'どうする？',
    choices: ['人を押して前に出る', '順に少しずつ進む', '前の人の頭の上にスマホを出す'],
    answer: 1,
    explain: 'みんなが見たい絵です。流れにそって、順に少しずつ進みます。'
  },
  {
    id: 'bijutsu-5',
    category: '美術館',
    scene: '気になったことをメモしたい。かばんにペンとえんぴつがある。',
    art: 'museum',
    question: 'メモは？',
    choices: ['ペンで書く', '作品の横のかべに書く', 'えんぴつで書く'],
    answer: 2,
    explain: 'ペンのインクは作品をよごすことがあります。美術館ではえんぴつを使います。'
  },
  {
    id: 'bijutsu-6',
    category: '美術館',
    scene: 'となりの部屋から子どもの走る音がする。自分の子どもも走りたそうだ。',
    art: 'museum',
    question: '子どもには？',
    choices: ['走らないように手をつなぐ', '好きに走らせる', '大きな声でしかる'],
    answer: 0,
    explain: '走ると作品や人にぶつかります。手をつないで、静かに歩きます。'
  },
  {
    id: 'bijutsu-7',
    category: '美術館',
    scene: '外は雨だった。ぬれたかさを持っている。',
    art: 'museum',
    question: 'かさは？',
    choices: ['かさ立てやロッカーに置く', '持ったまま見て回る', '作品の前に立てかける'],
    answer: 0,
    explain: 'ぬれたかさは床や作品をぬらします。入口でかさ立てやロッカーに置きます。'
  },
  {
    id: 'bijutsu-8',
    category: '美術館',
    scene: '絵を見ている人の前を通りたい。',
    art: 'museum',
    question: '通るときは？',
    choices: ['絵と人の間をさっと通る', '人のうしろを通る', '「どいて」と言う'],
    answer: 1,
    explain: '見ている人のじゃまにならないように、うしろを通ります。'
  },
  {
    id: 'bijutsu-9',
    category: '美術館',
    scene: '音声ガイドを借りた。',
    art: 'museum',
    question: '聞くときは？',
    choices: ['スピーカーで流す', '大きな声でくり返す', 'イヤホンで聞く'],
    answer: 2,
    explain: '音はまわりの人のじゃまになります。イヤホンで聞きます。'
  },
  {
    id: 'bijutsu-10',
    category: '美術館',
    scene: '見終わった。入口で預けたロッカーに荷物がある。',
    art: 'museum',
    question: '帰る前に？',
    choices: ['荷物を出して、鍵を返す', '荷物を置いたまま帰る', '鍵を持って帰る'],
    answer: 0,
    explain: 'ロッカーは次の人も使います。荷物を出して、鍵を返してから帰ります。'
  }
);
