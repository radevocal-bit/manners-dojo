// 食事のマナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '食事',
  title: 'はじめての 会食',
  intro: '入社して 1 か月。部長に さそわれて、取引先の 人と 食事を する ことに なりました。おはしや ナイフの 使い方は、思って いるより 見られています。',
  art: 'washoku'
});

Manners.questions.push(
  {
    id: 'shokuji-1',
    category: '食事',
    scene: '和食の お店に 着いた。料理を ひと口 食べて、おはしを 休めたい。',
    art: 'washoku',
    question: 'おはしを休めるとき、どこに置くのがよい？',
    choices: ['お茶わんの上に 渡して置く', 'はし置きに置く', 'ご飯に 立てておく'],
    answer: 1,
    explain: 'お茶わんの上に渡すのは「渡し箸」、ご飯に立てるのは「立て箸」といい、どちらも きらわれます。はし置きが ないときは、はし袋を折って 代わりにします。'
  },
  {
    id: 'shokuji-2',
    category: '食事',
    scene: 'テーブルには 小鉢が いっぱい。どれから 食べようか…。',
    art: 'washoku',
    question: 'どれを食べるか迷って、おはしを 料理の上で あちこち動かすことを 何という？',
    choices: ['寄せ箸', '刺し箸', '迷い箸'],
    answer: 2,
    explain: '「迷い箸」は マナー違反です。食べる物を 決めてから、おはしを のばします。'
  },
  {
    id: 'shokuji-3',
    category: '食事',
    scene: '煮物を 口に 運ぶ。汁が こぼれそうだ。',
    art: 'washoku',
    question: '料理を口に運ぶとき、こぼれないように 手のひらを 下にそえるのは？',
    choices: ['手皿と いって マナー違反', '上品なので よい', 'おはしのときだけ よい'],
    answer: 0,
    explain: '手を お皿のように使う「手皿」は、上品に見えて じつは マナー違反です。小皿や 器を 手に持って受けます。'
  },
  {
    id: 'shokuji-4',
    category: '食事',
    scene: '別の 日、こんどは 洋食の お店へ。お皿の 両側に、ナイフと フォークが ずらりと 並んでいる。',
    art: 'yoshoku',
    question: '洋食で ナイフとフォークが 何本も並んでいるとき、どれから使う？',
    choices: ['内側から 順に', '外側から 順に', '好きなものから'],
    answer: 1,
    explain: 'ナイフとフォークは、料理が出る順に 外側から並んでいます。外側から 1 組ずつ使います。'
  },
  {
    id: 'shokuji-5',
    category: '食事',
    scene: 'メインの 料理の 途中で、少し 席を 立つ ことに なった。',
    art: 'yoshoku',
    question: '洋食の途中で 少し席を立つとき、ナプキンは どこに置く？',
    choices: ['テーブルの上', 'いすの上', '首に かけたまま'],
    answer: 1,
    explain: 'いすの上に置くと「まだ 食事中です」という 合図になります。食べ終わったら、軽く たたんで テーブルの上に置きます。'
  }
);
