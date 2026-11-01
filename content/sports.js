// スポーツ観戦の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'スポーツ観戦',
  title: '野球の 試合',
  intro: '友だちと 野球の 試合を 見に 来ました。',
  art: 'stadium'
});

Manners.questions.push(
  {
    id: 'sports-1',
    category: 'スポーツ観戦',
    scene: '試合が はじまった。うしろの 席にも 人が いる。',
    art: 'stadium',
    question: '見る ときは？',
    choices: ['ずっと 立って 見る', '座って 見る', '大きな 旗を ふりつづける'],
    answer: 1,
    explain: '立ったり 旗を ふったり すると、うしろの 人が 見えません。'
  },
  {
    id: 'sports-2',
    category: 'スポーツ観戦',
    scene: 'ファウルボールが 飛んで きた。',
    art: 'stadium',
    question: 'どう する？',
    choices: ['ボールから 目を はなさず、あぶない ときは よける', 'スマホで 動画を とり続ける', '前の 席に とびこむ'],
    answer: 0,
    explain: 'ボールは 速く 飛んで きます。目を はなさず、身を 守ります。'
  },
  {
    id: 'sports-3',
    category: 'スポーツ観戦',
    scene: '相手の チームが 点を 入れた。',
    art: 'stadium',
    question: '相手の チームへは？',
    choices: ['大きな 声で 悪口を 言う', '物を 投げる', 'よい プレーには はく手を する'],
    answer: 2,
    explain: 'おたがいの チームを 大切に します。悪口や 物を 投げるのは いけません。'
  },
  {
    id: 'sports-4',
    category: 'スポーツ観戦',
    scene: '雨が ふって きた。かさを 持って いる。',
    art: 'stadium',
    question: '雨の ときは？',
    choices: ['かさを さして 見る', 'カッパ（雨具）を 着る', '前の 人の 上に かさを 広げる'],
    answer: 1,
    explain: 'かさを さすと、うしろの 人が 見えなく なります。観客席では 雨具を 着ます。'
  },
  {
    id: 'sports-5',
    category: 'スポーツ観戦',
    scene: '試合が 終わった。足もとに ごみが ある。',
    art: 'stadium',
    question: 'ごみは？',
    choices: ['席に 置いて 帰る', '下の 席に 落とす', 'ごみ箱に 捨てるか、持ち帰る'],
    answer: 2,
    explain: 'みんなで 使う 観客席です。ごみは 自分で 片付けます。'
  },
  {
    id: 'sports-6',
    category: 'スポーツ観戦',
    scene: '入口で 長い 列に 並んで いる。',
    art: 'stadium',
    question: '並ぶ ときは？',
    choices: ['友だちを 列の 前に 入れる', '自分の 番まで 順に 並ぶ', '列を ぬけて 先に 入る'],
    answer: 1,
    explain: 'ほかの 人も 待って います。順番を 守ります。'
  },
  {
    id: 'sports-7',
    category: 'スポーツ観戦',
    scene: 'おうえんの タオルを 持って いる。',
    art: 'stadium',
    question: 'タオルは？',
    choices: ['まわりに 当たらない ように ふる', '人の 顔の 前で 大きく ふりまわす', 'グラウンドに 投げこむ'],
    answer: 0,
    explain: 'まわりの 人に 当たらない ように 気を つけます。グラウンドに 物を 投げては いけません。'
  },
  {
    id: 'sports-8',
    category: 'スポーツ観戦',
    scene: '自分の 席の 番号が わからない。',
    art: 'stadium',
    question: '席が わからない ときは？',
    choices: ['空いて いる 席に 適当に 座る', 'ほかの 人を どかして 座る', 'チケットの 番号を 見て、わからなければ 係の 人に 聞く'],
    answer: 2,
    explain: '席は チケットで 決まって います。わからない ときは 係の 人に 聞きます。'
  },
  {
    id: 'sports-9',
    category: 'スポーツ観戦',
    scene: '選手に サインを もらいたい。練習中の 選手が 近くに いる。',
    art: 'stadium',
    question: 'サインは？',
    choices: ['決められた 場所と 時間を 守る', 'さくを こえて 近づく', '大きな 声で 何度も 呼ぶ'],
    answer: 0,
    explain: '選手の 練習の じゃまを しない ように、決まりを 守ります。'
  },
  {
    id: 'sports-10',
    category: 'スポーツ観戦',
    scene: '帰りの 駅が とても こんで いる。',
    art: 'stadium',
    question: '帰る ときは？',
    choices: ['人を 押して 前に 進む', '止まって 写真を とる', '係の 人の 案内に したがい、順に 進む'],
    answer: 2,
    explain: 'こんだ 所で 押すと あぶないです。案内に したがって 進みます。'
  }
);
