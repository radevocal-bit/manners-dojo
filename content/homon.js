// 訪問のマナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '訪問',
  title: 'はじめての訪問',
  intro: '先輩とはじめて取引先の会社を訪ねる日。着いてから帰るまで気をつけることがたくさんあります。',
  art: 'building'
});

Manners.questions.push(
  {
    id: 'homon-1',
    category: '訪問',
    scene: '約束は午後2時。取引先のビルの前に着いた。',
    art: 'building',
    question: '受付に行くのはいつがよい？',
    choices: ['約束の30分前', '約束の5分前ごろ', '約束の時間を少しすぎてから'],
    answer: 1,
    explain: '早すぎると相手のじゃまになり、おくれるのは失礼です。建物には少し早めに着き、受付は5分前ごろにします。'
  },
  {
    id: 'homon-2',
    category: '訪問',
    scene: '寒い冬の日。コートを着たまま入口の前にいる。',
    art: 'building',
    question: 'コートはいつぬぐ？',
    choices: ['建物に入る前', '受付で名乗ってから', '応接室に入ってから'],
    answer: 0,
    explain: 'コートには外のほこりがついているので、建物に入る前にぬぎ、うら返しにたたんでうでにかけます。'
  },
  {
    id: 'homon-3',
    category: '訪問',
    scene: '応接室に通された。紙袋に入れた手土産を持っている。',
    art: 'room',
    question: '手土産はいつ渡す？',
    choices: ['受付ですぐ', '帰るときに紙袋ごと', 'あいさつがすんでから、紙袋から出して'],
    answer: 2,
    explain: '部屋であいさつがすんでから、紙袋から出し、相手から見て正面になる向きで渡します。'
  },
  {
    id: 'homon-4',
    category: '訪問',
    scene: '席につくと、お茶が出された。',
    art: 'room',
    question: '出されたお茶はいつ飲む？',
    choices: ['相手にすすめられてから', '出されたらすぐ', '一口も飲まない'],
    answer: 0,
    explain: '「どうぞ」とすすめられてからいただきます。すすめられなければ、話がひと区切りついたときにいただきます。'
  },
  {
    id: 'homon-5',
    category: '訪問',
    scene: '話が終わり、帰る時間。コートをうでにかけて出口へ向かう。',
    art: 'building',
    question: '帰るとき、コートはいつ着る？',
    choices: ['応接室で着てから出る', '建物の外に出てから', '受付の前で着る'],
    answer: 1,
    explain: '建物の外に出てから着るのが基本です。相手に「どうぞ」と言われたら、その場で着てもかまいません。'
  },
  {
    id: 'homon-6',
    category: '訪問',
    scene: '取引先の会社に着いた。受付がある。',
    art: 'building',
    question: '受付では何を伝える？',
    choices: ['「こんにちは」とだけ言う', '会社名と名前、約束の相手と時間を伝える', '担当の人を自分でさがしに行く'],
    answer: 1,
    explain: '受付の人がすぐ取りつげるようにするためです。'
  },
  {
    id: 'homon-7',
    category: '訪問',
    scene: '応接室でお茶を出してもらった。',
    art: 'room',
    question: 'お茶はどうする？',
    choices: ['すすめられたら「いただきます」と言って飲む', '出されてすぐ飲む', '手をつけずに帰る'],
    answer: 0,
    explain: '出してくれた人へのお礼の気持ちをあらわすためです。'
  },
  {
    id: 'homon-8',
    category: '訪問',
    scene: '相手と名刺を交換した。これから話をする。',
    art: 'room',
    question: 'もらった名刺は？',
    choices: ['すぐ名刺入れにしまう', 'ポケットに入れる', '話のあいだは机の上に置いておく'],
    answer: 2,
    explain: '名前をまちがえずに話せるようにします。帰るときにていねいにしまうのが正解です。'
  },
  {
    id: 'homon-9',
    category: '訪問',
    scene: '手みやげのおかしを持ってきた。',
    art: 'room',
    question: 'どうわたす？',
    choices: ['紙袋に入れたままわたす', '紙袋から出して、相手に向けてわたす', '机の上に置いておく'],
    answer: 1,
    explain: '紙袋は持ち運ぶための物です。'
  },
  {
    id: 'homon-10',
    category: '訪問',
    scene: '用件の話が終わった。',
    art: 'room',
    question: 'そのあとは？',
    choices: ['長居せず、お礼を言って帰る', '話が終わってもずっと話す', 'だまって帰る'],
    answer: 0,
    explain: '相手の時間を大切にするためです。'
  }
);
