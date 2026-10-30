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
  }
);
