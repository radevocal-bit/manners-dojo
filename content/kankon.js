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
  }
);
