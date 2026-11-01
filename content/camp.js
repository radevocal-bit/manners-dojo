// キャンプ場の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'キャンプ場',
  title: 'はじめての キャンプ',
  intro: '週末に 家族と キャンプ場へ 来ました。',
  art: 'camp'
});

Manners.questions.push(
  {
    id: 'camp-1',
    category: 'キャンプ場',
    scene: 'キャンプ場に 着いた。受付が ある。',
    art: 'camp',
    question: '着いたら まず？',
    choices: ['受付で 名前を 言い、決まりを 聞く', 'すぐに 好きな 場所に テントを 張る', '車で 草地の 中まで 入る'],
    answer: 0,
    explain: '受付で 場所と 決まりを 聞くと、ほかの 人と ぶつからずに 使えます。'
  },
  {
    id: 'camp-2',
    category: 'キャンプ場',
    scene: 'となりの 区画との 間に 細い 道が ある。',
    art: 'camp',
    question: 'テントを 張る 場所は？',
    choices: ['となりの 区画に はみ出す', '決められた 自分の 区画の 中', '通る 道の まん中'],
    answer: 1,
    explain: '区画を 守ると、となりの 人も 道を 通る 人も こまりません。'
  },
  {
    id: 'camp-3',
    category: 'キャンプ場',
    scene: 'ばんごはんの あと、ごみが たくさん 出た。',
    art: 'camp',
    question: 'ごみは？',
    choices: ['草むらに うめて かくす', 'たき火で 全部 燃やす', '分けて 決められた 所に 出すか、持ち帰る'],
    answer: 2,
    explain: 'ごみを 残すと、動物が 荒らしたり、次の 人が いやな 思いを したり します。'
  },
  {
    id: 'camp-4',
    category: 'キャンプ場',
    scene: 'たき火を したい。',
    art: 'camp',
    question: 'たき火は どこで？',
    choices: ['たき火台を 使い、決められた 場所で する', '芝生の 上に 直接 火を つける', 'テントの すぐ そばで する'],
    answer: 0,
    explain: '芝生に 直接 火を つけると 地面が こげます。テントの そばは 燃え移って あぶないです。'
  },
  {
    id: 'camp-5',
    category: 'キャンプ場',
    scene: '夜 おそく なった。まわりの テントは 静か。',
    art: 'camp',
    question: '夜は？',
    choices: ['大きな 声で 歌い続ける', '声を 小さく して、音楽も 止める', '車の エンジンを かけたまま に する'],
    answer: 1,
    explain: 'テントの 布は 音を 通します。消灯の 時間の あとは 静かに すごします。'
  },
  {
    id: 'camp-6',
    category: 'キャンプ場',
    scene: '炊事場で 食器を 洗う。',
    art: 'camp',
    question: '洗う ときは？',
    choices: ['残った ごはんを 流しに そのまま 流す', '水を 出しっぱなしに する', '残りを ふき取ってから、手早く 洗う'],
    answer: 2,
    explain: '食べ残しを 流すと 流しが つまります。みんなで 使う 場所なので 手早く 洗います。'
  },
  {
    id: 'camp-7',
    category: 'キャンプ場',
    scene: 'たき火が 終わった。もう ねる。',
    art: 'camp',
    question: '火は？',
    choices: ['水を かけて、完全に 消えたのを 確かめる', '自然に 消えるまで 放って おく', '砂を 少し かけて すぐ ねる'],
    answer: 0,
    explain: '残った 火から 火事に なる ことが あります。水で しっかり 消します。'
  },
  {
    id: 'camp-8',
    category: 'キャンプ場',
    scene: '近くの 林に 花が たくさん 咲いて いる。',
    art: 'camp',
    question: '花は？',
    choices: ['きれいなので つんで 持ち帰る', '見るだけに して、そのまま に して おく', '枝ごと 折って かざる'],
    answer: 1,
    explain: '自然の 花や 木は みんなの もの です。とらずに 残します。'
  },
  {
    id: 'camp-9',
    category: 'キャンプ場',
    scene: 'となりの 区画を 通ると 近道に なる。',
    art: 'camp',
    question: '通る ときは？',
    choices: ['テントの ロープを またいで 通る', 'だまって よその 区画を 横切る', 'よその 区画は 通らず、道を 歩く'],
    answer: 2,
    explain: '区画は その 人の 場所 です。ロープに 足を かけると テントが こわれます。'
  },
  {
    id: 'camp-10',
    category: 'キャンプ場',
    scene: '帰る 日の 朝。テントを たたんだ。',
    art: 'camp',
    question: '帰る 前に？',
    choices: ['そのまま 車に 乗って 帰る', 'ごみや 忘れ物が ないか 見て、来た 時より きれいに する', 'ペグを 地面に 残して おく'],
    answer: 1,
    explain: '来た 時より きれいに すると、次の 人も 気持ちよく 使えます。'
  }
);
