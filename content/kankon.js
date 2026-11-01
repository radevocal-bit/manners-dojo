// 冠婚葬祭の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '冠婚葬祭',
  title: 'はじめての結婚式',
  intro: '会社の先輩から結婚式の招待状が届きました。はじめての結婚式に出ます。',
  art: 'party'
});

Manners.questions.push(
  {
    id: 'kankon-1',
    category: '冠婚葬祭',
    scene: '先輩から結婚式の招待状が届いた。',
    art: 'party',
    question: '返事はいつ出す？',
    choices: ['早めに出す（1週間ほどで）', '式の前の日に出す', '会ったときに口で言う'],
    answer: 0,
    explain: '相手は人数を決めて準備します。返事は早めに出します。'
  },
  {
    id: 'kankon-2',
    category: '冠婚葬祭',
    scene: 'ご祝儀を用意する。',
    art: 'party',
    question: 'お札はどうする？',
    choices: ['使ったお札をそのまま入れる', '小銭もまぜて入れる', '新しいお札を用意する'],
    answer: 2,
    explain: '前から準備していたお祝いの気持ちをあらわします。'
  },
  {
    id: 'kankon-3',
    category: '冠婚葬祭',
    scene: '式に着ていく服をえらぶ。',
    art: 'party',
    question: '何に気をつける？',
    choices: ['白いドレスを着る', '白い服はさける', '黒いネクタイをしめる'],
    answer: 1,
    explain: '白は花嫁の色です。黒いネクタイはおそうしきのための物です。'
  },
  {
    id: 'kankon-4',
    category: '冠婚葬祭',
    scene: '式場の受付に着いた。',
    art: 'party',
    question: '受付ではどうする？',
    choices: ['お祝いのことばを言い、名前を書いて記帳する', '何も言わずに入る', 'ご祝儀は席でわたす'],
    answer: 0,
    explain: 'お祝いのことばを言ってから、ご祝儀をわたし、名前を書きます。'
  },
  {
    id: 'kankon-5',
    category: '冠婚葬祭',
    scene: 'お祝いのスピーチをたのまれた。',
    art: 'party',
    question: '「切れる」「別れる」などのことばは？',
    choices: ['気にせず使う', 'じょうだんなら使う', '使わない（ほかのことばに言いかえる）'],
    answer: 2,
    explain: '別れや終わりを思わせることばは、お祝いの場ではさけます。'
  },
  {
    id: 'kankon-6',
    category: '冠婚葬祭',
    scene: 'スピーチの原稿を書く。',
    art: 'party',
    question: 'スピーチの長さは？',
    choices: ['3分ほどにまとめる', '10分以上じっくり話す', '時間は決めずに思いつくまま話す'],
    answer: 0,
    explain: '式の時間は決まっています。短くまとめると、聞く人も楽しめます。'
  },
  {
    id: 'kankon-7',
    category: '冠婚葬祭',
    scene: '式の日。ご祝儀袋を持って出かける。',
    art: 'party',
    question: 'ご祝儀袋はどう持っていく？',
    choices: ['そのままかばんに入れる', 'ふくさに包んで持っていく', '上着のポケットに折って入れる'],
    answer: 1,
    explain: 'ふくさは袋を包む布です。袋が折れたりよごれたりしないようにします。'
  },
  {
    id: 'kankon-8',
    category: '冠婚葬祭',
    scene: '披露宴で新郎の上司があいさつをはじめた。',
    art: 'party',
    question: 'あいさつのあいだ、食事はどうする？',
    choices: ['手を止めて話を聞く', '話のあいだも食べつづける', 'となりの人と話しながら食べる'],
    answer: 0,
    explain: '大事なあいさつのあいだは、食事の手を止めて話す人のほうを向きます。'
  },
  {
    id: 'kankon-9',
    category: '冠婚葬祭',
    scene: '新郎と新婦の写真をスマホでとった。',
    art: 'party',
    question: 'SNS に載せたいときは？',
    choices: ['すぐに載せる', 'ほかのお客さんの顔もそのまま載せる', '二人に聞いてから載せる'],
    answer: 2,
    explain: '写真を出してよいか、二人にたしかめます。写っているほかの人のことも考えます。'
  },
  {
    id: 'kankon-10',
    category: '冠婚葬祭',
    scene: '披露宴が終わった。出口で二人が見送ってくれる。',
    art: 'party',
    question: 'どうあいさつする？',
    choices: ['長く話しこむ', 'お祝いとお礼をひとこと言う', 'だまって通りすぎる'],
    answer: 1,
    explain: 'うしろにも見送りを待つ人がいます。ひとことで気持ちをつたえます。'
  }
);
