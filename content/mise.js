// お店の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'お店',
  title: '週末の 買い物',
  intro: '今日は 休みの 日。近くの お店へ 買い物に 行きます。',
  art: 'shop'
});

Manners.questions.push(
  {
    id: 'mise-1',
    category: 'お店',
    scene: 'レジに 人が 並んで いる。',
    art: 'shop',
    question: 'どう する？',
    choices: ['列の うしろに 並ぶ', 'すいて いる 前の 方に 入る', '知り合いの 横に 入れて もらう'],
    answer: 0,
    explain: '先に 待って いる 人が います。列の うしろに 並んで 順番を 待ちます。'
  },
  {
    id: 'mise-2',
    category: 'お店',
    scene: 'かごに 入れた 品物を、やっぱり 買わない ことに した。',
    art: 'shop',
    question: '品物は どう する？',
    choices: ['近くの 棚に 置いて いく', 'もとの 場所に もどす', 'かごに 入れた まま 置いて 帰る'],
    answer: 1,
    explain: 'ほかの 人が さがせる ように、品物は もとの 場所に もどします。'
  },
  {
    id: 'mise-3',
    category: 'お店',
    scene: 'レジで お金を はらう。小さな トレーが 置いて ある。',
    art: 'shop',
    question: 'お金は どう わたす？',
    choices: ['トレーに 置く', '店員さんの 手に むりに にぎらせる', 'カウンターに 投げる ように 置く'],
    answer: 0,
    explain: 'お店の 人が 数えやすく、まちがいも へります。'
  },
  {
    id: 'mise-4',
    category: 'お店',
    scene: '品物と おつりを 受け取った。',
    art: 'shop',
    question: '店を 出る ときは？',
    choices: ['だまって 出る', 'スマホを 見ながら 出る', '「ありがとう」と ひとこと 言う'],
    answer: 2,
    explain: 'ひとことで、お店の 人も 自分も 気持ちよく なります。'
  },
  {
    id: 'mise-5',
    category: 'お店',
    scene: 'お店で 試食を すすめられた。',
    art: 'shop',
    question: 'どう する？',
    choices: ['何回も 取る', '1 つ だけ いただく', '家族の 分も 持ち帰る'],
    answer: 1,
    explain: '試食は 味を 知る ための 物です。1 つ だけに します。'
  }
);
