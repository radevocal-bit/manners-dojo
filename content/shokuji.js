// 食事のマナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '食事',
  title: 'はじめての会食',
  intro: '入社して1か月。部長にさそわれて、取引先の人と食事をすることになりました。おはしやナイフの使い方は、思っているより見られています。',
  art: 'washoku'
});

Manners.questions.push(
  {
    id: 'shokuji-1',
    category: '食事',
    scene: '和食のお店に着いた。料理をひと口食べて、おはしを休めたい。',
    art: 'washoku',
    question: 'おはしを休めるとき、どこに置くのがよい？',
    choices: ['お茶わんの上に渡して置く', 'はし置きに置く', 'ご飯に立てておく'],
    answer: 1,
    explain: 'お茶わんの上に渡すのは「渡し箸」、ご飯に立てるのは「立て箸」といい、どちらもきらわれます。はし置きがないときは、はし袋を折って代わりにします。'
  },
  {
    id: 'shokuji-2',
    category: '食事',
    scene: 'テーブルには小鉢がいっぱい。どれから食べようか…。',
    art: 'washoku',
    question: 'どれを食べるか迷って、おはしを料理の上であちこち動かすことを何という？',
    choices: ['寄せ箸', '刺し箸', '迷い箸'],
    answer: 2,
    explain: '「迷い箸」はマナー違反です。食べる物を決めてから、おはしをのばします。'
  },
  {
    id: 'shokuji-3',
    category: '食事',
    scene: '煮物を口に運ぶ。汁がこぼれそうだ。',
    art: 'washoku',
    question: '料理を口に運ぶとき、こぼれないように手のひらを下にそえるのは？',
    choices: ['手皿といってマナー違反', '上品なのでよい', 'おはしのときだけよい'],
    answer: 0,
    explain: '手をお皿のように使う「手皿」は、上品に見えてじつはマナー違反です。小皿や器を手に持って受けます。'
  },
  {
    id: 'shokuji-4',
    category: '食事',
    scene: '別の日、こんどは洋食のお店へ。お皿の両側に、ナイフとフォークがずらりと並んでいる。',
    art: 'yoshoku',
    question: '洋食でナイフとフォークが何本も並んでいるとき、どれから使う？',
    choices: ['内側から順に', '外側から順に', '好きなものから'],
    answer: 1,
    explain: 'ナイフとフォークは、料理が出る順に外側から並んでいます。外側から1組ずつ使います。'
  },
  {
    id: 'shokuji-5',
    category: '食事',
    scene: 'メインの料理の途中で、少し席を立つことになった。',
    art: 'yoshoku',
    question: '洋食の途中で少し席を立つとき、ナプキンはどこに置く？',
    choices: ['テーブルの上', 'いすの上', '首にかけたまま'],
    answer: 1,
    explain: 'いすの上に置くと「まだ食事中です」という合図になります。食べ終わったら、軽くたたんでテーブルの上に置きます。'
  },
  {
    id: 'shokuji-6',
    category: '食事',
    scene: '大皿に料理がもりつけてある。みんなで取りわける。',
    art: 'washoku',
    question: '大皿の料理はどう取る？',
    choices: ['自分のはしで取る', '取り箸を使って取る', '手で取る'],
    answer: 1,
    explain: 'みんなで食べる料理には、取り箸を使うのがマナーです。'
  },
  {
    id: 'shokuji-7',
    category: '食事',
    scene: '食事会のはじめに、課長と乾杯をする。',
    art: 'yoshoku',
    question: 'グラスはどう合わせる？',
    choices: ['自分のグラスを相手より少し低くして合わせる', '相手より高くかかげる', '強く音を立てて合わせる'],
    answer: 0,
    explain: '目上の人への気くばりです。'
  },
  {
    id: 'shokuji-8',
    category: '食事',
    scene: '洋食を食べ終わった。',
    art: 'yoshoku',
    question: 'ナイフとフォークはどう置く？',
    choices: ['ハの字に置く', 'お皿の外に置く', 'そろえてお皿の右に置く'],
    answer: 2,
    explain: '食べ終わったしるしです。ハの字はまだ食事中のしるしです。'
  },
  {
    id: 'shokuji-9',
    category: '食事',
    scene: '料理がそろった。課長も席についた。',
    art: 'washoku',
    question: '食べ始めるときは？',
    choices: ['「いただきます」と言ってから食べる', '何も言わずに食べる', '課長より先に食べ始める'],
    answer: 0,
    explain: '作った人やごちそうしてくれる人への感謝をあらわします。'
  },
  {
    id: 'shokuji-10',
    category: '食事',
    scene: 'きのう課長に食事をごちそうになった。',
    art: 'washoku',
    question: '次の日、課長に会ったら？',
    choices: ['何も言わない', 'あらためてお礼を言う', 'メールで済ませる'],
    answer: 1,
    explain: '次の日にもお礼を言うと、感謝がよく伝わります。'
  }
);
