// 公共の場の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '公共の場',
  title: 'はじめての電車通勤',
  intro: '今日から電車で会社に通います。朝の電車は人でいっぱいです。',
  art: 'train'
});

Manners.questions.push(
  {
    id: 'koukyou-1',
    category: '公共の場',
    scene: 'ホームで待っていた。電車が着いてドアが開いた。',
    art: 'train',
    question: '乗るときはどうする？',
    choices: ['すぐ乗りこむ', 'ドアの横で待ち、降りる人を先に通す', 'ドアの前に立って待つ'],
    answer: 1,
    explain: '降りる人が出ないと乗れません。先に通すほうが早く乗れます。'
  },
  {
    id: 'koukyou-2',
    category: '公共の場',
    scene: 'こんだ車内。せなかにリュックをせおっている。',
    art: 'train',
    question: 'リュックはどうする？',
    choices: ['前にかかえる', 'せおったまま立つ', '横の人にあずける'],
    answer: 0,
    explain: 'せなかの荷物は自分から見えず、人に当たります。'
  },
  {
    id: 'koukyou-3',
    category: '公共の場',
    scene: '車内でスマホに電話がかかってきた。',
    art: 'train',
    question: 'どうする？',
    choices: ['小さな声で出て話す', 'ふつうの声で話す', '出ずに、降りてからかけ直す'],
    answer: 2,
    explain: '車内の通話はまわりの迷惑になります。マナーモードにしておきます。'
  },
  {
    id: 'koukyou-4',
    category: '公共の場',
    scene: '座っていたら、つえをついたお年寄りが乗ってきた。',
    art: 'train',
    question: 'どうする？',
    choices: ['気づかないふりをする', '声をかけて席をゆずる', 'スマホを見つづける'],
    answer: 1,
    explain: '立つのがつらい人に席をゆずります。声をかけると相手も座りやすいです。'
  },
  {
    id: 'koukyou-5',
    category: '公共の場',
    scene: '雨の日。ぬれた傘を持って乗った。',
    art: 'train',
    question: '傘はどう持つ？',
    choices: ['たたんでとめ、自分の足元で持つ', '開いたまま持つ', '横にしてわきにはさむ'],
    answer: 0,
    explain: 'ぬれた傘でまわりの人の服や荷物をぬらさないようにします。'
  },
  {
    id: 'koukyou-6',
    category: '公共の場',
    scene: 'こんだ朝の電車。おなかがすいてきた。',
    art: 'train',
    question: '朝ごはんのパンは？',
    choices: ['車内で食べる', '降りてから食べる', '立ったまま少しずつ食べる'],
    answer: 1,
    explain: 'こんだ車内での食べ物は、においやくずでまわりの迷惑になります。'
  },
  {
    id: 'koukyou-7',
    category: '公共の場',
    scene: '車内でイヤホンで音楽を聞いている。',
    art: 'train',
    question: '音の大きさは？',
    choices: ['音もれしないように小さくする', '好きなだけ大きくする', 'イヤホンを外してスマホから流す'],
    answer: 0,
    explain: 'イヤホンの音もれは、まわりの人にはうるさく聞こえます。'
  },
  {
    id: 'koukyou-8',
    category: '公共の場',
    scene: '座れた。手に大きなかばんを持っている。',
    art: 'train',
    question: 'かばんはどこに置く？',
    choices: ['となりの座席に置く', '通路に置く', 'ひざの上かあみだなに置く'],
    answer: 2,
    explain: '座席は人がすわるための物です。'
  },
  {
    id: 'koukyou-9',
    category: '公共の場',
    scene: 'ドアのそばに立っていたら、駅に着いて人が降りる。',
    art: 'train',
    question: 'どうする？',
    choices: ['ドアの前で動かずに立つ', 'いったんホームに降りて道をあける', 'スマホを見たまま立つ'],
    answer: 1,
    explain: '降りる人が通りやすくなり、電車もおくれません。'
  },
  {
    id: 'koukyou-10',
    category: '公共の場',
    scene: '駅のエスカレーターに乗る。',
    art: 'train',
    question: 'どう乗る？',
    choices: ['手すりにつかまり、立ち止まって乗る', '片側を歩いてのぼる', 'かけ足でのぼる'],
    answer: 0,
    explain: 'エスカレーターは歩かずに乗るものです。歩くとぶつかってあぶないです。'
  }
);
