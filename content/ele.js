// エレベーターの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'エレベーター',
  title: 'ビルの エレベーター',
  intro: '用事で 大きな ビルに 来ました。エレベーターに 乗ります。',
  art: 'elevator'
});

Manners.questions.push(
  {
    id: 'ele-1',
    category: 'エレベーター',
    scene: 'エレベーターに 乗ったら、ボタンの 前に 立った。あとから 人が 乗って くる。',
    art: 'elevator',
    question: 'ボタンの 前では？',
    choices: ['「開」を 押して 待つ', '「閉」を すぐ 押す', 'ボタンから はなれる'],
    answer: 0,
    explain: 'ボタンの 前に 立った 人が、みんなの ために ドアを 開けて 待ちます。'
  },
  {
    id: 'ele-2',
    category: 'エレベーター',
    scene: 'あとから 乗って きた 人が、行きたい 階の ボタンに 手が とどかない。',
    art: 'elevator',
    question: 'どう する？',
    choices: ['だまって 見て いる', '「何階ですか」と 聞いて 押す', '全部の 階を 押す'],
    answer: 1,
    explain: 'ボタンの 近くに いる 人が、声を かけて 代わりに 押します。'
  },
  {
    id: 'ele-3',
    category: 'エレベーター',
    scene: '中が こんで きた。自分は ドアの 近くに いる。',
    art: 'elevator',
    question: 'どこに 立つ？',
    choices: ['ドアの 前に 立ち続ける', 'かばんを 床に 広げる', 'おくへ つめる'],
    answer: 2,
    explain: 'あとから 乗る 人の ために、おくへ つめて 場所を あけます。'
  },
  {
    id: 'ele-4',
    category: 'エレベーター',
    scene: '友だちと 2 人で 乗って いる。ほかの 人も いる。',
    art: 'elevator',
    question: '話す ときは？',
    choices: ['大きな 声で 話す', '会社の ひみつの 話を する', '降りるまで 話さないか、小さな 声に する'],
    answer: 2,
    explain: 'せまい 中では 声が よく ひびきます。ほかの 人が いる ときは 静かに します。'
  },
  {
    id: 'ele-5',
    category: 'エレベーター',
    scene: '車いすの 人が エレベーターを 待って いる。',
    art: 'elevator',
    question: 'どう する？',
    choices: ['先に 乗って もらう', '急いで 先に 乗る', '気づかない ふりを する'],
    answer: 0,
    explain: 'エレベーターが ないと こまる 人も います。ゆずって、先に 乗って もらいます。'
  },
  {
    id: 'ele-6',
    category: 'エレベーター',
    scene: '1 つ 上の 階に 行きたい。エレベーターの 前は こんで いる。',
    art: 'elevator',
    question: 'こんで いる ときは？',
    choices: ['エレベーターを ずっと 待つ', '「閉」を 何度も 押す', '階段や エスカレーターを 使う'],
    answer: 2,
    explain: '1 つ 上の 階なら、階段を 使うと、エレベーターが 必要な 人が 乗れます。'
  },
  {
    id: 'ele-7',
    category: 'エレベーター',
    scene: 'ドアが 閉まりかけた とき、走って くる 人が 見えた。',
    art: 'elevator',
    question: 'ドアは？',
    choices: ['手や かばんを はさんで 止める', 'ボタンで ドアを 開けて 待つ', '見て いない ふりで 閉める'],
    answer: 1,
    explain: 'ドアに 手や 物を はさむと 危ないです。ボタンを 使って 開けます。'
  },
  {
    id: 'ele-8',
    category: 'エレベーター',
    scene: '目上の 人と いっしょに 乗る。中には だれも いない。',
    art: 'elevator',
    question: '乗る ときの 順は？',
    choices: ['自分が 先に 乗って ボタンを 押す', '目上の 人を おしのけて 乗る', '何も せずに 立って いる'],
    answer: 0,
    explain: '先に 乗って ドアを 開けて おくと、目上の 人が 安心して 乗れます。'
  },
  {
    id: 'ele-9',
    category: 'エレベーター',
    scene: '目当ての 階に 着いた。目上の 人も 同じ 階で 降りる。',
    art: 'elevator',
    question: '降りる ときは？',
    choices: ['自分が 先に 降りる', '「開」を 押して、目上の 人に 先に 降りて もらう', '走って 降りる'],
    answer: 1,
    explain: 'ドアを 開けて おき、目上の 人に 先に 降りて もらいます。'
  },
  {
    id: 'ele-10',
    category: 'エレベーター',
    scene: '降りる 階に 着いた。自分は おくに いて、前に 人が いる。',
    art: 'elevator',
    question: 'どう 出る？',
    choices: ['だまって 押して 出る', '次の 階まで あきらめる', '「降ります」と 声を かけて 出る'],
    answer: 2,
    explain: 'ひとこと 声を かけると、前の 人が よけて くれます。'
  }
);
