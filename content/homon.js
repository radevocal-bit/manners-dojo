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
  },
  {
    id: 'homon-6',
    category: '訪問',
    scene: '取引先の 会社に 着いた。受付が ある。',
    art: 'building',
    question: '受付では 何を 伝える？',
    choices: ['「こんにちは」とだけ 言う', '会社名と 名前、約束の 相手と 時間を 伝える', '担当の 人を 自分で さがしに 行く'],
    answer: 1,
    explain: '受付の 人が すぐ 取りつげる ように する ためです。'
  },
  {
    id: 'homon-7',
    category: '訪問',
    scene: '応接室で お茶を 出して もらった。',
    art: 'room',
    question: 'お茶は どう する？',
    choices: ['すすめられたら「いただきます」と 言って 飲む', '出されて すぐ 飲む', '手を つけずに 帰る'],
    answer: 0,
    explain: '出して くれた 人への お礼の 気持ちを あらわす ためです。'
  },
  {
    id: 'homon-8',
    category: '訪問',
    scene: '相手と 名刺を 交換した。これから 話を する。',
    art: 'room',
    question: 'もらった 名刺は？',
    choices: ['すぐ 名刺入れに しまう', 'ポケットに 入れる', '話の あいだは 机の上に 置いて おく'],
    answer: 2,
    explain: '名前を まちがえずに 話せる ように します。帰る ときに ていねいに しまう のが 正解です。'
  },
  {
    id: 'homon-9',
    category: '訪問',
    scene: '手みやげの おかしを 持って きた。',
    art: 'room',
    question: 'どう わたす？',
    choices: ['紙袋に 入れた まま わたす', '紙袋から出して、相手に 向けて わたす', '机の 上に 置いて おく'],
    answer: 1,
    explain: '紙袋は 持ち運ぶ ための 物です。'
  },
  {
    id: 'homon-10',
    category: '訪問',
    scene: '用件の 話が 終わった。',
    art: 'room',
    question: 'その あとは？',
    choices: ['長居せず、お礼を 言って 帰る', '話が 終わっても ずっと 話す', 'だまって 帰る'],
    answer: 0,
    explain: '相手の 時間を 大切に する ためです。'
  }
);
