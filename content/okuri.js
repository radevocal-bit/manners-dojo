// 贈り物の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '贈り物',
  title: 'はじめての手みやげ',
  intro: '友だちの家に招かれました。手みやげを持って行きます。',
  art: 'gift'
});

Manners.questions.push(
  {
    id: 'okuri-1',
    category: '贈り物',
    scene: '友だちの家の玄関であいさつをした。手に手みやげを持っている。',
    art: 'gift',
    question: 'いつわたす？',
    choices: ['玄関に入る前に押しつける', '部屋に通されてあいさつをしてからわたす', '帰るときにだまって置いていく'],
    answer: 1,
    explain: '部屋で落ち着いてからわたすと、ていねいです。'
  },
  {
    id: 'okuri-2',
    category: '贈り物',
    scene: '手みやげは紙袋に入っている。',
    art: 'gift',
    question: 'わたすときは？',
    choices: ['紙袋から出してわたす', '紙袋ごと投げるようにわたす', '紙袋に入れたまま床に置く'],
    answer: 0,
    explain: '紙袋は持ち運ぶための物です。品物を出して、相手に向けてわたします。'
  },
  {
    id: 'okuri-3',
    category: '贈り物',
    scene: '手みやげをわたす。',
    art: 'gift',
    question: 'どうわたす？',
    choices: ['片手でさっとわたす', '品物の正面を自分に向けてわたす', '品物の正面を相手に向けて両手でわたす'],
    answer: 2,
    explain: '相手がすぐ見られる向きで、両手でていねいにわたします。'
  },
  {
    id: 'okuri-4',
    category: '贈り物',
    scene: '手みやげをわたすとき、ひとこと言う。',
    art: 'gift',
    question: '何と言う？',
    choices: ['「お口に合えばうれしいです」', '「高かったんですよ」', '何も言わない'],
    answer: 0,
    explain: '相手のことを考えたひとことで、気持ちが伝わります。'
  },
  {
    id: 'okuri-5',
    category: '贈り物',
    scene: 'お祝いの品物をもらった。',
    art: 'gift',
    question: 'お礼は？',
    choices: ['何もしない', '1年たってから言う', 'すぐにお礼を伝える'],
    answer: 2,
    explain: 'もらったこととうれしい気持ちを、早めに伝えます。'
  },
  {
    id: 'okuri-6',
    category: '贈り物',
    scene: '結婚祝いをもらった。お返しをする。',
    art: 'gift',
    question: 'お返しの目安は？',
    choices: ['もらった物の半分くらいの物', 'もらった物の3倍の物', 'お返しはしない'],
    answer: 0,
    explain: 'お返しは「半返し」が目安です。高すぎると、相手が気を使います。'
  },
  {
    id: 'okuri-7',
    category: '贈り物',
    scene: '招かれた家には小さな子どもがいる。',
    art: 'gift',
    question: '手みやげは？',
    choices: ['お酒だけにする', 'みんなで食べられるお菓子にする', '大人だけが使う物にする'],
    answer: 1,
    explain: '家族みんながよろこぶ物をえらびます。'
  },
  {
    id: 'okuri-8',
    category: '贈り物',
    scene: '手みやげをまだ買っていない。行く日は明日だ。',
    art: 'gift',
    question: 'どうする？',
    choices: ['前もってえらんで用意しておく', '相手の家のすぐ近くの店で買う', '何も持たずに行く'],
    answer: 0,
    explain: '近くの店の物だと、間に合わせに見えます。前もってえらんだ物の方が気持ちが伝わります。'
  },
  {
    id: 'okuri-9',
    category: '贈り物',
    scene: 'お世話になった人に品物を送る。中身は生の魚だ。',
    art: 'gift',
    question: '送る前に？',
    choices: ['だまって送る', '1週間かかる方法で送る', '相手が受け取れる日をたしかめる'],
    answer: 2,
    explain: '生の物は早く受け取らないといたみます。'
  },
  {
    id: 'okuri-10',
    category: '贈り物',
    scene: 'プレゼントをもらった。あまり好きな物ではなかった。',
    art: 'gift',
    question: 'どうする？',
    choices: ['「いらない」と言う', '気持ちに感謝してお礼を言う', '目の前でほかの人にあげる'],
    answer: 1,
    explain: '品物だけでなく、えらんでくれた気持ちにお礼を言います。'
  }
);
