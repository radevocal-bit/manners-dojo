// 近所づきあいの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '近所づきあい',
  title: '新しいマンション',
  intro: '新しいマンションに引っ越しました。近所の人と気持ちよくくらしたいです。',
  art: 'apartment'
});

Manners.questions.push(
  {
    id: 'kinjo-1',
    category: '近所づきあい',
    scene: 'ごみ置き場に「燃えるごみ: 月・木」の札がある。今日は火曜日。',
    art: 'apartment',
    question: '燃えるごみは？',
    choices: ['今日のうちに出しておく', '決められた日の朝に出す', '前の日の夜から出しておく'],
    answer: 1,
    explain: 'ごみは決められた日の朝に出します。カラスやねこにあらされず、ごみ置き場がきれいに保てます。'
  },
  {
    id: 'kinjo-2',
    category: '近所づきあい',
    scene: 'ペットボトルをすてる。',
    art: 'apartment',
    question: 'どうする？',
    choices: ['ふたとラベルをとって分ける', 'そのまま燃えるごみに入れる', '中身が入ったまま出す'],
    answer: 0,
    explain: 'ごみの分け方は町で決まっています。分けると資源になります。'
  },
  {
    id: 'kinjo-3',
    category: '近所づきあい',
    scene: '新しいマンションに引っ越した。',
    art: 'apartment',
    question: 'となりの家には？',
    choices: ['何もしない', 'ひとことあいさつに行く', '夜おそくにたずねる'],
    answer: 1,
    explain: '顔を知ってもらうと、困ったときに助け合えます。'
  },
  {
    id: 'kinjo-4',
    category: '近所づきあい',
    scene: '夜11時。部屋で音楽を聞きたい。',
    art: 'apartment',
    question: 'どうする？',
    choices: ['イヤホンで聞く', '大きな音で聞く', 'まどを開けて聞く'],
    answer: 0,
    explain: '夜は音がひびきやすいです。となりの人はねているかもしれません。'
  },
  {
    id: 'kinjo-5',
    category: '近所づきあい',
    scene: '自転車で帰ってきた。マンションの廊下はみんなで使う所だ。',
    art: 'apartment',
    question: '自転車は？',
    choices: ['廊下に置く', 'ほかの人の家の前に置く', '決められた自転車置き場に置く'],
    answer: 2,
    explain: '廊下に物を置くと、通る人のじゃまになります。にげるときにもあぶないです。'
  },
  {
    id: 'kinjo-6',
    category: '近所づきあい',
    scene: 'エレベーターで近所の人といっしょになった。',
    art: 'apartment',
    question: 'どうする？',
    choices: ['だまって下を向く', '「こんにちは」とあいさつする', 'スマホで大きな声で電話をする'],
    answer: 1,
    explain: 'あいさつひとつで、近所の人と気持ちよくすごせます。'
  },
  {
    id: 'kinjo-7',
    category: '近所づきあい',
    scene: '回覧板が回ってきた。',
    art: 'apartment',
    question: 'どうする？',
    choices: ['読んだら早めに次の家に回す', '1週間家に置いておく', '読まずにすてる'],
    answer: 0,
    explain: '次の家の人も読むのを待っています。'
  },
  {
    id: 'kinjo-8',
    category: '近所づきあい',
    scene: '犬の散歩をしている。犬が道でふんをした。',
    art: 'apartment',
    question: 'どうする？',
    choices: ['そのままにして帰る', '土をかけておく', '袋に入れて持ち帰る'],
    answer: 2,
    explain: 'ふんをそのままにすると、道がよごれてほかの人がこまります。'
  },
  {
    id: 'kinjo-9',
    category: '近所づきあい',
    scene: '家に友だちが車で遊びに来る。',
    art: 'apartment',
    question: '車は？',
    choices: ['近くの駐車場にとめてもらう', '近所の家の前にとめてもらう', '道のはしにとめてもらう'],
    answer: 0,
    explain: '家の前や道にとめると、近所の人が出入りできません。'
  },
  {
    id: 'kinjo-10',
    category: '近所づきあい',
    scene: '庭の木の枝がのびて、となりの家に入っている。',
    art: 'apartment',
    question: 'どうする？',
    choices: ['そのままにしておく', '自分で枝を切る', 'となりの人に切ってもらう'],
    answer: 1,
    explain: 'となりの家のじゃまにならないように、自分の木は自分で手入れします。'
  }
);
