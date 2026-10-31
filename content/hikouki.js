// 飛行機の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '飛行機',
  title: 'はじめての 飛行機',
  intro: '家族と 飛行機で 旅行に 行きます。せまい 中で みんなが 気持ちよく すごせる ように します。',
  art: 'plane'
});

Manners.questions.push(
  {
    id: 'hikouki-1',
    category: '飛行機',
    scene: '飛行機に 乗った。大きな 荷物を 持って いる。',
    art: 'plane',
    question: '荷物は？',
    choices: ['通路に 置く', '自分の 席の 上の 棚に 入れる', 'となりの 席に 置く'],
    answer: 1,
    explain: '通路に 置くと、ほかの 人が 通れません。荷物は 決められた 棚に 入れます。'
  },
  {
    id: 'hikouki-2',
    category: '飛行機',
    scene: '席に すわった。いすの 背を たおしたい。',
    art: 'plane',
    question: 'どう する？',
    choices: ['うしろの 人に ひとこと 声を かけて から ゆっくり たおす', 'だまって いきおい よく たおす', '食事中に 急に たおす'],
    answer: 0,
    explain: 'うしろの 人の ひざや テーブルに 当たらない ように します。'
  },
  {
    id: 'hikouki-3',
    category: '飛行機',
    scene: 'シートベルトの サインが ついた。',
    art: 'plane',
    question: 'どう する？',
    choices: ['トイレに 立つ', 'ベルトを しない', '席に すわって ベルトを しめる'],
    answer: 2,
    explain: 'ゆれても けがを しない ように、サインが 消えるまで 席で 待ちます。'
  },
  {
    id: 'hikouki-4',
    category: '飛行機',
    scene: '窓側の 席から トイレに 行きたい。となりの 人が ねて いる。',
    art: 'plane',
    question: 'どう する？',
    choices: ['だまって またいで 行く', '「すみません」と 声を かけて 通して もらう', 'となりの 人の いすに 足を かけて こえる'],
    answer: 1,
    explain: 'ひとこと 声を かけると、となりの 人も 気持ちよく 立てます。'
  },
  {
    id: 'hikouki-5',
    category: '飛行機',
    scene: '飛行機が 着いた。早く 降りたい。',
    art: 'plane',
    question: 'どう する？',
    choices: ['ほかの 人を おして 前に 出る', '動く 前から 立って 待つ', '前の 列の 人から 順に 降りる'],
    answer: 2,
    explain: '前の 人から 順に 降りると、みんなが 早く 安全に 降りられます。'
  },
  {
    id: 'hikouki-6',
    category: '飛行機',
    scene: 'となりに すわる 弟が、前の 席の 背を 足で けって いる。',
    art: 'plane',
    question: 'どう する？',
    choices: ['やめさせる', 'そのまま に して おく', 'いっしょに けって 遊ぶ'],
    answer: 0,
    explain: '前の 席の 人に ゆれが 伝わり、休めません。'
  },
  {
    id: 'hikouki-7',
    category: '飛行機',
    scene: '機内で 映画を 見る。',
    art: 'plane',
    question: '音は？',
    choices: ['スピーカーで 大きく 流す', 'イヤホンで 聞く', '友だちと 大声で 感想を 言い合う'],
    answer: 1,
    explain: 'まわりには ねて いる 人も います。音は 自分 だけに 聞こえる ように します。'
  },
  {
    id: 'hikouki-8',
    category: '飛行機',
    scene: '客室乗務員を 呼びたい。',
    art: 'plane',
    question: 'どう する？',
    choices: ['大声で「ちょっと！」と 呼ぶ', '通る 人の 服を 引っぱる', '呼び出しボタンを 押す'],
    answer: 2,
    explain: 'ボタンを 押すと、まわりの 人を おこさずに 呼べます。'
  },
  {
    id: 'hikouki-9',
    category: '飛行機',
    scene: '機内の トイレを 使った。',
    art: 'plane',
    question: '出る 前に？',
    choices: ['洗面台を さっと ふいて 出る', 'ぬれた まま に して 出る', 'ごみを 床に 置いて 出る'],
    answer: 0,
    explain: '次の 人が 気持ちよく 使えます。'
  },
  {
    id: 'hikouki-10',
    category: '飛行機',
    scene: 'となりの 窓側の 人が トイレに 行きたそうだ。自分は 通路側に すわって いる。',
    art: 'plane',
    question: 'どう する？',
    choices: ['気づかない ふりを する', '立って 通して あげる', '足を 通路に のばす'],
    answer: 1,
    explain: '通路側の 人が 立つと、奥の 人も 出やすく なります。'
  }
);
