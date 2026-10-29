// 訪問のマナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '訪問',
  title: 'はじめての 訪問',
  intro: '先輩と はじめて 取引先の 会社を 訪ねる 日。着いてから 帰るまで 気を つける ことが たくさん あります。',
  art: 'building'
});

Manners.questions.push(
  {
    id: 'homon-1',
    category: '訪問',
    scene: '約束は 午後 2 時。取引先の ビルの 前に 着いた。',
    art: 'building',
    question: '受付に 行くのは いつが よい？',
    choices: ['約束の 30 分 前', '約束の 5 分 前ごろ', '約束の 時間を 少し すぎてから'],
    answer: 1,
    explain: '早すぎると 相手の じゃまに なり、おくれるのは 失礼です。建物には 少し 早めに 着き、受付は 5 分 前ごろに します。'
  },
  {
    id: 'homon-2',
    category: '訪問',
    scene: '寒い 冬の 日。コートを 着たまま 入口の 前に いる。',
    art: 'building',
    question: 'コートは いつ ぬぐ？',
    choices: ['建物に 入る 前', '受付で 名乗ってから', '応接室に 入ってから'],
    answer: 0,
    explain: 'コートには 外の ほこりが ついているので、建物に 入る 前に ぬぎ、うら返しに たたんで うでに かけます。'
  },
  {
    id: 'homon-3',
    category: '訪問',
    scene: '応接室に 通された。紙袋に 入れた 手土産を 持っている。',
    art: 'room',
    question: '手土産は いつ 渡す？',
    choices: ['受付で すぐ', '帰る ときに 紙袋ごと', 'あいさつが すんでから、紙袋から 出して'],
    answer: 2,
    explain: '部屋で あいさつが すんでから、紙袋から 出し、相手から 見て 正面に なる 向きで 渡します。'
  },
  {
    id: 'homon-4',
    category: '訪問',
    scene: '席に つくと、お茶が 出された。',
    art: 'room',
    question: '出された お茶は いつ 飲む？',
    choices: ['相手に すすめられてから', '出されたら すぐ', '一口も 飲まない'],
    answer: 0,
    explain: '「どうぞ」と すすめられてから いただきます。すすめられなければ、話が ひと区切り ついた ときに いただきます。'
  },
  {
    id: 'homon-5',
    category: '訪問',
    scene: '話が 終わり、帰る 時間。コートを うでに かけて 出口へ 向かう。',
    art: 'building',
    question: '帰る とき、コートは いつ 着る？',
    choices: ['応接室で 着てから 出る', '建物の 外に 出てから', '受付の 前で 着る'],
    answer: 1,
    explain: '建物の 外に 出てから 着るのが 基本です。相手に「どうぞ」と 言われたら、その場で 着ても かまいません。'
  }
);
