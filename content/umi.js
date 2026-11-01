// 海水浴の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '海水浴',
  title: 'はじめての 海水浴',
  intro: '夏休みに 家族と 海へ 来ました。',
  art: 'umi'
});

Manners.questions.push(
  {
    id: 'umi-1',
    category: '海水浴',
    scene: '海に 着いた。浜に 旗が 立って いる。',
    art: 'umi',
    question: '旗を 見たら？',
    choices: ['旗の 色を 見て、泳いで よいか 確かめる', '旗は 気に せず すぐ 泳ぐ', '旗を ぬいて 遊ぶ'],
    answer: 0,
    explain: '旗の 色で、今 泳いで よいか どうかが わかります。'
  },
  {
    id: 'umi-2',
    category: '海水浴',
    scene: 'すいて いる 浜。パラソルを 立てたい。',
    art: 'umi',
    question: '場所は？',
    choices: ['人の すぐ 前に 立てる', 'となりの 人と 間を あけて 立てる', '通る 道に 立てる'],
    answer: 1,
    explain: '間を あけると、海が 見えなく なったり、通れなく なったり しません。'
  },
  {
    id: 'umi-3',
    category: '海水浴',
    scene: '体に ついた 砂を はらいたい。',
    art: 'umi',
    question: 'はらう ときは？',
    choices: ['人の そばで タオルを ふる', 'となりの シートの 上で はらう', '人の いない 方を 向いて はらう'],
    answer: 2,
    explain: '風で 砂が 飛んで、人の 目や 食べ物に 入ります。'
  },
  {
    id: 'umi-4',
    category: '海水浴',
    scene: '海に 入る 前。',
    art: 'umi',
    question: 'その 前に？',
    choices: ['体操を して 体を ほぐす', 'おなか いっぱい 食べて すぐ 入る', 'いきなり 遠くまで 泳ぐ'],
    answer: 0,
    explain: '体を ほぐしてから 入ると、足が つったり しにくく なります。'
  },
  {
    id: 'umi-5',
    category: '海水浴',
    scene: '浮き輪で 遊んで いたら、沖へ 流されそう。',
    art: 'umi',
    question: 'どう する？',
    choices: ['もっと 沖へ 行って みる', '手を 振って まわりに 知らせる', 'だまって がまんする'],
    answer: 1,
    explain: '早く 知らせると、ライフセーバーの 人が すぐ 助けに 来られます。'
  },
  {
    id: 'umi-6',
    category: '海水浴',
    scene: 'ごみが 出た。浜に ごみ箱が ない。',
    art: 'umi',
    question: 'ごみは？',
    choices: ['砂に うめる', '波打ちぎわに 置く', '袋に 入れて 持ち帰る'],
    answer: 2,
    explain: 'ごみは 波に さらわれて 海を よごし、魚や 鳥が 飲みこみます。'
  },
  {
    id: 'umi-7',
    category: '海水浴',
    scene: 'バーベキューを したい。',
    art: 'umi',
    question: 'どこで する？',
    choices: ['してよいと 決められた 場所で する', 'どこでも 好きな 所で する', '泳ぐ 人の そばで する'],
    answer: 0,
    explain: '火や けむりは まわりの 人の めいわくや けがの もとに なります。'
  },
  {
    id: 'umi-8',
    category: '海水浴',
    scene: '花火を 持って きた。',
    art: 'umi',
    question: '花火は？',
    choices: ['夜 おそくに 大きな 音で する', 'してよい 場所と 時間を 確かめる', '人に 向けて する'],
    answer: 1,
    explain: '花火が 禁止の 浜も あります。近くの 家の 人も ねて います。'
  },
  {
    id: 'umi-9',
    category: '海水浴',
    scene: 'ビーチボールで 遊びたい。まわりに 人が 多い。',
    art: 'umi',
    question: 'どこで 遊ぶ？',
    choices: ['人の 間を ぬって 遊ぶ', 'ねて いる 人の そばで 遊ぶ', '人の 少ない 広い 所で 遊ぶ'],
    answer: 2,
    explain: 'ボールが 当たると、けがを したり 物を こわしたり します。'
  },
  {
    id: 'umi-10',
    category: '海水浴',
    scene: 'シャワーを 使う。うしろに 人が 並んで いる。',
    art: 'umi',
    question: 'どう 使う？',
    choices: ['ゆっくり 髪を 洗い続ける', '砂を 落としたら 早めに 代わる', '水を 出したまま 話す'],
    answer: 1,
    explain: '並んで いる 人の ために、手早く 使って 代わります。'
  }
);
