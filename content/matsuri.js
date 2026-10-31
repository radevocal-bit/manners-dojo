// お祭りの マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.stories = Manners.stories || [];
Manners.questions = Manners.questions || [];

Manners.stories.push({
  category: 'お祭り',
  title: '夏祭りの 夜',
  intro: '近所の 神社で 夏祭りが あります。友だちと 出かけました。',
  art: 'festival'
});

Manners.questions.push(
  {
    id: 'matsuri-1',
    category: 'お祭り',
    scene: '屋台で やきそばを 買った。食べ終わって、空の 入れ物が ある。',
    art: 'festival',
    question: '入れ物は？',
    choices: ['道ばたに 置く', 'ごみ箱に 捨てるか、持ち帰る', '屋台の 台に 置いて いく'],
    answer: 1,
    explain: 'ごみを 置いて いくと、お祭りの あとの 片付けが 大変に なります。'
  },
  {
    id: 'matsuri-2',
    category: 'お祭り',
    scene: '屋台の 前に 長い 列が できて いる。',
    art: 'festival',
    question: '並ぶ ときは？',
    choices: ['列の とちゅうに 入る', '友だちに 先に 並んで もらい、あとから 何人も 入る', '列の いちばん うしろに 並ぶ'],
    answer: 2,
    explain: '列は 来た 順です。うしろに 並びます。'
  },
  {
    id: 'matsuri-3',
    category: 'お祭り',
    scene: '人が とても 多い 道を 歩いて いる。手に わたあめを 持って いる。',
    art: 'festival',
    question: '歩く ときは？',
    choices: ['人に ぶつけない ように 気を つけて 持つ', 'ふりまわしながら 歩く', '走って 人の 間を ぬける'],
    answer: 0,
    explain: 'こんで いる 所では、食べ物が 人の 服に つかない ように 持ちます。'
  },
  {
    id: 'matsuri-4',
    category: 'お祭り',
    scene: '花火を 見る ために、早めに 場所を とりたい。',
    art: 'festival',
    question: '場所は？',
    choices: ['決められた 場所で、必要な 広さ だけ 使う', '大きな シートで 広く 取る', '道の まん中に すわる'],
    answer: 0,
    explain: '見たい 人は たくさん います。みんなが 見られる ように、広く 取りすぎません。'
  },
  {
    id: 'matsuri-5',
    category: 'お祭り',
    scene: '神社の 前を 通る。お参りを したい。',
    art: 'festival',
    question: 'どう する？',
    choices: ['列に 並び、順番に お参りする', '前の 人を 押して 進む', 'さいせん箱に 遠くから 投げる'],
    answer: 0,
    explain: 'お参りの 列も 順番を 守ります。お金は 投げずに そっと 入れます。'
  },
  {
    id: 'matsuri-6',
    category: 'お祭り',
    scene: '子どもが 迷子に なって 泣いて いる。',
    art: 'festival',
    question: '迷子を 見つけたら？',
    choices: ['見なかった ことに する', '自分の 家に 連れて 帰る', '近くの 係の 人や 本部に 知らせる'],
    answer: 2,
    explain: '迷子は 係の 人や 本部に 知らせます。親を さがす 方法が あります。'
  },
  {
    id: 'matsuri-7',
    category: 'お祭り',
    scene: '夜に なって、家の 近くの 道を 帰る。',
    art: 'festival',
    question: '帰り道は？',
    choices: ['大きな 声で さわぎながら 帰る', '近所の 家に 気を つけて 静かに 帰る', '花火の 残りを 道で する'],
    answer: 1,
    explain: '夜は 休んで いる 人も います。静かに 帰ります。'
  },
  {
    id: 'matsuri-8',
    category: 'お祭り',
    scene: '屋台で 食べ物を 買った。歩きながら 食べたい。',
    art: 'festival',
    question: '食べる ときは？',
    choices: ['こんだ 道で 歩きながら 食べる', '決められた 場所や すいて いる 所で 止まって 食べる', '神社の 階段に 広げて 食べる'],
    answer: 1,
    explain: 'こんだ 中を 歩きながら 食べると、人に ぶつかって あぶないです。'
  },
  {
    id: 'matsuri-9',
    category: 'お祭り',
    scene: '友だちと 写真を とりたい。道は 人で いっぱいだ。',
    art: 'festival',
    question: '写真は？',
    choices: ['道の まん中で 止まって とる', '屋台の 中に 入って とる', '人の じゃまに ならない はしで とる'],
    answer: 2,
    explain: '道の まん中で 止まると、人の 流れを 止めて しまいます。'
  },
  {
    id: 'matsuri-10',
    category: 'お祭り',
    scene: '屋台の 人に 注文する。',
    art: 'festival',
    question: '注文の ときは？',
    choices: ['「やきそば ください」と はっきり 言う', '指で さす だけで だまって いる', 'お金を 投げて わたす'],
    answer: 0,
    explain: 'ひとこと 言うと、屋台の 人も わかりやすく、気持ち よく やり取りが できます。'
  }
);
