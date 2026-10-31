// 冠婚葬祭の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '冠婚葬祭',
  title: 'はじめての 結婚式',
  intro: '会社の 先輩から 結婚式の 招待状が 届きました。はじめての 結婚式に 出ます。',
  art: 'party'
});

Manners.questions.push(
  {
    id: 'kankon-1',
    category: '冠婚葬祭',
    scene: '先輩から 結婚式の 招待状が 届いた。',
    art: 'party',
    question: '返事は いつ 出す？',
    choices: ['早めに 出す（1 週間 ほどで）', '式の 前の 日に 出す', '会った ときに 口で 言う'],
    answer: 0,
    explain: '相手は 人数を 決めて 準備します。返事は 早めに 出します。'
  },
  {
    id: 'kankon-2',
    category: '冠婚葬祭',
    scene: 'ご祝儀を 用意する。',
    art: 'party',
    question: 'お札は どう する？',
    choices: ['使った お札を そのまま 入れる', '小銭も まぜて 入れる', '新しい お札を 用意する'],
    answer: 2,
    explain: '前から 準備して いた お祝いの 気持ちを あらわします。'
  },
  {
    id: 'kankon-3',
    category: '冠婚葬祭',
    scene: '式に 着ていく 服を えらぶ。',
    art: 'party',
    question: '何に 気を つける？',
    choices: ['白い ドレスを 着る', '白い 服は さける', '黒い ネクタイを しめる'],
    answer: 1,
    explain: '白は 花嫁の 色です。黒い ネクタイは おそうしきの ための 物です。'
  },
  {
    id: 'kankon-4',
    category: '冠婚葬祭',
    scene: '式場の 受付に 着いた。',
    art: 'party',
    question: '受付では どう する？',
    choices: ['お祝いの ことばを 言い、名前を 書いて 記帳する', '何も 言わずに 入る', 'ご祝儀は 席で わたす'],
    answer: 0,
    explain: 'お祝いの ことばを 言って から、ご祝儀を わたし、名前を 書きます。'
  },
  {
    id: 'kankon-5',
    category: '冠婚葬祭',
    scene: 'お祝いの スピーチを たのまれた。',
    art: 'party',
    question: '「切れる」「別れる」などの ことばは？',
    choices: ['気に せず 使う', 'じょうだん なら 使う', '使わない（ほかの ことばに 言いかえる）'],
    answer: 2,
    explain: '別れや 終わりを 思わせる ことばは、お祝いの 場では さけます。'
  },
  {
    id: 'kankon-6',
    category: '冠婚葬祭',
    scene: 'スピーチの 原稿を 書く。',
    art: 'party',
    question: 'スピーチの 長さは？',
    choices: ['3 分 ほどに まとめる', '10 分 以上 じっくり 話す', '時間は 決めずに 思いつく まま 話す'],
    answer: 0,
    explain: '式の 時間は 決まって います。短く まとめると、聞く 人も 楽しめます。'
  },
  {
    id: 'kankon-7',
    category: '冠婚葬祭',
    scene: '式の 日。ご祝儀袋を 持って 出かける。',
    art: 'party',
    question: 'ご祝儀袋は どう 持っていく？',
    choices: ['そのまま かばんに 入れる', 'ふくさに 包んで 持っていく', '上着の ポケットに 折って 入れる'],
    answer: 1,
    explain: 'ふくさは 袋を 包む 布です。袋が 折れたり よごれたり しないようにします。'
  },
  {
    id: 'kankon-8',
    category: '冠婚葬祭',
    scene: '披露宴で 新郎の 上司が あいさつを はじめた。',
    art: 'party',
    question: 'あいさつの あいだ、食事は どう する？',
    choices: ['手を 止めて 話を 聞く', '話の あいだも 食べつづける', 'となりの 人と 話しながら 食べる'],
    answer: 0,
    explain: '大事な あいさつの あいだは、食事の 手を 止めて 話す 人の ほうを 向きます。'
  },
  {
    id: 'kankon-9',
    category: '冠婚葬祭',
    scene: '新郎と 新婦の 写真を スマホで とった。',
    art: 'party',
    question: 'SNS に 載せたい ときは？',
    choices: ['すぐに 載せる', 'ほかの お客さんの 顔も そのまま 載せる', '二人に 聞いてから 載せる'],
    answer: 2,
    explain: '写真を 出して よいか、二人に たしかめます。写って いる ほかの 人の ことも 考えます。'
  },
  {
    id: 'kankon-10',
    category: '冠婚葬祭',
    scene: '披露宴が 終わった。出口で 二人が 見送って くれる。',
    art: 'party',
    question: 'どう あいさつ する？',
    choices: ['長く 話しこむ', 'お祝いと お礼を ひとこと 言う', 'だまって 通りすぎる'],
    answer: 1,
    explain: 'うしろにも 見送りを 待つ 人が います。ひとことで 気持ちを つたえます。'
  }
);
