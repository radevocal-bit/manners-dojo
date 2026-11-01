// プールの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'プール',
  title: 'はじめての市民プール',
  intro: '夏休みに友だちと市民プールへ来ました。',
  art: 'pool'
});

Manners.questions.push(
  {
    id: 'pool-1',
    category: 'プール',
    scene: 'プールに入る前。',
    art: 'pool',
    question: '入る前に？',
    choices: ['シャワーをあびて体を洗う', 'そのままとびこむ', '日焼け止めをたっぷりぬる'],
    answer: 0,
    explain: '体のよごれを落としてから入ると、水をきれいに保てます。'
  },
  {
    id: 'pool-2',
    category: 'プール',
    scene: 'プールサイドを歩いている。床がぬれている。',
    art: 'pool',
    question: '歩くときは？',
    choices: ['走って急ぐ', 'ゆっくり歩く', '友だちを押してふざける'],
    answer: 1,
    explain: 'ぬれた床はすべりやすいです。走るところんでけがをします。'
  },
  {
    id: 'pool-3',
    category: 'プール',
    scene: '泳ぐコースがいくつかある。',
    art: 'pool',
    question: 'コースでは？',
    choices: ['ロープをくぐって横に泳ぐ', '人の前に急に入る', '決められた向きで泳ぐ'],
    answer: 2,
    explain: 'コースの向きを守ると、人とぶつかりません。'
  },
  {
    id: 'pool-4',
    category: 'プール',
    scene: 'かみの毛が長い。',
    art: 'pool',
    question: 'かみの毛は？',
    choices: ['水泳ぼうしの中に入れる', 'そのまま広げて泳ぐ', '水の中でほどく'],
    answer: 0,
    explain: 'かみの毛が水に散らないように、水泳ぼうしをかぶります。'
  },
  {
    id: 'pool-5',
    category: 'プール',
    scene: '監視員さんが笛をふいた。',
    art: 'pool',
    question: 'どうする？',
    choices: ['聞こえないふりをする', '止まって監視員さんの話を聞く', 'もっと遠くまで泳ぐ'],
    answer: 1,
    explain: '監視員さんはみんなの安全を見ています。注意にはすぐしたがいます。'
  },
  {
    id: 'pool-6',
    category: 'プール',
    scene: '浅い所でとびこみたくなった。',
    art: 'pool',
    question: 'とびこみは？',
    choices: ['頭からとびこむ', '友だちの上にとびこむ', 'とびこまずに、足から静かに入る'],
    answer: 2,
    explain: '浅い所でとびこむと、頭を打って大けがをします。'
  },
  {
    id: 'pool-7',
    category: 'プール',
    scene: '休むためにプールサイドに上がった。',
    art: 'pool',
    question: '休むときは？',
    choices: ['通る道をあけて休む', '通路にねころぶ', '荷物を通路に広げる'],
    answer: 0,
    explain: 'プールサイドはみんなが通ります。じゃまにならない所で休みます。'
  },
  {
    id: 'pool-8',
    category: 'プール',
    scene: '泳いでいたら少し気分が悪くなった。',
    art: 'pool',
    question: 'どうする？',
    choices: ['がまんして泳ぎ続ける', '水から上がり、監視員さんに知らせる', 'だれにも言わずにもぐる'],
    answer: 1,
    explain: '具合が悪いまま泳ぐとあぶないです。早めに大人に知らせます。'
  },
  {
    id: 'pool-9',
    category: 'プール',
    scene: '更衣室で着がえている。',
    art: 'pool',
    question: '更衣室では？',
    choices: ['ぬれたタオルを床に置いて行く', '大声でさわぐ', '体をふいて、ロッカーをきれいに使う'],
    answer: 2,
    explain: '次に使う人のために、床をぬらさずきれいに使います。'
  },
  {
    id: 'pool-10',
    category: 'プール',
    scene: 'ビーチボールで遊びたい。',
    art: 'pool',
    question: 'ボール遊びは？',
    choices: ['泳いでいる人に向けて投げる', '遊んでよい時間と場所を守る', 'コースの中で投げあう'],
    answer: 1,
    explain: '泳いでいる人に当たるとあぶないです。決まりを守って遊びます。'
  }
);
