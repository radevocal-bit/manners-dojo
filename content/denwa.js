// 電話とメールのマナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '電話とメール',
  title: 'はじめての電話とメール',
  intro: '電話に出ることには少し慣れた。今日は自分から取引先に電話をかけ、メールも送る日です。',
  art: 'phone'
});

Manners.questions.push(
  {
    id: 'denwa-1',
    category: '電話とメール',
    scene: '取引先に電話をかけた。相手が出た。',
    art: 'phone',
    question: 'まず何を言う？',
    choices: ['相手の名前を聞く', '自分の会社名と名前を名乗る', 'すぐ用件を話す'],
    answer: 1,
    explain: 'かけた側が先に名乗ります。そのあと相手を確かめて用件に入ります。'
  },
  {
    id: 'denwa-2',
    category: '電話とメール',
    scene: 'お客さまとの電話。用件がすんだ。',
    art: 'phone',
    question: '電話はどう切る？',
    choices: ['相手が切ってから静かに切る', 'すぐに自分から切る', 'あいさつをせずに切る'],
    answer: 0,
    explain: 'お客さまや目上の人との電話は、相手が切ったのを確かめてから切ります。ガチャンと音を立てないようにします。'
  },
  {
    id: 'denwa-3',
    category: '電話とメール',
    scene: '電話の相手が、部長への伝言を話している。',
    art: 'phone',
    question: '伝言はどう受ける？',
    choices: ['聞いて覚えておく', 'あとでメールで送ってもらう', 'メモを取り、さいごに復唱する'],
    answer: 2,
    explain: '聞きまちがいをふせぐためメモを取ります。日時や数字は復唱して確かめます。'
  },
  {
    id: 'denwa-4',
    category: '電話とメール',
    scene: '取引先にメールで資料を送る。',
    art: 'office',
    question: '件名はどうする？',
    choices: ['空のまま送る', '用件が一目でわかる件名にする', 'こんにちはとだけ書く'],
    answer: 1,
    explain: '相手はたくさんのメールを受け取ります。件名で用件がわかると見落とされにくいです。'
  },
  {
    id: 'denwa-5',
    category: '電話とメール',
    scene: 'たくさんのお客さまに、同じお知らせを一度に送る。',
    art: 'office',
    question: 'お客さまのアドレスはどこに入れる？',
    choices: ['全員を宛先に入れる', '全員を CC に入れる', '全員を BCC に入れる'],
    answer: 2,
    explain: '宛先や CC だと、全員のアドレスがほかのお客さまに見えてしまいます。おたがいを知らない人たちに送るときは BCCを使います。'
  },
  {
    id: 'denwa-6',
    category: '電話とメール',
    scene: '電話の相手の声がとても聞こえにくい。',
    art: 'phone',
    question: 'どう伝える？',
    choices: ['「お電話が少し遠いようです」と伝える', '「声が小さいです」と言う', '聞こえたふりをする'],
    answer: 0,
    explain: '相手のせいにしない言い方で、もう一度話してもらうためです。'
  },
  {
    id: 'denwa-7',
    category: '電話とメール',
    scene: '課長あての電話。課長は会議で席にいない。',
    art: 'phone',
    question: 'どう答える？',
    choices: ['「いません」とだけ言って切る', '課長の携帯の番号を教える', '戻る時間を伝え、折り返しの電話を申し出る'],
    answer: 2,
    explain: '相手が次にどうすればよいかわかるようにするためです。'
  },
  {
    id: 'denwa-8',
    category: '電話とメール',
    scene: '取引先にはじめてメールを書く。',
    art: 'office',
    question: 'メールのはじめには？',
    choices: ['すぐ用件を書く', '相手の会社名と名前の宛名と、あいさつを書く', '「おつかれ」と書く'],
    answer: 1,
    explain: 'だれにあてたメールかをはっきりさせ、ていねいに始めるためです。'
  },
  {
    id: 'denwa-9',
    category: '電話とメール',
    scene: '取引先のメールに返事を書く。',
    art: 'office',
    question: '件名はどうする？',
    choices: ['「Re:」をつけたまま返す', '件名を消して返す', 'まったく新しい件名にする'],
    answer: 0,
    explain: 'どのメールへの返事か、相手がすぐわかるようにするためです。'
  },
  {
    id: 'denwa-10',
    category: '電話とメール',
    scene: '夜10時。取引先に聞きたいことを思い出した。',
    art: 'phone',
    question: '電話はいつかける？',
    choices: ['思い出した今かける', '出るまで何度もかける', '急ぎでなければ次の営業時間にかける'],
    answer: 2,
    explain: '相手の時間を大切にするためです。'
  }
);
