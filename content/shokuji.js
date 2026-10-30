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
  },
  {
    id: 'shokuji-6',
    category: '食事',
    scene: '大皿に 料理が もりつけて ある。みんなで 取りわける。',
    art: 'washoku',
    question: '大皿の 料理は どう 取る？',
    choices: ['自分の はしで 取る', '取り箸を 使って 取る', '手で 取る'],
    answer: 1,
    explain: 'みんなで 食べる 料理には、取り箸を 使うのが マナーです。'
  },
  {
    id: 'shokuji-7',
    category: '食事',
    scene: '食事会の はじめに、課長と 乾杯を する。',
    art: 'yoshoku',
    question: 'グラスは どう 合わせる？',
    choices: ['自分の グラスを 相手より 少し 低く して 合わせる', '相手より 高く かかげる', '強く 音を 立てて 合わせる'],
    answer: 0,
    explain: '目上の 人への 気くばりです。'
  },
  {
    id: 'shokuji-8',
    category: '食事',
    scene: '洋食を 食べ終わった。',
    art: 'yoshoku',
    question: 'ナイフと フォークは どう 置く？',
    choices: ['ハの字に 置く', 'お皿の 外に 置く', 'そろえて お皿の 右に 置く'],
    answer: 2,
    explain: '食べ終わった しるしです。ハの字は まだ 食事中の しるしです。'
  },
  {
    id: 'shokuji-9',
    category: '食事',
    scene: '料理が そろった。課長も 席に ついた。',
    art: 'washoku',
    question: '食べ始める ときは？',
    choices: ['「いただきます」と 言って から 食べる', '何も 言わずに 食べる', '課長より 先に 食べ始める'],
    answer: 0,
    explain: '作った 人や ごちそう して くれる 人への 感謝を あらわします。'
  },
  {
    id: 'shokuji-10',
    category: '食事',
    scene: 'きのう 課長に 食事を ごちそうに なった。',
    art: 'washoku',
    question: '次の 日、課長に 会ったら？',
    choices: ['何も 言わない', 'あらためて お礼を 言う', 'メールで 済ませる'],
    answer: 1,
    explain: '次の 日にも お礼を 言うと、感謝が よく 伝わります。'
  }
);
