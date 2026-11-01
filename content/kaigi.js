// 会議の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '会議',
  title: 'はじめての会議',
  intro: '今日ははじめて部の会議に出る。課長も取引先の話をします。',
  art: 'office'
});

Manners.questions.push(
  {
    id: 'kaigi-1',
    category: '会議',
    scene: '10時から会議がある。',
    art: 'office',
    question: '会議室にはいつ入る？',
    choices: ['10時ちょうどに入る', '始まってからそっと入る', '5分前には入って待つ'],
    answer: 2,
    explain: '始まる前に席につき、資料を見ておきます。'
  },
  {
    id: 'kaigi-2',
    category: '会議',
    scene: '会議が始まる。スマホを持っている。',
    art: 'office',
    question: 'スマホはどうする？',
    choices: ['マナーモードにしてしまう', '机の上に出しておく', '鳴ったら出る'],
    answer: 0,
    explain: '音や光で話をじゃましません。'
  },
  {
    id: 'kaigi-3',
    category: '会議',
    scene: '先輩が話している途中で、言いたいことがうかんだ。',
    art: 'office',
    question: 'いつ話す？',
    choices: ['すぐ話に入る', '相手が話し終わってから話す', '会議のあとで先輩にだけ言う'],
    answer: 1,
    explain: '人の話をさえぎらず、終わってから話します。'
  },
  {
    id: 'kaigi-4',
    category: '会議',
    scene: '会議で大事なことが決まっていく。',
    art: 'office',
    question: '何をする？',
    choices: ['うなずくだけにする', 'あとで思い出す', 'メモをとる'],
    answer: 2,
    explain: '決まったことや自分の仕事をあとで確かめられます。'
  },
  {
    id: 'kaigi-5',
    category: '会議',
    scene: '会議が終わった。',
    art: 'office',
    question: '決まったことはどうする？',
    choices: ['チームに共有する', '自分だけ覚えておく', '次の会議まで何もしない'],
    answer: 0,
    explain: '出ていない人にも伝わり、仕事がすすみます。'
  },
  {
    id: 'kaigi-6',
    category: '会議',
    scene: '会議が終わり、みんなが部屋を出ていく。',
    art: 'office',
    question: '会議室はどうする？',
    choices: ['そのまま部屋を出る', '机といすをもとにもどし、ホワイトボードを消す', '片づけは次に使う人にまかせる'],
    answer: 1,
    explain: '次に使う人がすぐ使えるように、来たときの形にもどします。'
  },
  {
    id: 'kaigi-7',
    category: '会議',
    scene: '次の会議。話の途中で、パソコンにメールが届いた。',
    art: 'office',
    question: 'メールはどうする？',
    choices: ['会議のあいだは開かず、終わってから読む', 'すぐ開いて返事を書く', '話を聞きながら返事を書く'],
    answer: 0,
    explain: '会議のあいだは話に集中します。ほかの仕事はあとでします。'
  },
  {
    id: 'kaigi-8',
    category: '会議',
    scene: '自分とちがう意見が出た。',
    art: 'office',
    question: 'どう伝える？',
    choices: ['すぐに「それはちがいます」と言う', 'その場ではだまり、あとで文句を言う', '相手の意見を受けとめてから、自分の考えを言う'],
    answer: 2,
    explain: '相手を否定せずに話すと、話し合いがすすみます。'
  },
  {
    id: 'kaigi-9',
    category: '会議',
    scene: '別の日。オンライン会議で、話を聞いている。',
    art: 'office',
    question: 'マイクはどうする？',
    choices: ['話すときだけオンにし、ほかはミュートにする', 'ずっとオンにしておく', 'まわりの音が入っても気にしない'],
    answer: 0,
    explain: 'まわりの音が入ると、話している人の声が聞きにくくなります。'
  },
  {
    id: 'kaigi-10',
    category: '会議',
    scene: 'オンライン会議が終わった。',
    art: 'office',
    question: '画面から出るときは？',
    choices: ['あいさつもせずにすぐ切る', '「ありがとうございました」とあいさつしてから出る', '画面をつけたまま席をはなれる'],
    answer: 1,
    explain: 'お礼を伝えてから出ると、気持ちよく終われます。'
  }
);
