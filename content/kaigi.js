// 会議の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '会議',
  title: 'はじめての 会議',
  intro: '今日は はじめて 部の 会議に 出る。課長も 取引先の 話を します。',
  art: 'office'
});

Manners.questions.push(
  {
    id: 'kaigi-1',
    category: '会議',
    scene: '10 時から 会議が ある。',
    art: 'office',
    question: '会議室には いつ 入る？',
    choices: ['10 時ちょうどに 入る', '始まって から そっと 入る', '5 分前には 入って 待つ'],
    answer: 2,
    explain: '始まる 前に 席に つき、資料を 見て おきます。'
  },
  {
    id: 'kaigi-2',
    category: '会議',
    scene: '会議が 始まる。スマホを 持って いる。',
    art: 'office',
    question: 'スマホは どう する？',
    choices: ['マナーモードに して しまう', '机の 上に 出して おく', '鳴ったら 出る'],
    answer: 0,
    explain: '音や 光で 話を じゃま しません。'
  },
  {
    id: 'kaigi-3',
    category: '会議',
    scene: '先輩が 話して いる 途中で、言いたい ことが うかんだ。',
    art: 'office',
    question: 'いつ 話す？',
    choices: ['すぐ 話に 入る', '相手が 話し終わって から 話す', '会議の あとで 先輩に だけ 言う'],
    answer: 1,
    explain: '人の 話を さえぎらず、終わって から 話します。'
  },
  {
    id: 'kaigi-4',
    category: '会議',
    scene: '会議で 大事な ことが 決まって いく。',
    art: 'office',
    question: '何を する？',
    choices: ['うなずく だけに する', 'あとで 思い出す', 'メモを とる'],
    answer: 2,
    explain: '決まった ことや 自分の 仕事を あとで 確かめられます。'
  },
  {
    id: 'kaigi-5',
    category: '会議',
    scene: '会議が 終わった。',
    art: 'office',
    question: '決まった ことは どう する？',
    choices: ['チームに 共有する', '自分だけ 覚えて おく', '次の 会議まで 何も しない'],
    answer: 0,
    explain: '出て いない 人にも 伝わり、仕事が すすみます。'
  },
  {
    id: 'kaigi-6',
    category: '会議',
    scene: '会議が 終わり、みんなが 部屋を 出て いく。',
    art: 'office',
    question: '会議室は どう する？',
    choices: ['そのまま 部屋を 出る', '机と いすを もとに もどし、ホワイトボードを 消す', '片づけは 次に 使う 人に まかせる'],
    answer: 1,
    explain: '次に 使う 人が すぐ 使えるように、来た ときの 形に もどします。'
  },
  {
    id: 'kaigi-7',
    category: '会議',
    scene: '次の 会議。話の 途中で、パソコンに メールが 届いた。',
    art: 'office',
    question: 'メールは どう する？',
    choices: ['会議の あいだは 開かず、終わってから 読む', 'すぐ 開いて 返事を 書く', '話を 聞きながら 返事を 書く'],
    answer: 0,
    explain: '会議の あいだは 話に 集中します。ほかの 仕事は あとで します。'
  },
  {
    id: 'kaigi-8',
    category: '会議',
    scene: '自分と ちがう 意見が 出た。',
    art: 'office',
    question: 'どう 伝える？',
    choices: ['すぐに「それは ちがいます」と 言う', 'その 場では だまり、あとで 文句を 言う', '相手の 意見を 受けとめてから、自分の 考えを 言う'],
    answer: 2,
    explain: '相手を 否定せずに 話すと、話し合いが すすみます。'
  },
  {
    id: 'kaigi-9',
    category: '会議',
    scene: '別の 日。オンライン会議で、話を 聞いて いる。',
    art: 'office',
    question: 'マイクは どう する？',
    choices: ['話す とき だけ オンに し、ほかは ミュートに する', 'ずっと オンに して おく', 'まわりの 音が 入っても 気に しない'],
    answer: 0,
    explain: 'まわりの 音が 入ると、話して いる 人の 声が 聞きにくく なります。'
  },
  {
    id: 'kaigi-10',
    category: '会議',
    scene: 'オンライン会議が 終わった。',
    art: 'office',
    question: '画面から 出る ときは？',
    choices: ['あいさつも せずに すぐ 切る', '「ありがとうございました」と あいさつ してから 出る', '画面を つけた まま 席を はなれる'],
    answer: 1,
    explain: 'お礼を 伝えてから 出ると、気持ちよく 終われます。'
  }
);
