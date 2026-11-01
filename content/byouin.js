// 病院の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '病院',
  title: '病院の待合室',
  intro: 'かぜをひいて、近くの病院へ行きます。待合室ではほかの人も待っています。',
  art: 'clinic'
});

Manners.questions.push(
  {
    id: 'byouin-1',
    category: '病院',
    scene: '病院に着いた。入口の近くに受付がある。',
    art: 'clinic',
    question: 'はじめにすることは？',
    choices: ['空いているいすにすわって待つ', '診察室のドアを開けて入る', '受付で保険証を出す'],
    answer: 2,
    explain: '受付をすませると、順番に名前を呼んでもらえます。'
  },
  {
    id: 'byouin-2',
    category: '病院',
    scene: '待合室で待っている。せきが出る。',
    art: 'clinic',
    question: 'どうする？',
    choices: ['マスクをする', '口をおおわずにせきをする', 'ほかの人のすぐ横にすわる'],
    answer: 0,
    explain: 'せきのしぶきがほかの人にとばないようにします。'
  },
  {
    id: 'byouin-3',
    category: '病院',
    scene: '待合室で待っている。スマホを持っている。',
    art: 'clinic',
    question: 'スマホは？',
    choices: ['音が鳴るままにしておく', 'マナーモードにする', '待合室で電話をかける'],
    answer: 1,
    explain: '病院には具合の悪い人がいます。音を出さずに静かに待ちます。'
  },
  {
    id: 'byouin-4',
    category: '病院',
    scene: '待合室で名前を呼ばれた。',
    art: 'clinic',
    question: 'どうする？',
    choices: ['「はい」と返事をして行く', 'だまってゆっくり立つ', 'スマホを見終わってから行く'],
    answer: 0,
    explain: '返事をすると、呼んだ人に聞こえたことが伝わります。'
  },
  {
    id: 'byouin-5',
    category: '病院',
    scene: '診察室でお医者さんに「どうしましたか」と聞かれた。',
    art: 'clinic',
    question: 'どう答える？',
    choices: ['「だいじょうぶです」とだけ言う', '関係のない話を長くする', 'いつからどこが悪いかを伝える'],
    answer: 2,
    explain: '具合を正しく伝えると、合った手当てをしてもらえます。'
  },
  {
    id: 'byouin-6',
    category: '病院',
    scene: '友だちが入院した。お見舞いに花を持っていきたい。',
    art: 'clinic',
    question: 'どうする？',
    choices: ['鉢植えの花を買っていく', '花を持ちこんでよいか病院にたしかめる', '香りの強い花をたくさん持っていく'],
    answer: 1,
    explain: '花を持ちこめない病院もあります。鉢植えは「根づく」が「寝づく」に聞こえるのでさけます。'
  },
  {
    id: 'byouin-7',
    category: '病院',
    scene: '大部屋に入院している友だちをお見舞いする。',
    art: 'clinic',
    question: 'どうする？',
    choices: ['大きな声で笑って話す', '面会の時間が終わるまでいる', '小さな声で話し、短めに帰る'],
    answer: 2,
    explain: '同じ部屋でほかの人も休んでいます。友だちもつかれやすいので、短めにします。'
  },
  {
    id: 'byouin-8',
    category: '病院',
    scene: '病院のろうかを歩いている。',
    art: 'clinic',
    question: '歩き方は？',
    choices: ['走らずにゆっくり歩く', '急いで走る', '友だちと横に広がって歩く'],
    answer: 0,
    explain: '病院には体の弱い人や、車いすの人がいます。'
  },
  {
    id: 'byouin-9',
    category: '病院',
    scene: '診察が終わった。',
    art: 'clinic',
    question: 'このあとは？',
    choices: ['だまって帰る', '受付で会計をすませて帰る', '診察室で次の人を待つ'],
    answer: 1,
    explain: '診察のお金をはらってから帰ります。'
  },
  {
    id: 'byouin-10',
    category: '病院',
    scene: 'お見舞いに行く日。朝からかぜでせきが出る。',
    art: 'clinic',
    question: 'どうする？',
    choices: ['かぜが治ってから行く', 'マスクをせずに行く', '病室でせきをしながら長くいる'],
    answer: 0,
    explain: '入院している人にかぜをうつさないようにします。'
  }
);
