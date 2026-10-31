// 図書館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '図書館',
  title: 'はじめての 図書館',
  intro: '近所の 図書館で 本を 借りる ことに しました。',
  art: 'library'
});

Manners.questions.push(
  {
    id: 'tosho-1',
    category: '図書館',
    scene: '図書館に 入った。友だちと いっしょだ。',
    art: 'library',
    question: '友だちと 話す ときは？',
    choices: ['ふつうの 声で 話す', '小さな 声で 短く 話す', '大きな 声で 名前を 呼ぶ'],
    answer: 1,
    explain: '図書館は 静かに 本を 読む 場所です。話す ときは 小さな 声で 短く します。'
  },
  {
    id: 'tosho-2',
    category: '図書館',
    scene: '本を さがして いたら、スマホに 電話が かかって きた。',
    art: 'library',
    question: 'どうする？',
    choices: ['その 場で 出て 話す', '出ないで そのまま 鳴らして おく', '音を 消して、外に 出てから かけ直す'],
    answer: 2,
    explain: '中で 話すと、まわりの 人の じゃまに なります。外に 出てから 話します。'
  },
  {
    id: 'tosho-3',
    category: '図書館',
    scene: '棚から 出した 本を 読み終えた。どの 棚に あったか わからない。',
    art: 'library',
    question: '読み終えた 本は？',
    choices: ['返却台に 置く', '近くの 棚の あいて いる 所に 入れる', '机の 上に 置いた まま 帰る'],
    answer: 0,
    explain: 'ちがう 場所に もどすと、次の 人が 本を 見つけられません。わからない ときは 返却台に 置きます。'
  },
  {
    id: 'tosho-4',
    category: '図書館',
    scene: 'のどが かわいた。かばんに ジュースが ある。',
    art: 'library',
    question: 'どこで 飲む？',
    choices: ['本を 読みながら 席で 飲む', '本棚の 前で こっそり 飲む', '決められた 場所や 外で 飲む'],
    answer: 2,
    explain: '本が よごれると、次の 人が 困ります。飲み物は 決められた 場所で 飲みます。'
  },
  {
    id: 'tosho-5',
    category: '図書館',
    scene: '借りた 本の 大事な 所に 線を 引きたく なった。',
    art: 'library',
    question: '線を 引きたい ときは？',
    choices: ['メモに 書き写す', 'えんぴつで 小さく 線を 引く', 'ページの 角を 折って 印に する'],
    answer: 0,
    explain: '図書館の 本は みんなの 物です。書きこみや 折り目を つけず、メモに 書きます。'
  },
  {
    id: 'tosho-6',
    category: '図書館',
    scene: '席が 少ししか あいて いない。友だちが あとから 来る。',
    art: 'library',
    question: '席は？',
    choices: ['かばんを 置いて 2 つ 取る', '自分が 使う 1 つだけに する', '友だちの 分も 本で 取って おく'],
    answer: 1,
    explain: '席は みんなで 使う 物です。自分が すわる 分だけ 使います。'
  },
  {
    id: 'tosho-7',
    category: '図書館',
    scene: '返す 日が 明日だが、まだ 読み終わって いない。',
    art: 'library',
    question: '読み終わらない ときは？',
    choices: ['返す 日を すぎても だまって 読む', '読み終わるまで 図書館に 来ない', '図書館に 聞いて、借りる 日を のばせるか たのむ'],
    answer: 2,
    explain: '本を 待って いる 人が いるかも しれません。返す 日は 守り、のばしたい ときは 図書館に 聞きます。'
  },
  {
    id: 'tosho-8',
    category: '図書館',
    scene: '本を 読んで いたら、ページが 少し やぶれて しまった。',
    art: 'library',
    question: 'やぶれた ときは？',
    choices: ['カウンターに 持って 行き、正直に 言う', 'テープで 自分で はって 返す', 'だまって 棚に もどす'],
    answer: 0,
    explain: '図書館の 本は なおし方が 決まって います。自分で 直さず、正直に 伝えます。'
  },
  {
    id: 'tosho-9',
    category: '図書館',
    scene: 'となりの 人が 読んで いる 本が おもしろそうだ。',
    art: 'library',
    question: '読みたく なったら？',
    choices: ['横から のぞきこんで 読む', '自分で 同じ 本を さがす', '声を かけて 本を 見せて もらう'],
    answer: 1,
    explain: '読んで いる 人の じゃまを しない ように します。気に なる 本は 自分で さがします。'
  },
  {
    id: 'tosho-10',
    category: '図書館',
    scene: '帰る 時間に なった。机の 上に 読んだ 本と 消しゴムの かすが ある。',
    art: 'library',
    question: '帰る 前に？',
    choices: ['本は 返却台へ、かすは 持ち帰る', 'そのまま 帰る', '本は 机に 置いて、かすだけ はらう'],
    answer: 0,
    explain: '次の 人が 気持ち よく 使える ように、机の 上を きれいに して 帰ります。'
  }
);
