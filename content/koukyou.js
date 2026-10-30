// 公共の場の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '公共の場',
  title: 'はじめての 電車 通勤',
  intro: '今日から 電車で 会社に 通います。朝の 電車は 人で いっぱい です。',
  art: 'train'
});

Manners.questions.push(
  {
    id: 'koukyou-1',
    category: '公共の場',
    scene: 'ホームで 待っていた。電車が 着いて ドアが 開いた。',
    art: 'train',
    question: '乗る ときは どうする？',
    choices: ['すぐ 乗りこむ', 'ドアの 横で 待ち、降りる 人を 先に 通す', 'ドアの 前に 立って 待つ'],
    answer: 1,
    explain: '降りる 人が 出ないと 乗れません。先に 通す ほうが 早く 乗れます。'
  },
  {
    id: 'koukyou-2',
    category: '公共の場',
    scene: 'こんだ 車内。せなかに リュックを せおっている。',
    art: 'train',
    question: 'リュックは どうする？',
    choices: ['前に かかえる', 'せおった まま 立つ', '横の 人に あずける'],
    answer: 0,
    explain: 'せなかの 荷物は 自分から 見えず、人に 当たります。'
  },
  {
    id: 'koukyou-3',
    category: '公共の場',
    scene: '車内で スマホに 電話が かかってきた。',
    art: 'train',
    question: 'どうする？',
    choices: ['小さな 声で 出て 話す', 'ふつうの 声で 話す', '出ずに、降りてから かけ直す'],
    answer: 2,
    explain: '車内の 通話は まわりの 迷惑に なります。マナーモードに しておきます。'
  },
  {
    id: 'koukyou-4',
    category: '公共の場',
    scene: '座っていたら、つえを ついた お年寄りが 乗ってきた。',
    art: 'train',
    question: 'どうする？',
    choices: ['気づかない ふりを する', '声を かけて 席を ゆずる', 'スマホを 見つづける'],
    answer: 1,
    explain: '立つのが つらい 人に 席を ゆずります。声を かけると 相手も 座りやすいです。'
  },
  {
    id: 'koukyou-5',
    category: '公共の場',
    scene: '雨の 日。ぬれた 傘を 持って 乗った。',
    art: 'train',
    question: '傘は どう 持つ？',
    choices: ['たたんで とめ、自分の 足元で 持つ', '開いた まま 持つ', '横に して わきに はさむ'],
    answer: 0,
    explain: 'ぬれた 傘で まわりの 人の 服や 荷物を ぬらさないようにします。'
  }
);
