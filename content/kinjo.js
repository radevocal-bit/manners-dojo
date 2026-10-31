// 近所づきあいの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '近所づきあい',
  title: '新しい マンション',
  intro: '新しい マンションに 引っ越しました。近所の 人と 気持ちよく くらしたいです。',
  art: 'apartment'
});

Manners.questions.push(
  {
    id: 'kinjo-1',
    category: '近所づきあい',
    scene: 'ごみ置き場に「燃える ごみ: 月・木」の 札が ある。今日は 火曜日。',
    art: 'apartment',
    question: '燃える ごみは？',
    choices: ['今日の うちに 出して おく', '決められた 日の 朝に 出す', '前の 日の 夜から 出して おく'],
    answer: 1,
    explain: 'ごみは 決められた 日の 朝に 出します。カラスや ねこに あらされず、ごみ置き場が きれいに 保てます。'
  },
  {
    id: 'kinjo-2',
    category: '近所づきあい',
    scene: 'ペットボトルを すてる。',
    art: 'apartment',
    question: 'どう する？',
    choices: ['ふたと ラベルを とって 分ける', 'そのまま 燃える ごみに 入れる', '中身が 入った まま 出す'],
    answer: 0,
    explain: 'ごみの 分け方は 町で 決まって います。分けると 資源に なります。'
  },
  {
    id: 'kinjo-3',
    category: '近所づきあい',
    scene: '新しい マンションに 引っ越した。',
    art: 'apartment',
    question: 'となりの 家には？',
    choices: ['何も しない', 'ひとこと あいさつに 行く', '夜 おそくに たずねる'],
    answer: 1,
    explain: '顔を 知って もらうと、困った ときに 助け合えます。'
  },
  {
    id: 'kinjo-4',
    category: '近所づきあい',
    scene: '夜 11 時。部屋で 音楽を 聞きたい。',
    art: 'apartment',
    question: 'どう する？',
    choices: ['イヤホンで 聞く', '大きな 音で 聞く', 'まどを 開けて 聞く'],
    answer: 0,
    explain: '夜は 音が ひびきやすいです。となりの 人は ねて いるかも しれません。'
  },
  {
    id: 'kinjo-5',
    category: '近所づきあい',
    scene: '自転車で 帰って きた。マンションの 廊下は みんなで 使う 所だ。',
    art: 'apartment',
    question: '自転車は？',
    choices: ['廊下に 置く', 'ほかの 人の 家の 前に 置く', '決められた 自転車置き場に 置く'],
    answer: 2,
    explain: '廊下に 物を 置くと、通る 人の じゃまに なります。にげる ときにも あぶないです。'
  },
  {
    id: 'kinjo-6',
    category: '近所づきあい',
    scene: 'エレベーターで 近所の 人と いっしょに なった。',
    art: 'apartment',
    question: 'どう する？',
    choices: ['だまって 下を 向く', '「こんにちは」と あいさつ する', 'スマホで 大きな 声で 電話を する'],
    answer: 1,
    explain: 'あいさつ ひとつで、近所の 人と 気持ちよく すごせます。'
  },
  {
    id: 'kinjo-7',
    category: '近所づきあい',
    scene: '回覧板が 回って きた。',
    art: 'apartment',
    question: 'どう する？',
    choices: ['読んだら 早めに 次の 家に 回す', '1 週間 家に 置いて おく', '読まずに すてる'],
    answer: 0,
    explain: '次の 家の 人も 読むのを 待って います。'
  },
  {
    id: 'kinjo-8',
    category: '近所づきあい',
    scene: '犬の 散歩を して いる。犬が 道で ふんを した。',
    art: 'apartment',
    question: 'どう する？',
    choices: ['そのまま に して 帰る', '土を かけて おく', '袋に 入れて 持ち帰る'],
    answer: 2,
    explain: 'ふんを そのまま に すると、道が よごれて ほかの 人が こまります。'
  },
  {
    id: 'kinjo-9',
    category: '近所づきあい',
    scene: '家に 友だちが 車で 遊びに 来る。',
    art: 'apartment',
    question: '車は？',
    choices: ['近くの 駐車場に とめて もらう', '近所の 家の 前に とめて もらう', '道の はしに とめて もらう'],
    answer: 0,
    explain: '家の 前や 道に とめると、近所の 人が 出入り できません。'
  },
  {
    id: 'kinjo-10',
    category: '近所づきあい',
    scene: '庭の 木の 枝が のびて、となりの 家に 入って いる。',
    art: 'apartment',
    question: 'どう する？',
    choices: ['そのまま に して おく', '自分で 枝を 切る', 'となりの 人に 切って もらう'],
    answer: 1,
    explain: 'となりの 家の じゃまに ならない ように、自分の 木は 自分で 手入れ します。'
  }
);
