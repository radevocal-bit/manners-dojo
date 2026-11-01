// 飛行機の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '飛行機',
  title: 'はじめての飛行機',
  intro: '家族と飛行機で旅行に行きます。せまい中でみんなが気持ちよくすごせるようにします。',
  art: 'plane'
});

Manners.questions.push(
  {
    id: 'hikouki-1',
    category: '飛行機',
    scene: '飛行機に乗った。大きな荷物を持っている。',
    art: 'plane',
    question: '荷物は？',
    choices: ['通路に置く', '自分の席の上の棚に入れる', 'となりの席に置く'],
    answer: 1,
    explain: '通路に置くと、ほかの人が通れません。荷物は決められた棚に入れます。'
  },
  {
    id: 'hikouki-2',
    category: '飛行機',
    scene: '席にすわった。いすの背をたおしたい。',
    art: 'plane',
    question: 'どうする？',
    choices: ['うしろの人にひとこと声をかけてからゆっくりたおす', 'だまっていきおいよくたおす', '食事中に急にたおす'],
    answer: 0,
    explain: 'うしろの人のひざやテーブルに当たらないようにします。'
  },
  {
    id: 'hikouki-3',
    category: '飛行機',
    scene: 'シートベルトのサインがついた。',
    art: 'plane',
    question: 'どうする？',
    choices: ['トイレに立つ', 'ベルトをしない', '席にすわってベルトをしめる'],
    answer: 2,
    explain: 'ゆれてもけがをしないように、サインが消えるまで席で待ちます。'
  },
  {
    id: 'hikouki-4',
    category: '飛行機',
    scene: '窓側の席からトイレに行きたい。となりの人がねている。',
    art: 'plane',
    question: 'どうする？',
    choices: ['だまってまたいで行く', '「すみません」と声をかけて通してもらう', 'となりの人のいすに足をかけてこえる'],
    answer: 1,
    explain: 'ひとこと声をかけると、となりの人も気持ちよく立てます。'
  },
  {
    id: 'hikouki-5',
    category: '飛行機',
    scene: '飛行機が着いた。早く降りたい。',
    art: 'plane',
    question: 'どうする？',
    choices: ['ほかの人をおして前に出る', '動く前から立って待つ', '前の列の人から順に降りる'],
    answer: 2,
    explain: '前の人から順に降りると、みんなが早く安全に降りられます。'
  },
  {
    id: 'hikouki-6',
    category: '飛行機',
    scene: 'となりにすわる弟が、前の席の背を足でけっている。',
    art: 'plane',
    question: 'どうする？',
    choices: ['やめさせる', 'そのままにしておく', 'いっしょにけって遊ぶ'],
    answer: 0,
    explain: '前の席の人にゆれが伝わり、休めません。'
  },
  {
    id: 'hikouki-7',
    category: '飛行機',
    scene: '機内で映画を見る。',
    art: 'plane',
    question: '音は？',
    choices: ['スピーカーで大きく流す', 'イヤホンで聞く', '友だちと大声で感想を言い合う'],
    answer: 1,
    explain: 'まわりにはねている人もいます。音は自分だけに聞こえるようにします。'
  },
  {
    id: 'hikouki-8',
    category: '飛行機',
    scene: '客室乗務員を呼びたい。',
    art: 'plane',
    question: 'どうする？',
    choices: ['大声で「ちょっと！」と呼ぶ', '通る人の服を引っぱる', '呼び出しボタンを押す'],
    answer: 2,
    explain: 'ボタンを押すと、まわりの人をおこさずに呼べます。'
  },
  {
    id: 'hikouki-9',
    category: '飛行機',
    scene: '機内のトイレを使った。',
    art: 'plane',
    question: '出る前に？',
    choices: ['洗面台をさっとふいて出る', 'ぬれたままにして出る', 'ごみを床に置いて出る'],
    answer: 0,
    explain: '次の人が気持ちよく使えます。'
  },
  {
    id: 'hikouki-10',
    category: '飛行機',
    scene: 'となりの窓側の人がトイレに行きたそうだ。自分は通路側にすわっている。',
    art: 'plane',
    question: 'どうする？',
    choices: ['気づかないふりをする', '立って通してあげる', '足を通路にのばす'],
    answer: 1,
    explain: '通路側の人が立つと、奥の人も出やすくなります。'
  }
);
