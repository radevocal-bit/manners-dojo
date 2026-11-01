// カフェの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'カフェ',
  title: '駅前のカフェ',
  intro: '友だちを待つあいだ、駅前のカフェに入りました。',
  art: 'cafe'
});

Manners.questions.push(
  {
    id: 'cafe-1',
    category: 'カフェ',
    scene: 'レジの前に列がある。何を頼むかまだ決めていない。',
    art: 'cafe',
    question: '注文は？',
    choices: ['列に並びながらメニューを見て決めておく', 'レジの前で長く考える', '列をぬかして先に聞く'],
    answer: 0,
    explain: 'うしろの人を待たせないように、並んでいるあいだに決めておきます。'
  },
  {
    id: 'cafe-2',
    category: 'カフェ',
    scene: '席を取ってから注文したい。かばんを持っている。',
    art: 'cafe',
    question: '席は？',
    choices: ['かばんで4人席を取る', 'お店の決まりを見て、使う分だけ取る', 'まだ注文しないで長く座る'],
    answer: 1,
    explain: '席の取り方はお店ごとにちがいます。使う分だけにします。'
  },
  {
    id: 'cafe-3',
    category: 'カフェ',
    scene: 'パソコンで仕事をしたい。店はこんできた。',
    art: 'cafe',
    question: 'どうする？',
    choices: ['何時間も席を使う', 'となりの席にも荷物を広げる', 'こんできたら早めに席をゆずる'],
    answer: 2,
    explain: 'こんでいるときは、待っている人のために長居をしません。'
  },
  {
    id: 'cafe-4',
    category: 'カフェ',
    scene: 'スマホに電話がかかってきた。',
    art: 'cafe',
    question: '電話は？',
    choices: ['席で大きな声で話す', '店の外に出て話す', 'スピーカーにして話す'],
    answer: 1,
    explain: 'カフェで静かにすごしたい人もいます。電話は外で話します。'
  },
  {
    id: 'cafe-5',
    category: 'カフェ',
    scene: '飲み終わった。テーブルにカップとトレーがある。',
    art: 'cafe',
    question: '帰るときは？',
    choices: ['そのまま帰る', '床に置いて帰る', '返却口に返す'],
    answer: 2,
    explain: '返却口があるお店では、自分で返します。'
  },
  {
    id: 'cafe-6',
    category: 'カフェ',
    scene: '店員さんがコーヒーを持ってきてくれた。',
    art: 'cafe',
    question: '受け取るときは？',
    choices: ['だまって受け取る', '「ありがとう」と言う', 'スマホを見たまま受け取る'],
    answer: 1,
    explain: 'ひとことお礼を言うと、おたがいに気持ちよくすごせます。'
  },
  {
    id: 'cafe-7',
    category: 'カフェ',
    scene: 'コンセントのある席が1つだけあいている。',
    art: 'cafe',
    question: 'コンセントは？',
    choices: ['使ってよいかお店の決まりをたしかめる', 'だまって何台もつなぐ', '席を移動してコードを引っぱる'],
    answer: 0,
    explain: 'コンセントを使ってよいかはお店ごとにちがいます。'
  },
  {
    id: 'cafe-8',
    category: 'カフェ',
    scene: '持ってきたおかしを食べたくなった。',
    art: 'cafe',
    question: '食べ物は？',
    choices: ['お店で買った物を食べる', '持ってきた物を広げて食べる', 'お店の外の物を店員さんにあたためてもらう'],
    answer: 0,
    explain: 'カフェでは、お店で買った物を食べるのが決まりです。'
  },
  {
    id: 'cafe-9',
    category: 'カフェ',
    scene: '友だちと2人で話している。となりの人は本を読んでいる。',
    art: 'cafe',
    question: '話すときは？',
    choices: ['大きな声で笑う', '店の中を歩きながら話す', 'まわりに聞こえないくらいの声で話す'],
    answer: 2,
    explain: 'まわりの人もくつろいでいます。声の大きさに気をつけます。'
  },
  {
    id: 'cafe-10',
    category: 'カフェ',
    scene: 'テーブルにコーヒーをこぼしてしまった。',
    art: 'cafe',
    question: 'こぼしたら？',
    choices: ['だまって帰る', '別の席に移ってそのままにする', 'ナプキンでふいて、店員さんに伝える'],
    answer: 2,
    explain: 'こぼしたときはすぐふいて、お店の人に伝えます。'
  }
);
