// お祭りの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.stories = Manners.stories || [];
Manners.questions = Manners.questions || [];

Manners.stories.push({
  category: 'お祭り',
  title: '夏祭りの夜',
  intro: '近所の神社で夏祭りがあります。友だちと出かけました。',
  art: 'festival'
});

Manners.questions.push(
  {
    id: 'matsuri-1',
    category: 'お祭り',
    scene: '屋台でやきそばを買った。食べ終わって、空の入れ物がある。',
    art: 'festival',
    question: '入れ物は？',
    choices: ['道ばたに置く', 'ごみ箱に捨てるか、持ち帰る', '屋台の台に置いていく'],
    answer: 1,
    explain: 'ごみを置いていくと、お祭りのあとの片付けが大変になります。'
  },
  {
    id: 'matsuri-2',
    category: 'お祭り',
    scene: '屋台の前に長い列ができている。',
    art: 'festival',
    question: '並ぶときは？',
    choices: ['列のとちゅうに入る', '友だちに先に並んでもらい、あとから何人も入る', '列のいちばんうしろに並ぶ'],
    answer: 2,
    explain: '列は来た順です。うしろに並びます。'
  },
  {
    id: 'matsuri-3',
    category: 'お祭り',
    scene: '人がとても多い道を歩いている。手にわたあめを持っている。',
    art: 'festival',
    question: '歩くときは？',
    choices: ['人にぶつけないように気をつけて持つ', 'ふりまわしながら歩く', '走って人の間をぬける'],
    answer: 0,
    explain: 'こんでいる所では、食べ物が人の服につかないように持ちます。'
  },
  {
    id: 'matsuri-4',
    category: 'お祭り',
    scene: '花火を見るために、早めに場所をとりたい。',
    art: 'festival',
    question: '場所は？',
    choices: ['決められた場所で、必要な広さだけ使う', '大きなシートで広く取る', '道のまん中にすわる'],
    answer: 0,
    explain: '見たい人はたくさんいます。みんなが見られるように、広く取りすぎません。'
  },
  {
    id: 'matsuri-5',
    category: 'お祭り',
    scene: '神社の前を通る。お参りをしたい。',
    art: 'festival',
    question: 'どうする？',
    choices: ['列に並び、順番にお参りする', '前の人を押して進む', 'さいせん箱に遠くから投げる'],
    answer: 0,
    explain: 'お参りの列も順番を守ります。お金は投げずにそっと入れます。'
  },
  {
    id: 'matsuri-6',
    category: 'お祭り',
    scene: '子どもが迷子になって泣いている。',
    art: 'festival',
    question: '迷子を見つけたら？',
    choices: ['見なかったことにする', '自分の家に連れて帰る', '近くの係の人や本部に知らせる'],
    answer: 2,
    explain: '迷子は係の人や本部に知らせます。親をさがす方法があります。'
  },
  {
    id: 'matsuri-7',
    category: 'お祭り',
    scene: '夜になって、家の近くの道を帰る。',
    art: 'festival',
    question: '帰り道は？',
    choices: ['大きな声でさわぎながら帰る', '近所の家に気をつけて静かに帰る', '花火の残りを道でする'],
    answer: 1,
    explain: '夜は休んでいる人もいます。静かに帰ります。'
  },
  {
    id: 'matsuri-8',
    category: 'お祭り',
    scene: '屋台で食べ物を買った。歩きながら食べたい。',
    art: 'festival',
    question: '食べるときは？',
    choices: ['こんだ道で歩きながら食べる', '決められた場所やすいている所で止まって食べる', '神社の階段に広げて食べる'],
    answer: 1,
    explain: 'こんだ中を歩きながら食べると、人にぶつかってあぶないです。'
  },
  {
    id: 'matsuri-9',
    category: 'お祭り',
    scene: '友だちと写真をとりたい。道は人でいっぱいだ。',
    art: 'festival',
    question: '写真は？',
    choices: ['道のまん中で止まってとる', '屋台の中に入ってとる', '人のじゃまにならないはしでとる'],
    answer: 2,
    explain: '道のまん中で止まると、人の流れを止めてしまいます。'
  },
  {
    id: 'matsuri-10',
    category: 'お祭り',
    scene: '屋台の人に注文する。',
    art: 'festival',
    question: '注文のときは？',
    choices: ['「やきそばください」とはっきり言う', '指でさすだけでだまっている', 'お金を投げてわたす'],
    answer: 0,
    explain: 'ひとこと言うと、屋台の人もわかりやすく、気持ちよくやり取りができます。'
  }
);
