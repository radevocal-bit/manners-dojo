// 公園の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '公園',
  title: '日曜の公園',
  intro: '天気のよい日曜日。近所の公園へ出かけました。',
  art: 'park'
});

Manners.questions.push(
  {
    id: 'koen-1',
    category: '公園',
    scene: 'ベンチでおにぎりを食べた。ごみが出た。',
    art: 'park',
    question: 'ごみは？',
    choices: ['ベンチの下に置いて帰る', '持って帰る', '植えこみにかくす'],
    answer: 1,
    explain: '公園のごみは、出した人が持ち帰ります。'
  },
  {
    id: 'koen-2',
    category: '公園',
    scene: '空いているベンチに座った。荷物が多い。',
    art: 'park',
    question: '荷物は？',
    choices: ['となりの席に広げる', 'ベンチを1人で全部使う', '足もとやひざの上に置く'],
    answer: 2,
    explain: 'ベンチはみんなで使う物です。ほかの人も座れるようにします。'
  },
  {
    id: 'koen-3',
    category: '公園',
    scene: '犬の散歩をしている。犬がふんをした。',
    art: 'park',
    question: 'ふんは？',
    choices: ['ふくろに取って持ち帰る', 'そのまま歩いていく', '土をかけておく'],
    answer: 0,
    explain: 'ふんは飼い主が取って持ち帰ります。'
  },
  {
    id: 'koen-4',
    category: '公園',
    scene: 'すべり台に子どもたちが並んでいる。自分の子どもも遊びたい。',
    art: 'park',
    question: 'どうする？',
    choices: ['列の前に入れる', '列のうしろに並ばせる', '下からのぼらせる'],
    answer: 1,
    explain: '遊具は順番に使います。'
  },
  {
    id: 'koen-5',
    category: '公園',
    scene: '子どもとボール遊びをしたい。まわりに小さな子が遊んでいる。',
    art: 'park',
    question: 'どこでする？',
    choices: ['小さな子のそばで強く投げる', '花だんの中でする', 'ボール遊びができる広場でする'],
    answer: 2,
    explain: 'ボールが当たるとあぶないです。決められた場所で遊びます。'
  },
  {
    id: 'koen-6',
    category: '公園',
    scene: '公園の水道で手をあらった。',
    art: 'park',
    question: '水は？',
    choices: ['出しっぱなしにする', '強く出して遊ぶ', 'ちゃんと止める'],
    answer: 2,
    explain: '水はみんなの物です。使ったら止めます。'
  },
  {
    id: 'koen-7',
    category: '公園',
    scene: '花だんにきれいな花がさいている。',
    art: 'park',
    question: '花は？',
    choices: ['見て楽しむ', '1本つんで持ち帰る', '花だんに入って写真をとる'],
    answer: 0,
    explain: '花はみんなが楽しむために育てています。つまずに見て楽しみます。'
  },
  {
    id: 'koen-8',
    category: '公園',
    scene: '夜、公園で友だちと話している。近くに家がある。',
    art: 'park',
    question: '話すときは？',
    choices: ['大きな声でさわぐ', '声を小さくする', '音楽を大きく流す'],
    answer: 1,
    explain: '夜は近くの家の人が休んでいます。静かに話します。'
  },
  {
    id: 'koen-9',
    category: '公園',
    scene: '自転車で公園に来た。',
    art: 'park',
    question: '自転車は？',
    choices: ['自転車置き場にとめる', '入口のまん中にとめる', '公園の中を速く走る'],
    answer: 0,
    explain: '通る人のじゃまにならないように、決められた場所にとめます。'
  },
  {
    id: 'koen-10',
    category: '公園',
    scene: '公園で花火をしたくなった。',
    art: 'park',
    question: '花火は？',
    choices: ['公園の決まりを見て、できる所でする', 'どこでもしてよい', '夜中にこっそりする'],
    answer: 0,
    explain: '花火ができない公園もあります。決まりをたしかめます。'
  }
);
