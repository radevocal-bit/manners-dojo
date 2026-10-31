// 病院の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '病院',
  title: '病院の 待合室',
  intro: 'かぜを ひいて、近くの 病院へ 行きます。待合室では ほかの 人も 待って います。',
  art: 'clinic'
});

Manners.questions.push(
  {
    id: 'byouin-1',
    category: '病院',
    scene: '病院に 着いた。入口の 近くに 受付が ある。',
    art: 'clinic',
    question: 'はじめに する ことは？',
    choices: ['空いて いる いすに すわって 待つ', '診察室の ドアを 開けて 入る', '受付で 保険証を 出す'],
    answer: 2,
    explain: '受付を すませると、順番に 名前を 呼んで もらえます。'
  },
  {
    id: 'byouin-2',
    category: '病院',
    scene: '待合室で 待って いる。せきが 出る。',
    art: 'clinic',
    question: 'どう する？',
    choices: ['マスクを する', '口を おおわずに せきを する', 'ほかの 人の すぐ 横に すわる'],
    answer: 0,
    explain: 'せきの しぶきが ほかの 人に とばない ように します。'
  },
  {
    id: 'byouin-3',
    category: '病院',
    scene: '待合室で 待って いる。スマホを 持って いる。',
    art: 'clinic',
    question: 'スマホは？',
    choices: ['音が 鳴る まま に して おく', 'マナーモードに する', '待合室で 電話を かける'],
    answer: 1,
    explain: '病院には 具合の 悪い 人が います。音を 出さずに 静かに 待ちます。'
  },
  {
    id: 'byouin-4',
    category: '病院',
    scene: '待合室で 名前を 呼ばれた。',
    art: 'clinic',
    question: 'どう する？',
    choices: ['「はい」と 返事を して 行く', 'だまって ゆっくり 立つ', 'スマホを 見終わってから 行く'],
    answer: 0,
    explain: '返事を すると、呼んだ 人に 聞こえた ことが 伝わります。'
  },
  {
    id: 'byouin-5',
    category: '病院',
    scene: '診察室で お医者さんに「どう しましたか」と 聞かれた。',
    art: 'clinic',
    question: 'どう 答える？',
    choices: ['「だいじょうぶです」と だけ 言う', '関係の ない 話を 長く する', 'いつから どこが 悪いかを 伝える'],
    answer: 2,
    explain: '具合を 正しく 伝えると、合った 手当てを して もらえます。'
  },
  {
    id: 'byouin-6',
    category: '病院',
    scene: '友だちが 入院した。お見舞いに 花を 持って いきたい。',
    art: 'clinic',
    question: 'どう する？',
    choices: ['鉢植えの 花を 買って いく', '花を 持ちこんで よいか 病院に たしかめる', '香りの 強い 花を たくさん 持って いく'],
    answer: 1,
    explain: '花を 持ちこめない 病院も あります。鉢植えは「根づく」が「寝づく」に 聞こえるので さけます。'
  },
  {
    id: 'byouin-7',
    category: '病院',
    scene: '大部屋に 入院して いる 友だちを お見舞いする。',
    art: 'clinic',
    question: 'どう する？',
    choices: ['大きな 声で 笑って 話す', '面会の 時間が 終わるまで いる', '小さな 声で 話し、短めに 帰る'],
    answer: 2,
    explain: '同じ 部屋で ほかの 人も 休んで います。友だちも つかれやすいので、短めに します。'
  },
  {
    id: 'byouin-8',
    category: '病院',
    scene: '病院の ろうかを 歩いて いる。',
    art: 'clinic',
    question: '歩き方は？',
    choices: ['走らずに ゆっくり 歩く', '急いで 走る', '友だちと 横に 広がって 歩く'],
    answer: 0,
    explain: '病院には 体の 弱い 人や、車いすの 人が います。'
  },
  {
    id: 'byouin-9',
    category: '病院',
    scene: '診察が 終わった。',
    art: 'clinic',
    question: 'このあとは？',
    choices: ['だまって 帰る', '受付で 会計を すませて 帰る', '診察室で 次の 人を 待つ'],
    answer: 1,
    explain: '診察の お金を はらってから 帰ります。'
  },
  {
    id: 'byouin-10',
    category: '病院',
    scene: 'お見舞いに 行く 日。朝から かぜで せきが 出る。',
    art: 'clinic',
    question: 'どう する？',
    choices: ['かぜが 治ってから 行く', 'マスクを せずに 行く', '病室で せきを しながら 長く いる'],
    answer: 0,
    explain: '入院して いる 人に かぜを うつさない ように します。'
  }
);
