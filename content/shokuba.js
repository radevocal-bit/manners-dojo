// 職場のマナー。
// お話の 順に 並べている（朝 → 電話 → 午後の 訪問 → 夕方の 来客）。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '職場',
  title: '新人の一日',
  intro: '今日から社会人。課長からの仕事、鳴りだす電話、はじめての名刺。気のぬけない一日がはじまります。',
  art: 'office'
});

Manners.questions.push(
  {
    id: 'shokuba-3',
    category: '職場',
    scene: '朝。課長から「この資料をまとめておいて」とたのまれた。',
    art: 'office',
    question: '目上の人に「わかりました」と伝えるとき、よりていねいなのは？',
    choices: ['承知しました', '了解です', 'オッケーです'],
    answer: 0,
    explain: '目上の人には「承知しました」「かしこまりました」がていねいです。'
  },
  {
    id: 'shokuba-5',
    category: '職場',
    scene: '席で資料を作っていると、会社の電話が鳴りだした。',
    art: 'phone',
    question: '会社の電話が鳴ったら、いつまでに出るのがよい？',
    choices: ['3回鳴るまでに', '10回鳴ってから', '鳴りやむまで待つ'],
    answer: 0,
    explain: '3回（3コール）までに出るのが目安です。それより待たせたときは「お待たせいたしました」と言ってから名乗ります。'
  },
  {
    id: 'shokuba-2',
    category: '職場',
    scene: '電話は取引先から。田中部長の伝言を伝えることになった。',
    art: 'phone',
    question: '会社の外の人に、自分の会社の田中部長のことを話すときは？',
    choices: ['田中部長が申しておりました', '田中さんがおっしゃっていました', '部長の田中が申しておりました'],
    answer: 2,
    explain: '会社の外の人と話すとき、自分の会社の人は「身内」です。「田中部長」「田中さん」ではなく「部長の田中」と言い、「申す」などへりくだった言葉を使います。'
  },
  {
    id: 'shokuba-1',
    category: '職場',
    scene: '午後は先輩と取引先の会社へ。はじめて名刺を交換する。',
    art: 'meishi',
    question: '名刺を交換するとき、先に名刺を出すのは？',
    choices: ['立場が上の人', '訪ねた側や立場が下の人', 'どちらでもよい'],
    answer: 1,
    explain: '名刺は、訪ねた側や立場が下の人から先に出すのが基本です。両手で、相手が読める向きにして出します。'
  },
  {
    id: 'shokuba-4',
    category: '職場',
    scene: '夕方、お客さまが会社に来られた。応接室へご案内する。',
    art: 'room',
    question: '応接室で、お客さまに座ってもらう席は？',
    choices: ['入り口にいちばん近い席', 'どこでもよい', '入り口からいちばん遠い席'],
    answer: 2,
    explain: '入り口から遠い席が「上座」で、お客さまや目上の人の席です。入り口に近い席は「下座」です。'
  },
  {
    id: 'shokuba-6',
    category: '職場',
    scene: '朝、電車が止まった。始業に間に合いそうにない。',
    art: 'office',
    question: 'どうする？',
    choices: ['着いてからあやまる', '何も言わずに行く', '始業前に電話で連絡する'],
    answer: 2,
    explain: '早く知らせると、仕事の段取りを変えられます。'
  },
  {
    id: 'shokuba-7',
    category: '職場',
    scene: '課長に仕事の報告をする。',
    art: 'office',
    question: 'どう話す？',
    choices: ['結論から先に話す', '起きた順に長く話す', '聞かれるまで話さずに待つ'],
    answer: 0,
    explain: '結論が先にわかると、相手がすぐ判断できます。'
  },
  {
    id: 'shokuba-8',
    category: '職場',
    scene: '仕事が終わった。先輩たちはまだ働いている。',
art: 'office',
    question: '帰るときは？',
    choices: ['何も言わずに帰る', '「お先に失礼します」と言って帰る', '「ご苦労さま」と言って帰る'],
    answer: 1,
    explain: '先に帰ることをひとこと伝えます。「ご苦労さま」は目上の人には使いません。'
  },
  {
    id: 'shokuba-9',
    category: '職場',
    scene: '取引先から仕事のメールが届いた。',
    art: 'office',
    question: '返事はいつする？',
    choices: ['その日のうちに返す', '1週間後に返す', '返事はしない'],
    answer: 0,
    explain: 'すぐに答えが出なくても、受け取ったことをその日に伝えます。'
  },
  {
    id: 'shokuba-10',
    category: '職場',
    scene: '帰りの電車で、同じ会社の人と会った。',
    art: 'office',
    question: '仕事の話は？',
    choices: ['ふつうに話す', '取引先の名前も出して話す', 'お客さまの名前や仕事のひみつは外で話さない'],
    answer: 2,
    explain: 'だれが聞いているかわかりません。'
  }
);
