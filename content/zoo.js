// 動物園の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '動物園',
  title: 'はじめての動物園',
  intro: '日曜日に家族と動物園へ来ました。',
  art: 'zoo'
});

Manners.questions.push(
  {
    id: 'zoo-1',
    category: '動物園',
    scene: 'ゾウの前に「えさをあげないで」の札。手におかしがある。',
    art: 'zoo',
    question: 'おかしは？',
    choices: ['あげずに、しまっておく', 'ゾウに投げてあげる', 'さくのすき間から手であげる'],
    answer: 0,
    explain: '人の食べ物で動物が病気になることがあります。決められたえさ以外はあげません。'
  },
  {
    id: 'zoo-2',
    category: '動物園',
    scene: 'ライオンがねている。こっちを向いてほしい。',
    art: 'zoo',
    question: 'どうする？',
    choices: ['ガラスをたたいて起こす', '静かに待って見る', '大声で呼ぶ'],
    answer: 1,
    explain: 'たたく音や大声は動物をこわがらせます。'
  },
  {
    id: 'zoo-3',
    category: '動物園',
    scene: 'うす暗い夜の動物の部屋。写真をとりたい。',
    art: 'zoo',
    question: 'とるときは？',
    choices: ['フラッシュをたいてとる', 'ライトで動物を照らす', 'フラッシュを消してとる'],
    answer: 2,
    explain: '強い光は動物の目をいためます。暗い部屋ではフラッシュを使いません。'
  },
  {
    id: 'zoo-4',
    category: '動物園',
    scene: 'さくの向こうにキリン。もっと近くで見たい。',
    art: 'zoo',
    question: '近くで見るには？',
    choices: ['さくの外から見る', 'さくによじ登る', 'さくをくぐって入る'],
    answer: 0,
    explain: 'さくは人と動物の両方を守るためのものです。'
  },
  {
    id: 'zoo-5',
    category: '動物園',
    scene: 'ふれあい広場でウサギをだっこできる。',
    art: 'zoo',
    question: 'だっこのしかたは？',
    choices: ['耳をつかんで持ち上げる', '係の人に教わったとおり、そっとだく', '走って追いかけてつかまえる'],
    answer: 1,
    explain: '小さな動物は強くつかむとけがをします。係の人の言うとおりにさわります。'
  },
  {
    id: 'zoo-6',
    category: '動物園',
    scene: 'ふれあい広場で動物にさわった。',
    art: 'zoo',
    question: 'さわったあとは？',
    choices: ['そのままおにぎりを食べる', '服で手をふく', 'せっけんで手を洗う'],
    answer: 2,
    explain: '動物には目に見えない菌がいます。食べる前にかならず手を洗います。'
  },
  {
    id: 'zoo-7',
    category: '動物園',
    scene: '人気のパンダの前がこんでいる。',
    art: 'zoo',
    question: 'どうする？',
    choices: ['少し見たら、うしろの人と代わる', 'いちばん前でずっと見続ける', '人を押して前に出る'],
    answer: 0,
    explain: 'みんな見たいと思っています。ゆずりあって見ます。'
  },
  {
    id: 'zoo-8',
    category: '動物園',
    scene: '飲み終わったジュースの入れ物がある。',
    art: 'zoo',
    question: '入れ物は？',
    choices: ['さくの中に投げ入れる', 'ごみ箱に捨てるか、持ち帰る', 'ベンチに置いて行く'],
    answer: 1,
    explain: '動物がごみを飲みこむと命にかかわります。'
  },
  {
    id: 'zoo-9',
    category: '動物園',
    scene: 'サルの山の前。サルがこっちを見ている。',
    art: 'zoo',
    question: 'サルの前では？',
    choices: ['じっと目を見つめて歯を見せる', '食べ物を見せびらかす', '落ち着いて静かに見る'],
    answer: 2,
    explain: 'サルは目を見つめられたり歯を見せられたりすると、けんかの合図だと思います。'
  },
  {
    id: 'zoo-10',
    category: '動物園',
    scene: 'お昼になった。お弁当を食べたい。',
    art: 'zoo',
    question: 'どこで食べる？',
    choices: ['動物のさくの前で食べる', '決められた休む場所で食べる', '歩きながら食べる'],
    answer: 1,
    explain: '決められた場所で食べると、動物に食べ物を取られたり、ごみを落としたりしません。'
  }
);
