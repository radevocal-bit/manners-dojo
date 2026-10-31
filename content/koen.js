// 公園の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '公園',
  title: '日曜の 公園',
  intro: '天気の よい 日曜日。近所の 公園へ 出かけました。',
  art: 'park'
});

Manners.questions.push(
  {
    id: 'koen-1',
    category: '公園',
    scene: 'ベンチで おにぎりを 食べた。ごみが 出た。',
    art: 'park',
    question: 'ごみは？',
    choices: ['ベンチの 下に 置いて 帰る', '持って 帰る', '植えこみに かくす'],
    answer: 1,
    explain: '公園の ごみは、出した 人が 持ち帰ります。'
  },
  {
    id: 'koen-2',
    category: '公園',
    scene: '空いて いる ベンチに 座った。荷物が 多い。',
    art: 'park',
    question: '荷物は？',
    choices: ['となりの 席に 広げる', 'ベンチを 1 人で 全部 使う', '足もとや ひざの 上に 置く'],
    answer: 2,
    explain: 'ベンチは みんなで 使う 物です。ほかの 人も 座れる ように します。'
  },
  {
    id: 'koen-3',
    category: '公園',
    scene: '犬の 散歩を して いる。犬が ふんを した。',
    art: 'park',
    question: 'ふんは？',
    choices: ['ふくろに 取って 持ち帰る', 'そのまま 歩いて いく', '土を かけて おく'],
    answer: 0,
    explain: 'ふんは 飼い主が 取って 持ち帰ります。'
  },
  {
    id: 'koen-4',
    category: '公園',
    scene: 'すべり台に 子どもたちが 並んで いる。自分の 子どもも 遊びたい。',
    art: 'park',
    question: 'どう する？',
    choices: ['列の 前に 入れる', '列の うしろに 並ばせる', '下から のぼらせる'],
    answer: 1,
    explain: '遊具は 順番に 使います。'
  },
  {
    id: 'koen-5',
    category: '公園',
    scene: '子どもと ボール遊びを したい。まわりに 小さな 子が 遊んで いる。',
    art: 'park',
    question: 'どこで する？',
    choices: ['小さな 子の そばで 強く 投げる', '花だんの 中で する', 'ボール遊びが できる 広場で する'],
    answer: 2,
    explain: 'ボールが 当たると あぶないです。決められた 場所で 遊びます。'
  },
  {
    id: 'koen-6',
    category: '公園',
    scene: '公園の 水道で 手を あらった。',
    art: 'park',
    question: '水は？',
    choices: ['出しっぱなしに する', '強く 出して 遊ぶ', 'ちゃんと 止める'],
    answer: 2,
    explain: '水は みんなの 物です。使ったら 止めます。'
  },
  {
    id: 'koen-7',
    category: '公園',
    scene: '花だんに きれいな 花が さいて いる。',
    art: 'park',
    question: '花は？',
    choices: ['見て 楽しむ', '1 本 つんで 持ち帰る', '花だんに 入って 写真を とる'],
    answer: 0,
    explain: '花は みんなが 楽しむ ために 育てて います。つまずに 見て 楽しみます。'
  },
  {
    id: 'koen-8',
    category: '公園',
    scene: '夜、公園で 友だちと 話して いる。近くに 家が ある。',
    art: 'park',
    question: '話す ときは？',
    choices: ['大きな 声で さわぐ', '声を 小さく する', '音楽を 大きく 流す'],
    answer: 1,
    explain: '夜は 近くの 家の 人が 休んで います。静かに 話します。'
  },
  {
    id: 'koen-9',
    category: '公園',
    scene: '自転車で 公園に 来た。',
    art: 'park',
    question: '自転車は？',
    choices: ['自転車置き場に とめる', '入口の まん中に とめる', '公園の 中を 速く 走る'],
    answer: 0,
    explain: '通る 人の じゃまに ならない ように、決められた 場所に とめます。'
  },
  {
    id: 'koen-10',
    category: '公園',
    scene: '公園で 花火を したく なった。',
    art: 'park',
    question: '花火は？',
    choices: ['公園の 決まりを 見て、できる 所で する', 'どこでも して よい', '夜中に こっそり する'],
    answer: 0,
    explain: '花火が できない 公園も あります。決まりを たしかめます。'
  }
);
