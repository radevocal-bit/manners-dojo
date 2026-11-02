// 映画館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '映画館',
  title: '週末の映画',
  intro: '友だちと映画を見に来ました。',
  art: 'cinema'
});

Manners.questions.push(
  {
    id: 'eiga-1',
    category: '映画館',
    scene: '上映がはじまる前に、席に着いた。',
    art: 'cinema',
    question: 'スマホは？',
    choices: ['音を出したまま置く', '電源を切るかマナーモードにする', '光るまま手に持つ'],
    answer: 1,
    explain: '音や光はほかの人のじゃまになります。上映の前に、音と光が出ないようにします。'
  },
  {
    id: 'eiga-2',
    category: '映画館',
    scene: '映画がはじまった。となりの友だちに感想を言いたい。',
    art: 'cinema',
    question: '感想は？',
    choices: ['すぐ声に出して言う', 'スマホで送る', '見終わってから話す'],
    answer: 2,
    explain: '上映中の声はまわりの人に聞こえます。感想は見終わってから話します。'
  },
  {
    id: 'eiga-3',
    category: '映画館',
    scene: '足を組んだら、前の席に足があたりそうだ。',
    art: 'cinema',
    question: '足は？',
    choices: ['前の席にあたらないように足をおろす', '前の席にのせる', '通路に大きく出す'],
    answer: 0,
    explain: '前の席をけったり押したりすると、前の人が落ち着いて見られません。'
  },
  {
    id: 'eiga-4',
    category: '映画館',
    scene: '上映中にトイレに行きたくなった。席は列のまん中だ。',
    art: 'cinema',
    question: 'どうする？',
    choices: ['だまって人の足をまたいで通る', '大きな音で立ち上がって走る', '体を低くして、「すみません」と小さく言って通る'],
    answer: 2,
    explain: '前を通るときは、画面をさえぎらないように体を低くして、小さな声でことわります。'
  },
  {
    id: 'eiga-5',
    category: '映画館',
    scene: 'ポップコーンを買って席にもどった。',
    art: 'cinema',
    question: '食べるときは？',
    choices: ['音を立てないように静かに食べる', '袋を何度もガサガサ鳴らす', 'こぼれてもそのままにする'],
    answer: 0,
    explain: '食べる音や袋の音は、静かな場面でよくひびきます。'
  },
  {
    id: 'eiga-6',
    category: '映画館',
    scene: '映画におくれて着いた。もうはじまっている。',
    art: 'cinema',
    question: '席へ行くときは？',
    choices: ['スマホの明かりで足もとを大きく照らす', '係の人の案内にしたがって静かに進む', '大きな声で友だちを呼ぶ'],
    answer: 1,
    explain: '暗い中の明かりや声は目立ちます。係の人に案内してもらい、静かに席に着きます。'
  },
  {
    id: 'eiga-7',
    category: '映画館',
    scene: 'まだ映画を見ていない友だちに会った。',
    art: 'cinema',
    question: '話すときは？',
    choices: ['結末を話してしまう', 'SNSに結末を書く', '結末は言わずにおく'],
    answer: 2,
    explain: '先に結末を知ると、見る楽しみがへります。見ていない人には話しません。'
  },
  {
    id: 'eiga-8',
    category: '映画館',
    scene: 'となりの人との間にひじかけが1つある。',
    art: 'cinema',
    question: 'ひじかけは？',
    choices: ['両方とも自分が使う', 'となりの人とゆずりあう', 'かばんを置く'],
    answer: 1,
    explain: 'ひじかけはとなりの人といっしょに使う物です。ゆずりあって使います。'
  },
  {
    id: 'eiga-9',
    category: '映画館',
    scene: 'エンドロールがはじまった。まだ見ている人が多い。',
    art: 'cinema',
    question: '帰るときは？',
    choices: ['明るくなるまで待つか、低い姿勢で静かに出る', 'すぐ立って画面の前を通る', '大きな声で感想を話しながら出る'],
    answer: 0,
    explain: 'さいごまで見たい人もいます。じゃまをしないように、静かに出ます。'
  },
  {
    id: 'eiga-10',
    category: '映画館',
    scene: '見終わった。足もとにポップコーンの入れ物と飲み物のカップがある。',
    art: 'cinema',
    question: '帰る前に？',
    choices: ['席に置いたまま帰る', '床に置いて帰る', '自分で持って出て、決められた所に捨てる'],
    answer: 2,
    explain: '次の回の人が気持ちよく使えるように、ごみは持って出ます。'
  }
);
