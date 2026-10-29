// 職場のマナー。
// お話の 順に 並べている（朝 → 電話 → 午後の 訪問 → 夕方の 来客）。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '職場',
  title: '新人の 一日',
  intro: '今日から 社会人。課長からの 仕事、鳴りだす 電話、はじめての 名刺。気の ぬけない 一日が はじまります。',
  art: 'office'
});

Manners.questions.push(
  {
    id: 'shokuba-3',
    category: '職場',
    scene: '朝。課長から「この 資料を まとめておいて」と たのまれた。',
    art: 'office',
    question: '目上の人に「わかりました」と 伝えるとき、より ていねいなのは？',
    choices: ['承知しました', '了解です', 'オッケーです'],
    answer: 0,
    explain: '目上の人には「承知しました」「かしこまりました」が ていねいです。'
  },
  {
    id: 'shokuba-5',
    category: '職場',
    scene: '席で 資料を 作っていると、会社の 電話が 鳴りだした。',
    art: 'phone',
    question: '会社の電話が 鳴ったら、いつまでに出るのが よい？',
    choices: ['3 回 鳴るまでに', '10 回 鳴ってから', '鳴りやむまで 待つ'],
    answer: 0,
    explain: '3 回（3 コール）までに 出るのが 目安です。それより 待たせたときは「お待たせいたしました」と言ってから 名乗ります。'
  },
  {
    id: 'shokuba-2',
    category: '職場',
    scene: '電話は 取引先から。田中部長の 伝言を 伝える ことに なった。',
    art: 'phone',
    question: '会社の外の人に、自分の会社の 田中部長のことを 話すときは？',
    choices: ['田中部長が 申しておりました', '田中さんが おっしゃっていました', '部長の田中が 申しておりました'],
    answer: 2,
    explain: '会社の外の人と 話すとき、自分の会社の人は「身内」です。「田中部長」「田中さん」ではなく「部長の田中」と言い、「申す」など へりくだった言葉を 使います。'
  },
  {
    id: 'shokuba-1',
    category: '職場',
    scene: '午後は 先輩と 取引先の 会社へ。はじめて 名刺を 交換する。',
    art: 'meishi',
    question: '名刺を 交換するとき、先に 名刺を出すのは？',
    choices: ['立場が 上の人', '訪ねた側や 立場が 下の人', 'どちらでも よい'],
    answer: 1,
    explain: '名刺は、訪ねた側や 立場が下の人から 先に出すのが 基本です。両手で、相手が 読める向きにして 出します。'
  },
  {
    id: 'shokuba-4',
    category: '職場',
    scene: '夕方、お客さまが 会社に 来られた。応接室へ ご案内する。',
    art: 'room',
    question: '応接室で、お客さまに 座ってもらう席は？',
    choices: ['入り口に いちばん近い席', 'どこでも よい', '入り口から いちばん遠い席'],
    answer: 2,
    explain: '入り口から 遠い席が「上座」で、お客さまや 目上の人の席です。入り口に近い席は「下座」です。'
  }
);
