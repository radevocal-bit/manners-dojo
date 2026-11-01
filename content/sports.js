// スポーツ観戦の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'スポーツ観戦',
  title: '野球の試合',
  intro: '友だちと野球の試合を見に来ました。',
  art: 'stadium'
});

Manners.questions.push(
  {
    id: 'sports-1',
    category: 'スポーツ観戦',
    scene: '試合がはじまった。うしろの席にも人がいる。',
    art: 'stadium',
    question: '見るときは？',
    choices: ['ずっと立って見る', '座って見る', '大きな旗をふりつづける'],
    answer: 1,
    explain: '立ったり旗をふったりすると、うしろの人が見えません。'
  },
  {
    id: 'sports-2',
    category: 'スポーツ観戦',
    scene: 'ファウルボールが飛んできた。',
    art: 'stadium',
    question: 'どうする？',
    choices: ['ボールから目をはなさず、あぶないときはよける', 'スマホで動画をとり続ける', '前の席にとびこむ'],
    answer: 0,
    explain: 'ボールは速く飛んできます。目をはなさず、身を守ります。'
  },
  {
    id: 'sports-3',
    category: 'スポーツ観戦',
    scene: '相手のチームが点を入れた。',
    art: 'stadium',
    question: '相手のチームへは？',
    choices: ['大きな声で悪口を言う', '物を投げる', 'よいプレーにははく手をする'],
    answer: 2,
    explain: 'おたがいのチームを大切にします。悪口や物を投げるのはいけません。'
  },
  {
    id: 'sports-4',
    category: 'スポーツ観戦',
    scene: '雨がふってきた。かさを持っている。',
    art: 'stadium',
    question: '雨のときは？',
    choices: ['かさをさして見る', 'カッパ（雨具）を着る', '前の人の上にかさを広げる'],
    answer: 1,
    explain: 'かさをさすと、うしろの人が見えなくなります。観客席では雨具を着ます。'
  },
  {
    id: 'sports-5',
    category: 'スポーツ観戦',
    scene: '試合が終わった。足もとにごみがある。',
    art: 'stadium',
    question: 'ごみは？',
    choices: ['席に置いて帰る', '下の席に落とす', 'ごみ箱に捨てるか、持ち帰る'],
    answer: 2,
    explain: 'みんなで使う観客席です。ごみは自分で片付けます。'
  },
  {
    id: 'sports-6',
    category: 'スポーツ観戦',
    scene: '入口で長い列に並んでいる。',
    art: 'stadium',
    question: '並ぶときは？',
    choices: ['友だちを列の前に入れる', '自分の番まで順に並ぶ', '列をぬけて先に入る'],
    answer: 1,
    explain: 'ほかの人も待っています。順番を守ります。'
  },
  {
    id: 'sports-7',
    category: 'スポーツ観戦',
    scene: 'おうえんのタオルを持っている。',
    art: 'stadium',
    question: 'タオルは？',
    choices: ['まわりに当たらないようにふる', '人の顔の前で大きくふりまわす', 'グラウンドに投げこむ'],
    answer: 0,
    explain: 'まわりの人に当たらないように気をつけます。グラウンドに物を投げてはいけません。'
  },
  {
    id: 'sports-8',
    category: 'スポーツ観戦',
    scene: '自分の席の番号がわからない。',
    art: 'stadium',
    question: '席がわからないときは？',
    choices: ['空いている席に適当に座る', 'ほかの人をどかして座る', 'チケットの番号を見て、わからなければ係の人に聞く'],
    answer: 2,
    explain: '席はチケットで決まっています。わからないときは係の人に聞きます。'
  },
  {
    id: 'sports-9',
    category: 'スポーツ観戦',
    scene: '選手にサインをもらいたい。練習中の選手が近くにいる。',
    art: 'stadium',
    question: 'サインは？',
    choices: ['決められた場所と時間を守る', 'さくをこえて近づく', '大きな声で何度も呼ぶ'],
    answer: 0,
    explain: '選手の練習のじゃまをしないように、決まりを守ります。'
  },
  {
    id: 'sports-10',
    category: 'スポーツ観戦',
    scene: '帰りの駅がとてもこんでいる。',
    art: 'stadium',
    question: '帰るときは？',
    choices: ['人を押して前に進む', '止まって写真をとる', '係の人の案内にしたがい、順に進む'],
    answer: 2,
    explain: 'こんだ所で押すとあぶないです。案内にしたがって進みます。'
  }
);
