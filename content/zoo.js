// 動物園の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '動物園',
  title: 'はじめての 動物園',
  intro: '日曜日に 家族と 動物園へ 来ました。',
  art: 'zoo'
});

Manners.questions.push(
  {
    id: 'zoo-1',
    category: '動物園',
    scene: 'ゾウの 前に「えさを あげないで」の 札。手に おかしが ある。',
    art: 'zoo',
    question: 'おかしは？',
    choices: ['あげずに、しまって おく', 'ゾウに 投げて あげる', 'さくの すき間から 手で あげる'],
    answer: 0,
    explain: '人の 食べ物で 動物が 病気に なる ことが あります。決められた えさ 以外は あげません。'
  },
  {
    id: 'zoo-2',
    category: '動物園',
    scene: 'ライオンが ねて いる。こっちを 向いて ほしい。',
    art: 'zoo',
    question: 'どう する？',
    choices: ['ガラスを たたいて 起こす', '静かに 待って 見る', '大声で 呼ぶ'],
    answer: 1,
    explain: 'たたく 音や 大声は 動物を こわがらせます。'
  },
  {
    id: 'zoo-3',
    category: '動物園',
    scene: 'うす暗い 夜の 動物の 部屋。写真を とりたい。',
    art: 'zoo',
    question: 'とる ときは？',
    choices: ['フラッシュを たいて とる', 'ライトで 動物を 照らす', 'フラッシュを 消して とる'],
    answer: 2,
    explain: '強い 光は 動物の 目を いためます。暗い 部屋では フラッシュを 使いません。'
  },
  {
    id: 'zoo-4',
    category: '動物園',
    scene: 'さくの 向こうに キリン。もっと 近くで 見たい。',
    art: 'zoo',
    question: '近くで 見るには？',
    choices: ['さくの 外から 見る', 'さくに よじ登る', 'さくを くぐって 入る'],
    answer: 0,
    explain: 'さくは 人と 動物の 両方を 守る ための もの です。'
  },
  {
    id: 'zoo-5',
    category: '動物園',
    scene: 'ふれあい広場で ウサギを だっこ できる。',
    art: 'zoo',
    question: 'だっこの しかたは？',
    choices: ['耳を つかんで 持ち上げる', '係の 人に 教わった とおり、そっと だく', '走って 追いかけて つかまえる'],
    answer: 1,
    explain: '小さな 動物は 強く つかむと けがを します。係の 人の 言う とおりに さわります。'
  },
  {
    id: 'zoo-6',
    category: '動物園',
    scene: 'ふれあい広場で 動物に さわった。',
    art: 'zoo',
    question: 'さわった あとは？',
    choices: ['そのまま おにぎりを 食べる', '服で 手を ふく', 'せっけんで 手を 洗う'],
    answer: 2,
    explain: '動物には 目に 見えない 菌が います。食べる 前に かならず 手を 洗います。'
  },
  {
    id: 'zoo-7',
    category: '動物園',
    scene: '人気の パンダの 前が こんで いる。',
    art: 'zoo',
    question: 'どう する？',
    choices: ['少し 見たら、うしろの 人と 代わる', 'いちばん 前で ずっと 見続ける', '人を 押して 前に 出る'],
    answer: 0,
    explain: 'みんな 見たいと 思って います。ゆずりあって 見ます。'
  },
  {
    id: 'zoo-8',
    category: '動物園',
    scene: '飲み終わった ジュースの 入れ物が ある。',
    art: 'zoo',
    question: '入れ物は？',
    choices: ['さくの 中に 投げ入れる', 'ごみ箱に 捨てるか、持ち帰る', 'ベンチに 置いて 行く'],
    answer: 1,
    explain: '動物が ごみを 飲みこむと 命に かかわります。'
  },
  {
    id: 'zoo-9',
    category: '動物園',
    scene: 'サルの 山の 前。サルが こっちを 見て いる。',
    art: 'zoo',
    question: 'サルの 前では？',
    choices: ['じっと 目を 見つめて 歯を 見せる', '食べ物を 見せびらかす', '落ち着いて 静かに 見る'],
    answer: 2,
    explain: 'サルは 目を 見つめられたり 歯を 見せられたり すると、けんかの 合図だと 思います。'
  },
  {
    id: 'zoo-10',
    category: '動物園',
    scene: 'お昼に なった。お弁当を 食べたい。',
    art: 'zoo',
    question: 'どこで 食べる？',
    choices: ['動物の さくの 前で 食べる', '決められた 休む 場所で 食べる', '歩きながら 食べる'],
    answer: 1,
    explain: '決められた 場所で 食べると、動物に 食べ物を 取られたり、ごみを 落としたり しません。'
  }
);
