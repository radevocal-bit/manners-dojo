// プールの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'プール',
  title: 'はじめての 市民プール',
  intro: '夏休みに 友だちと 市民プールへ 来ました。',
  art: 'pool'
});

Manners.questions.push(
  {
    id: 'pool-1',
    category: 'プール',
    scene: 'プールに 入る 前。',
    art: 'pool',
    question: '入る 前に？',
    choices: ['シャワーを あびて 体を 洗う', 'そのまま とびこむ', '日焼け止めを たっぷり ぬる'],
    answer: 0,
    explain: '体の よごれを 落としてから 入ると、水を きれいに 保てます。'
  },
  {
    id: 'pool-2',
    category: 'プール',
    scene: 'プールサイドを 歩いて いる。床が ぬれて いる。',
    art: 'pool',
    question: '歩く ときは？',
    choices: ['走って 急ぐ', 'ゆっくり 歩く', '友だちを 押して ふざける'],
    answer: 1,
    explain: 'ぬれた 床は すべりやすいです。走ると ころんで けがを します。'
  },
  {
    id: 'pool-3',
    category: 'プール',
    scene: '泳ぐ コースが いくつか ある。',
    art: 'pool',
    question: 'コースでは？',
    choices: ['ロープを くぐって 横に 泳ぐ', '人の 前に 急に 入る', '決められた 向きで 泳ぐ'],
    answer: 2,
    explain: 'コースの 向きを 守ると、人と ぶつかりません。'
  },
  {
    id: 'pool-4',
    category: 'プール',
    scene: 'かみの 毛が 長い。',
    art: 'pool',
    question: 'かみの 毛は？',
    choices: ['水泳ぼうしの 中に 入れる', 'そのまま 広げて 泳ぐ', '水の 中で ほどく'],
    answer: 0,
    explain: 'かみの 毛が 水に 散らない ように、水泳ぼうしを かぶります。'
  },
  {
    id: 'pool-5',
    category: 'プール',
    scene: '監視員さんが 笛を ふいた。',
    art: 'pool',
    question: 'どう する？',
    choices: ['聞こえない ふりを する', '止まって 監視員さんの 話を 聞く', 'もっと 遠くまで 泳ぐ'],
    answer: 1,
    explain: '監視員さんは みんなの 安全を 見て います。注意には すぐ したがいます。'
  },
  {
    id: 'pool-6',
    category: 'プール',
    scene: '浅い 所で とびこみたく なった。',
    art: 'pool',
    question: 'とびこみは？',
    choices: ['頭から とびこむ', '友だちの 上に とびこむ', 'とびこまずに、足から 静かに 入る'],
    answer: 2,
    explain: '浅い 所で とびこむと、頭を 打って 大けがを します。'
  },
  {
    id: 'pool-7',
    category: 'プール',
    scene: '休む ために プールサイドに 上がった。',
    art: 'pool',
    question: '休む ときは？',
    choices: ['通る 道を あけて 休む', '通路に ねころぶ', '荷物を 通路に 広げる'],
    answer: 0,
    explain: 'プールサイドは みんなが 通ります。じゃまに ならない 所で 休みます。'
  },
  {
    id: 'pool-8',
    category: 'プール',
    scene: '泳いで いたら 少し 気分が 悪く なった。',
    art: 'pool',
    question: 'どう する？',
    choices: ['がまんして 泳ぎ続ける', '水から 上がり、監視員さんに 知らせる', 'だれにも 言わずに もぐる'],
    answer: 1,
    explain: '具合が 悪い まま 泳ぐと あぶないです。早めに 大人に 知らせます。'
  },
  {
    id: 'pool-9',
    category: 'プール',
    scene: '更衣室で 着がえて いる。',
    art: 'pool',
    question: '更衣室では？',
    choices: ['ぬれた タオルを 床に 置いて 行く', '大声で さわぐ', '体を ふいて、ロッカーを きれいに 使う'],
    answer: 2,
    explain: '次に 使う 人の ために、床を ぬらさず きれいに 使います。'
  },
  {
    id: 'pool-10',
    category: 'プール',
    scene: 'ビーチボールで 遊びたい。',
    art: 'pool',
    question: 'ボール遊びは？',
    choices: ['泳いで いる 人に 向けて 投げる', '遊んで よい 時間と 場所を 守る', 'コースの 中で 投げあう'],
    answer: 1,
    explain: '泳いで いる 人に 当たると あぶないです。決まりを 守って 遊びます。'
  }
);
