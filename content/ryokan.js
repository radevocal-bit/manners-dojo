// 温泉旅館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '温泉旅館',
  title: 'はじめての温泉旅館',
  intro: '連休に温泉旅館へ行きます。旅館にも決まりがあります。',
  art: 'ryokan'
});

Manners.questions.push(
  {
    id: 'ryokan-1',
    category: '温泉旅館',
    scene: '旅館の玄関でくつをぬいだ。',
    art: 'ryokan',
    question: 'くつはどうする？',
    choices: ['ぬいだままにして上がる', 'つま先を外に向けてそろえておく', '上がりかまちの上に置く'],
    answer: 1,
    explain: 'あとではきやすく、玄関もきれいに見えます。'
  },
  {
    id: 'ryokan-2',
    category: '温泉旅館',
    scene: '部屋の入口にスリッパがある。中はたたみの部屋だ。',
    art: 'ryokan',
    question: 'スリッパは？',
    choices: ['たたみの前でぬいで入る', 'はいたままたたみに上がる', 'たたみの上でぬぐ'],
    answer: 0,
    explain: 'たたみはスリッパで歩く所ではありません。'
  },
  {
    id: 'ryokan-3',
    category: '温泉旅館',
    scene: '部屋に浴衣がある。着てみる。',
    art: 'ryokan',
    question: 'えりの重ね方は？',
    choices: ['右のえりを上にする', 'どちらでもよい', '左のえりを上にする'],
    answer: 2,
    explain: '右のえりを上にする着方は、なくなった人に着せる形です。'
  },
  {
    id: 'ryokan-4',
    category: '温泉旅館',
    scene: '大浴場に来た。',
    art: 'ryokan',
    question: '湯船に入る前に？',
    choices: ['かけ湯をして体を流す', 'すぐに湯船に飛びこむ', 'タオルで体をふいてから入る'],
    answer: 0,
    explain: '先に体を流すと、みんなのお湯をきれいに保てます。'
  },
  {
    id: 'ryokan-5',
    category: '温泉旅館',
    scene: '湯船に入る。手にタオルを持っている。',
    art: 'ryokan',
    question: 'タオルは？',
    choices: ['湯船に入れて体を洗う', '湯船には入れない（頭にのせるか外に置く）', '湯船の中でしぼる'],
    answer: 1,
    explain: 'タオルを湯船に入れると、お湯がよごれます。'
  },
  {
    id: 'ryokan-6',
    category: '温泉旅館',
    scene: '大浴場。髪が長い。',
    art: 'ryokan',
    question: '髪は？',
    choices: ['お湯についても気にしない', 'ゴムなどでまとめる', 'お湯の中で洗う'],
    answer: 1,
    explain: '髪がお湯につかないようにします。'
  },
  {
    id: 'ryokan-7',
    category: '温泉旅館',
    scene: '大浴場がすいている。',
    art: 'ryokan',
    question: 'どうする？',
    choices: ['ゆったり静かにつかる', '湯船で泳ぐ', '友だちと大声で話す'],
    answer: 0,
    explain: '大浴場はみんなで使う所です。'
  },
  {
    id: 'ryokan-8',
    category: '温泉旅館',
    scene: 'お風呂から上がる。',
    art: 'ryokan',
    question: '脱衣所にもどる前に？',
    choices: ['ぬれたままもどる', '脱衣所のまん中で体をふく', '浴室で体をふいてからもどる'],
    answer: 2,
    explain: '脱衣所の床がぬれず、ほかの人がすべりません。'
  },
  {
    id: 'ryokan-9',
    category: '温泉旅館',
    scene: '夜、部屋で友だちと話している。となりの部屋にもお客さんがいる。',
    art: 'ryokan',
    question: 'どうする？',
    choices: ['声を小さくする', 'テレビの音を大きくする', '廊下に出てさわぐ'],
    answer: 0,
    explain: 'かべがうすい部屋もあります。夜は静かにすごします。'
  },
  {
    id: 'ryokan-10',
    category: '温泉旅館',
    scene: '朝ごはんの時間が決まっている。',
    art: 'ryokan',
    question: 'どうする？',
    choices: ['好きな時間に行く', '決まった時間に行く', '連絡せずに行かない'],
    answer: 1,
    explain: '旅館の人は時間に合わせて料理を用意しています。'
  }
);
