// エレベーターの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'エレベーター',
  title: 'ビルのエレベーター',
  intro: '用事で大きなビルに来ました。エレベーターに乗ります。',
  art: 'elevator'
});

Manners.questions.push(
  {
    id: 'ele-1',
    category: 'エレベーター',
    scene: 'エレベーターに乗ったら、ボタンの前に立った。あとから人が乗ってくる。',
    art: 'elevator',
    question: 'ボタンの前では？',
    choices: ['「開」を押して待つ', '「閉」をすぐ押す', 'ボタンからはなれる'],
    answer: 0,
    explain: 'ボタンの前に立った人が、みんなのためにドアを開けて待ちます。'
  },
  {
    id: 'ele-2',
    category: 'エレベーター',
    scene: 'あとから乗ってきた人が、行きたい階のボタンに手がとどかない。',
    art: 'elevator',
    question: 'どうする？',
    choices: ['だまって見ている', '「何階ですか」と聞いて押す', '全部の階を押す'],
    answer: 1,
    explain: 'ボタンの近くにいる人が、声をかけて代わりに押します。'
  },
  {
    id: 'ele-3',
    category: 'エレベーター',
    scene: '中がこんできた。自分はドアの近くにいる。',
    art: 'elevator',
    question: 'どこに立つ？',
    choices: ['ドアの前に立ち続ける', 'かばんを床に広げる', 'おくへつめる'],
    answer: 2,
    explain: 'あとから乗る人のために、おくへつめて場所をあけます。'
  },
  {
    id: 'ele-4',
    category: 'エレベーター',
    scene: '友だちと2人で乗っている。ほかの人もいる。',
    art: 'elevator',
    question: '話すときは？',
    choices: ['大きな声で話す', '会社のひみつの話をする', '降りるまで話さないか、小さな声にする'],
    answer: 2,
    explain: 'せまい中では声がよくひびきます。ほかの人がいるときは静かにします。'
  },
  {
    id: 'ele-5',
    category: 'エレベーター',
    scene: '車いすの人がエレベーターを待っている。',
    art: 'elevator',
    question: 'どうする？',
    choices: ['先に乗ってもらう', '急いで先に乗る', '気づかないふりをする'],
    answer: 0,
    explain: 'エレベーターがないとこまる人もいます。ゆずって、先に乗ってもらいます。'
  },
  {
    id: 'ele-6',
    category: 'エレベーター',
    scene: '1つ上の階に行きたい。エレベーターの前はこんでいる。',
    art: 'elevator',
    question: 'こんでいるときは？',
    choices: ['エレベーターをずっと待つ', '「閉」を何度も押す', '階段やエスカレーターを使う'],
    answer: 2,
    explain: '1つ上の階なら、階段を使うと、エレベーターが必要な人が乗れます。'
  },
  {
    id: 'ele-7',
    category: 'エレベーター',
    scene: 'ドアが閉まりかけたとき、走ってくる人が見えた。',
    art: 'elevator',
    question: 'ドアは？',
    choices: ['手やかばんをはさんで止める', 'ボタンでドアを開けて待つ', '見ていないふりで閉める'],
    answer: 1,
    explain: 'ドアに手や物をはさむと危ないです。ボタンを使って開けます。'
  },
  {
    id: 'ele-8',
    category: 'エレベーター',
    scene: '目上の人といっしょに乗る。中にはだれもいない。',
    art: 'elevator',
    question: '乗るときの順は？',
    choices: ['自分が先に乗ってボタンを押す', '目上の人をおしのけて乗る', '何もせずに立っている'],
    answer: 0,
    explain: '先に乗ってドアを開けておくと、目上の人が安心して乗れます。'
  },
  {
    id: 'ele-9',
    category: 'エレベーター',
    scene: '目当ての階に着いた。目上の人も同じ階で降りる。',
    art: 'elevator',
    question: '降りるときは？',
    choices: ['自分が先に降りる', '「開」を押して、目上の人に先に降りてもらう', '走って降りる'],
    answer: 1,
    explain: 'ドアを開けておき、目上の人に先に降りてもらいます。'
  },
  {
    id: 'ele-10',
    category: 'エレベーター',
    scene: '降りる階に着いた。自分はおくにいて、前に人がいる。',
    art: 'elevator',
    question: 'どう出る？',
    choices: ['だまって押して出る', '次の階まであきらめる', '「降ります」と声をかけて出る'],
    answer: 2,
    explain: 'ひとこと声をかけると、前の人がよけてくれます。'
  }
);
