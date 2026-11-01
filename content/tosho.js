// 図書館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '図書館',
  title: 'はじめての図書館',
  intro: '近所の図書館で本を借りることにしました。',
  art: 'library'
});

Manners.questions.push(
  {
    id: 'tosho-1',
    category: '図書館',
    scene: '図書館に入った。友だちといっしょだ。',
    art: 'library',
    question: '友だちと話すときは？',
    choices: ['ふつうの声で話す', '小さな声で短く話す', '大きな声で名前を呼ぶ'],
    answer: 1,
    explain: '図書館は静かに本を読む場所です。話すときは小さな声で短くします。'
  },
  {
    id: 'tosho-2',
    category: '図書館',
    scene: '本をさがしていたら、スマホに電話がかかってきた。',
    art: 'library',
    question: 'どうする？',
    choices: ['その場で出て話す', '出ないでそのまま鳴らしておく', '音を消して、外に出てからかけ直す'],
    answer: 2,
    explain: '中で話すと、まわりの人のじゃまになります。外に出てから話します。'
  },
  {
    id: 'tosho-3',
    category: '図書館',
    scene: '棚から出した本を読み終えた。どの棚にあったかわからない。',
    art: 'library',
    question: '読み終えた本は？',
    choices: ['返却台に置く', '近くの棚のあいている所に入れる', '机の上に置いたまま帰る'],
    answer: 0,
    explain: 'ちがう場所にもどすと、次の人が本を見つけられません。わからないときは返却台に置きます。'
  },
  {
    id: 'tosho-4',
    category: '図書館',
    scene: 'のどがかわいた。かばんにジュースがある。',
    art: 'library',
    question: 'どこで飲む？',
    choices: ['本を読みながら席で飲む', '本棚の前でこっそり飲む', '決められた場所や外で飲む'],
    answer: 2,
    explain: '本がよごれると、次の人が困ります。飲み物は決められた場所で飲みます。'
  },
  {
    id: 'tosho-5',
    category: '図書館',
    scene: '借りた本の大事な所に線を引きたくなった。',
    art: 'library',
    question: '線を引きたいときは？',
    choices: ['メモに書き写す', 'えんぴつで小さく線を引く', 'ページの角を折って印にする'],
    answer: 0,
    explain: '図書館の本はみんなの物です。書きこみや折り目をつけず、メモに書きます。'
  },
  {
    id: 'tosho-6',
    category: '図書館',
    scene: '席が少ししかあいていない。友だちがあとから来る。',
    art: 'library',
    question: '席は？',
    choices: ['かばんを置いて2つ取る', '自分が使う1つだけにする', '友だちの分も本で取っておく'],
    answer: 1,
    explain: '席はみんなで使う物です。自分がすわる分だけ使います。'
  },
  {
    id: 'tosho-7',
    category: '図書館',
    scene: '返す日が明日だが、まだ読み終わっていない。',
    art: 'library',
    question: '読み終わらないときは？',
    choices: ['返す日をすぎてもだまって読む', '読み終わるまで図書館に来ない', '図書館に聞いて、借りる日をのばせるかたのむ'],
    answer: 2,
    explain: '本を待っている人がいるかもしれません。返す日は守り、のばしたいときは図書館に聞きます。'
  },
  {
    id: 'tosho-8',
    category: '図書館',
    scene: '本を読んでいたら、ページが少しやぶれてしまった。',
    art: 'library',
    question: 'やぶれたときは？',
    choices: ['カウンターに持って行き、正直に言う', 'テープで自分ではって返す', 'だまって棚にもどす'],
    answer: 0,
    explain: '図書館の本はなおし方が決まっています。自分で直さず、正直に伝えます。'
  },
  {
    id: 'tosho-9',
    category: '図書館',
    scene: 'となりの人が読んでいる本がおもしろそうだ。',
    art: 'library',
    question: '読みたくなったら？',
    choices: ['横からのぞきこんで読む', '自分で同じ本をさがす', '声をかけて本を見せてもらう'],
    answer: 1,
    explain: '読んでいる人のじゃまをしないようにします。気になる本は自分でさがします。'
  },
  {
    id: 'tosho-10',
    category: '図書館',
    scene: '帰る時間になった。机の上に読んだ本と消しゴムのかすがある。',
    art: 'library',
    question: '帰る前に？',
    choices: ['本は返却台へ、かすは持ち帰る', 'そのまま帰る', '本は机に置いて、かすだけはらう'],
    answer: 0,
    explain: '次の人が気持ちよく使えるように、机の上をきれいにして帰ります。'
  }
);
