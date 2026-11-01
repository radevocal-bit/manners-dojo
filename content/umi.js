// 海水浴の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '海水浴',
  title: 'はじめての海水浴',
  intro: '夏休みに家族と海へ来ました。',
  art: 'umi'
});

Manners.questions.push(
  {
    id: 'umi-1',
    category: '海水浴',
    scene: '海に着いた。浜に旗が立っている。',
    art: 'umi',
    question: '旗を見たら？',
    choices: ['旗の色を見て、泳いでよいか確かめる', '旗は気にせずすぐ泳ぐ', '旗をぬいて遊ぶ'],
    answer: 0,
    explain: '旗の色で、今泳いでよいかどうかがわかります。'
  },
  {
    id: 'umi-2',
    category: '海水浴',
    scene: 'すいている浜。パラソルを立てたい。',
    art: 'umi',
    question: '場所は？',
    choices: ['人のすぐ前に立てる', 'となりの人と間をあけて立てる', '通る道に立てる'],
    answer: 1,
    explain: '間をあけると、海が見えなくなったり、通れなくなったりしません。'
  },
  {
    id: 'umi-3',
    category: '海水浴',
    scene: '体についた砂をはらいたい。',
    art: 'umi',
    question: 'はらうときは？',
    choices: ['人のそばでタオルをふる', 'となりのシートの上ではらう', '人のいない方を向いてはらう'],
    answer: 2,
    explain: '風で砂が飛んで、人の目や食べ物に入ります。'
  },
  {
    id: 'umi-4',
    category: '海水浴',
    scene: '海に入る前。',
    art: 'umi',
    question: 'その前に？',
    choices: ['体操をして体をほぐす', 'おなかいっぱい食べてすぐ入る', 'いきなり遠くまで泳ぐ'],
    answer: 0,
    explain: '体をほぐしてから入ると、足がつったりしにくくなります。'
  },
  {
    id: 'umi-5',
    category: '海水浴',
    scene: '浮き輪で遊んでいたら、沖へ流されそう。',
    art: 'umi',
    question: 'どうする？',
    choices: ['もっと沖へ行ってみる', '手を振ってまわりに知らせる', 'だまってがまんする'],
    answer: 1,
    explain: '早く知らせると、ライフセーバーの人がすぐ助けに来られます。'
  },
  {
    id: 'umi-6',
    category: '海水浴',
    scene: 'ごみが出た。浜にごみ箱がない。',
    art: 'umi',
    question: 'ごみは？',
    choices: ['砂にうめる', '波打ちぎわに置く', '袋に入れて持ち帰る'],
    answer: 2,
    explain: 'ごみは波にさらわれて海をよごし、魚や鳥が飲みこみます。'
  },
  {
    id: 'umi-7',
    category: '海水浴',
    scene: 'バーベキューをしたい。',
    art: 'umi',
    question: 'どこでする？',
    choices: ['してよいと決められた場所でする', 'どこでも好きな所でする', '泳ぐ人のそばでする'],
    answer: 0,
    explain: '火やけむりはまわりの人のめいわくやけがのもとになります。'
  },
  {
    id: 'umi-8',
    category: '海水浴',
    scene: '花火を持ってきた。',
    art: 'umi',
    question: '花火は？',
    choices: ['夜おそくに大きな音でする', 'してよい場所と時間を確かめる', '人に向けてする'],
    answer: 1,
    explain: '花火が禁止の浜もあります。近くの家の人もねています。'
  },
  {
    id: 'umi-9',
    category: '海水浴',
    scene: 'ビーチボールで遊びたい。まわりに人が多い。',
    art: 'umi',
    question: 'どこで遊ぶ？',
    choices: ['人の間をぬって遊ぶ', 'ねている人のそばで遊ぶ', '人の少ない広い所で遊ぶ'],
    answer: 2,
    explain: 'ボールが当たると、けがをしたり物をこわしたりします。'
  },
  {
    id: 'umi-10',
    category: '海水浴',
    scene: 'シャワーを使う。うしろに人が並んでいる。',
    art: 'umi',
    question: 'どう使う？',
    choices: ['ゆっくり髪を洗い続ける', '砂を落としたら早めに代わる', '水を出したまま話す'],
    answer: 1,
    explain: '並んでいる人のために、手早く使って代わります。'
  }
);
