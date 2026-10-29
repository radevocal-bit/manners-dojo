// 電話とメールのマナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '電話とメール',
  title: 'はじめての 電話と メール',
  intro: '電話に 出る ことには 少し 慣れた。今日は 自分から 取引先に 電話を かけ、メールも 送る 日です。',
  art: 'phone'
});

Manners.questions.push(
  {
    id: 'denwa-1',
    category: '電話とメール',
    scene: '取引先に 電話を かけた。相手が 出た。',
    art: 'phone',
    question: 'まず 何を 言う？',
    choices: ['相手の 名前を 聞く', '自分の 会社名と 名前を 名乗る', 'すぐ 用件を 話す'],
    answer: 1,
    explain: 'かけた 側が 先に 名乗ります。そのあと 相手を 確かめて 用件に 入ります。'
  },
  {
    id: 'denwa-2',
    category: '電話とメール',
    scene: 'お客さまとの 電話。用件が すんだ。',
    art: 'phone',
    question: '電話は どう 切る？',
    choices: ['相手が 切ってから 静かに 切る', 'すぐに 自分から 切る', 'あいさつを せずに 切る'],
    answer: 0,
    explain: 'お客さまや 目上の 人との 電話は、相手が 切ったのを 確かめてから 切ります。ガチャンと 音を 立てないようにします。'
  },
  {
    id: 'denwa-3',
    category: '電話とメール',
    scene: '電話の 相手が、部長への 伝言を 話している。',
    art: 'phone',
    question: '伝言は どう 受ける？',
    choices: ['聞いて 覚えておく', 'あとで メールで 送ってもらう', 'メモを 取り、さいごに 復唱する'],
    answer: 2,
    explain: '聞きまちがいを ふせぐため メモを 取ります。日時や 数字は 復唱して 確かめます。'
  },
  {
    id: 'denwa-4',
    category: '電話とメール',
    scene: '取引先に メールで 資料を 送る。',
    art: 'office',
    question: '件名は どう する？',
    choices: ['空の まま 送る', '用件が 一目で わかる 件名に する', 'こんにちは とだけ 書く'],
    answer: 1,
    explain: '相手は たくさんの メールを 受け取ります。件名で 用件が わかると 見落とされにくいです。'
  },
  {
    id: 'denwa-5',
    category: '電話とメール',
    scene: 'たくさんの お客さまに、同じ お知らせを 一度に 送る。',
    art: 'office',
    question: 'お客さまの アドレスは どこに 入れる？',
    choices: ['全員を 宛先に 入れる', '全員を CC に 入れる', '全員を BCC に 入れる'],
    answer: 2,
    explain: '宛先や CC だと、全員の アドレスが ほかの お客さまに 見えて しまいます。おたがいを 知らない 人たちに 送る ときは BCCを 使います。'
  }
);
