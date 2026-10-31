// 温泉旅館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '温泉旅館',
  title: 'はじめての 温泉旅館',
  intro: '連休に 温泉旅館へ 行きます。旅館にも 決まりが あります。',
  art: 'ryokan'
});

Manners.questions.push(
  {
    id: 'ryokan-1',
    category: '温泉旅館',
    scene: '旅館の 玄関で くつを ぬいだ。',
    art: 'ryokan',
    question: 'くつは どう する？',
    choices: ['ぬいだ まま に して 上がる', 'つま先を 外に 向けて そろえて おく', '上がりかまちの 上に 置く'],
    answer: 1,
    explain: 'あとで はきやすく、玄関も きれいに 見えます。'
  },
  {
    id: 'ryokan-2',
    category: '温泉旅館',
    scene: '部屋の 入口に スリッパが ある。中は たたみの 部屋だ。',
    art: 'ryokan',
    question: 'スリッパは？',
    choices: ['たたみの 前で ぬいで 入る', 'はいた まま たたみに 上がる', 'たたみの 上で ぬぐ'],
    answer: 0,
    explain: 'たたみは スリッパで 歩く 所では ありません。'
  },
  {
    id: 'ryokan-3',
    category: '温泉旅館',
    scene: '部屋に 浴衣が ある。着て みる。',
    art: 'ryokan',
    question: 'えりの 重ね方は？',
    choices: ['右の えりを 上に する', 'どちらでも よい', '左の えりを 上に する'],
    answer: 2,
    explain: '右の えりを 上に する 着方は、なくなった 人に 着せる 形です。'
  },
  {
    id: 'ryokan-4',
    category: '温泉旅館',
    scene: '大浴場に 来た。',
    art: 'ryokan',
    question: '湯船に 入る 前に？',
    choices: ['かけ湯を して 体を 流す', 'すぐに 湯船に 飛びこむ', 'タオルで 体を ふいてから 入る'],
    answer: 0,
    explain: '先に 体を 流すと、みんなの お湯を きれいに 保てます。'
  },
  {
    id: 'ryokan-5',
    category: '温泉旅館',
    scene: '湯船に 入る。手に タオルを 持って いる。',
    art: 'ryokan',
    question: 'タオルは？',
    choices: ['湯船に 入れて 体を 洗う', '湯船には 入れない（頭に のせる か 外に 置く）', '湯船の 中で しぼる'],
    answer: 1,
    explain: 'タオルを 湯船に 入れると、お湯が よごれます。'
  }
);
