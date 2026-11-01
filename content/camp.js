// キャンプ場の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'キャンプ場',
  title: 'はじめてのキャンプ',
  intro: '週末に家族とキャンプ場へ来ました。',
  art: 'camp'
});

Manners.questions.push(
  {
    id: 'camp-1',
    category: 'キャンプ場',
    scene: 'キャンプ場に着いた。受付がある。',
    art: 'camp',
    question: '着いたらまず？',
    choices: ['受付で名前を言い、決まりを聞く', 'すぐに好きな場所にテントを張る', '車で草地の中まで入る'],
    answer: 0,
    explain: '受付で場所と決まりを聞くと、ほかの人とぶつからずに使えます。'
  },
  {
    id: 'camp-2',
    category: 'キャンプ場',
    scene: 'となりの区画との間に細い道がある。',
    art: 'camp',
    question: 'テントを張る場所は？',
    choices: ['となりの区画にはみ出す', '決められた自分の区画の中', '通る道のまん中'],
    answer: 1,
    explain: '区画を守ると、となりの人も道を通る人もこまりません。'
  },
  {
    id: 'camp-3',
    category: 'キャンプ場',
    scene: 'ばんごはんのあと、ごみがたくさん出た。',
    art: 'camp',
    question: 'ごみは？',
    choices: ['草むらにうめてかくす', 'たき火で全部燃やす', '分けて決められた所に出すか、持ち帰る'],
    answer: 2,
    explain: 'ごみを残すと、動物が荒らしたり、次の人がいやな思いをしたりします。'
  },
  {
    id: 'camp-4',
    category: 'キャンプ場',
    scene: 'たき火をしたい。',
    art: 'camp',
    question: 'たき火はどこで？',
    choices: ['たき火台を使い、決められた場所でする', '芝生の上に直接火をつける', 'テントのすぐそばでする'],
    answer: 0,
    explain: '芝生に直接火をつけると地面がこげます。テントのそばは燃え移ってあぶないです。'
  },
  {
    id: 'camp-5',
    category: 'キャンプ場',
    scene: '夜おそくなった。まわりのテントは静か。',
    art: 'camp',
    question: '夜は？',
    choices: ['大きな声で歌い続ける', '声を小さくして、音楽も止める', '車のエンジンをかけたままにする'],
    answer: 1,
    explain: 'テントの布は音を通します。消灯の時間のあとは静かにすごします。'
  },
  {
    id: 'camp-6',
    category: 'キャンプ場',
    scene: '炊事場で食器を洗う。',
    art: 'camp',
    question: '洗うときは？',
    choices: ['残ったごはんを流しにそのまま流す', '水を出しっぱなしにする', '残りをふき取ってから、手早く洗う'],
    answer: 2,
    explain: '食べ残しを流すと流しがつまります。みんなで使う場所なので手早く洗います。'
  },
  {
    id: 'camp-7',
    category: 'キャンプ場',
    scene: 'たき火が終わった。もうねる。',
    art: 'camp',
    question: '火は？',
    choices: ['水をかけて、完全に消えたのを確かめる', '自然に消えるまで放っておく', '砂を少しかけてすぐねる'],
    answer: 0,
    explain: '残った火から火事になることがあります。水でしっかり消します。'
  },
  {
    id: 'camp-8',
    category: 'キャンプ場',
    scene: '近くの林に花がたくさん咲いている。',
    art: 'camp',
    question: '花は？',
    choices: ['きれいなのでつんで持ち帰る', '見るだけにして、そのままにしておく', '枝ごと折ってかざる'],
    answer: 1,
    explain: '自然の花や木はみんなのものです。とらずに残します。'
  },
  {
    id: 'camp-9',
    category: 'キャンプ場',
    scene: 'となりの区画を通ると近道になる。',
    art: 'camp',
    question: '通るときは？',
    choices: ['テントのロープをまたいで通る', 'だまってよその区画を横切る', 'よその区画は通らず、道を歩く'],
    answer: 2,
    explain: '区画はその人の場所です。ロープに足をかけるとテントがこわれます。'
  },
  {
    id: 'camp-10',
    category: 'キャンプ場',
    scene: '帰る日の朝。テントをたたんだ。',
    art: 'camp',
    question: '帰る前に？',
    choices: ['そのまま車に乗って帰る', 'ごみや忘れ物がないか見て、来た時よりきれいにする', 'ペグを地面に残しておく'],
    answer: 1,
    explain: '来た時よりきれいにすると、次の人も気持ちよく使えます。'
  }
);
