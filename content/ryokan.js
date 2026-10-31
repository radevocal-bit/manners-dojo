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
  },
  {
    id: 'ryokan-6',
    category: '温泉旅館',
    scene: '大浴場。髪が 長い。',
    art: 'ryokan',
    question: '髪は？',
    choices: ['お湯に ついても 気に しない', 'ゴムなどで まとめる', 'お湯の 中で 洗う'],
    answer: 1,
    explain: '髪が お湯に つかない ように します。'
  },
  {
    id: 'ryokan-7',
    category: '温泉旅館',
    scene: '大浴場が すいて いる。',
    art: 'ryokan',
    question: 'どう する？',
    choices: ['ゆったり 静かに つかる', '湯船で 泳ぐ', '友だちと 大声で 話す'],
    answer: 0,
    explain: '大浴場は みんなで 使う 所です。'
  },
  {
    id: 'ryokan-8',
    category: '温泉旅館',
    scene: 'お風呂から 上がる。',
    art: 'ryokan',
    question: '脱衣所に もどる 前に？',
    choices: ['ぬれた まま もどる', '脱衣所の まん中で 体を ふく', '浴室で 体を ふいてから もどる'],
    answer: 2,
    explain: '脱衣所の 床が ぬれず、ほかの 人が すべりません。'
  },
  {
    id: 'ryokan-9',
    category: '温泉旅館',
    scene: '夜、部屋で 友だちと 話して いる。となりの 部屋にも お客さんが いる。',
    art: 'ryokan',
    question: 'どう する？',
    choices: ['声を 小さく する', 'テレビの 音を 大きく する', '廊下に 出て さわぐ'],
    answer: 0,
    explain: 'かべが うすい 部屋も あります。夜は 静かに すごします。'
  },
  {
    id: 'ryokan-10',
    category: '温泉旅館',
    scene: '朝ごはんの 時間が 決まって いる。',
    art: 'ryokan',
    question: 'どう する？',
    choices: ['好きな 時間に 行く', '決まった 時間に 行く', '連絡せずに 行かない'],
    answer: 1,
    explain: '旅館の 人は 時間に 合わせて 料理を 用意して います。'
  }
);
