// カフェの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'カフェ',
  title: '駅前の カフェ',
  intro: '友だちを 待つ あいだ、駅前の カフェに 入りました。',
  art: 'cafe'
});

Manners.questions.push(
  {
    id: 'cafe-1',
    category: 'カフェ',
    scene: 'レジの 前に 列が ある。何を 頼むか まだ 決めて いない。',
    art: 'cafe',
    question: '注文は？',
    choices: ['列に 並びながら メニューを 見て 決めて おく', 'レジの 前で 長く 考える', '列を ぬかして 先に 聞く'],
    answer: 0,
    explain: 'うしろの 人を 待たせない ように、並んで いる あいだに 決めて おきます。'
  },
  {
    id: 'cafe-2',
    category: 'カフェ',
    scene: '席を 取って から 注文したい。かばんを 持って いる。',
    art: 'cafe',
    question: '席は？',
    choices: ['かばんで 4 人席を 取る', 'お店の 決まりを 見て、使う 分 だけ 取る', 'まだ 注文しないで 長く 座る'],
    answer: 1,
    explain: '席の 取り方は お店ごとに ちがいます。使う 分 だけに します。'
  },
  {
    id: 'cafe-3',
    category: 'カフェ',
    scene: 'パソコンで 仕事を したい。店は こんで きた。',
    art: 'cafe',
    question: 'どう する？',
    choices: ['何時間も 席を 使う', 'となりの 席にも 荷物を 広げる', 'こんで きたら 早めに 席を ゆずる'],
    answer: 2,
    explain: 'こんで いる ときは、待って いる 人の ために 長居を しません。'
  },
  {
    id: 'cafe-4',
    category: 'カフェ',
    scene: 'スマホに 電話が かかって きた。',
    art: 'cafe',
    question: '電話は？',
    choices: ['席で 大きな 声で 話す', '店の 外に 出て 話す', 'スピーカーに して 話す'],
    answer: 1,
    explain: 'カフェで 静かに すごしたい 人も います。電話は 外で 話します。'
  },
  {
    id: 'cafe-5',
    category: 'カフェ',
    scene: '飲み終わった。テーブルに カップと トレーが ある。',
    art: 'cafe',
    question: '帰る ときは？',
    choices: ['そのまま 帰る', '床に 置いて 帰る', '返却口に 返す'],
    answer: 2,
    explain: '返却口が ある お店では、自分で 返します。'
  },
  {
    id: 'cafe-6',
    category: 'カフェ',
    scene: '店員さんが コーヒーを 持って きて くれた。',
    art: 'cafe',
    question: '受け取る ときは？',
    choices: ['だまって 受け取る', '「ありがとう」と 言う', 'スマホを 見た まま 受け取る'],
    answer: 1,
    explain: 'ひとこと お礼を 言うと、おたがいに 気持ち よく すごせます。'
  },
  {
    id: 'cafe-7',
    category: 'カフェ',
    scene: 'コンセントの ある 席が 1 つ だけ あいて いる。',
    art: 'cafe',
    question: 'コンセントは？',
    choices: ['使って よいか お店の 決まりを たしかめる', 'だまって 何台も つなぐ', '席を 移動して コードを 引っぱる'],
    answer: 0,
    explain: 'コンセントを 使って よいかは お店ごとに ちがいます。'
  },
  {
    id: 'cafe-8',
    category: 'カフェ',
    scene: '持って きた おかしを 食べたく なった。',
    art: 'cafe',
    question: '食べ物は？',
    choices: ['お店で 買った 物を 食べる', '持って きた 物を 広げて 食べる', 'お店の 外の 物を 店員さんに あたためて もらう'],
    answer: 0,
    explain: 'カフェでは、お店で 買った 物を 食べるのが 決まりです。'
  },
  {
    id: 'cafe-9',
    category: 'カフェ',
    scene: '友だちと 2 人で 話して いる。となりの 人は 本を 読んで いる。',
    art: 'cafe',
    question: '話す ときは？',
    choices: ['大きな 声で 笑う', '店の 中を 歩きながら 話す', 'まわりに 聞こえない くらいの 声で 話す'],
    answer: 2,
    explain: 'まわりの 人も くつろいで います。声の 大きさに 気を つけます。'
  },
  {
    id: 'cafe-10',
    category: 'カフェ',
    scene: 'テーブルに コーヒーを こぼして しまった。',
    art: 'cafe',
    question: 'こぼしたら？',
    choices: ['だまって 帰る', '別の 席に 移って そのままに する', 'ナプキンで ふいて、店員さんに 伝える'],
    answer: 2,
    explain: 'こぼした ときは すぐ ふいて、お店の 人に 伝えます。'
  }
);
